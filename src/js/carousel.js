(function ($) {
  
    var methods = {
  
      init : function(options) {
        var defaults = {
          duration: 200, // ms
          dist: -100, // zoom scale TODO: make this more intuitive as an option
          shift: 0, // spacing for center image
          padding: 0, // Padding between non center items
          fullWidth: false, // Change to full width styles
          indicators: false, // Toggle indicators
          noWrap: false, // Don't wrap around and cycle through items.
          onCycleTo: null // Callback for when a new slide is cycled to.
        };
        options = $.extend(defaults, options);
        var namespace = Materialize.objectSelectorString($(this));
        var tweenedOpacity, zTranslation, y;
  
        return this.each(function(i) {
  
          var images, item_width, item_height, offset, center, pressed, dim, count,
              reference, referenceY, amplitude, target, velocity, scrolling,
              xform, frame, timestamp, ticker, dragged, vertical_dragged;
          var $indicators = $('<ul class="indicators"></ul>');
          var scrollingTimeout = null;
          var oneTimeCallback = null;
          let autoplayTimout;
          let autoplayStatus = {
            _shouldPlay: true,
            _timeout: undefined
          };
          let slided;

          // Initialize
          var view = $(this);
          var hasMultipleSlides = view.find('.carousel-item').length > 1;
          var showIndicators = (view.attr('data-indicators') || options.indicators) && hasMultipleSlides;
          var noWrap = (view.attr('data-no-wrap') || options.noWrap) || !hasMultipleSlides;
          var uniqueNamespace = view.attr('data-namespace') || namespace+i;
          view.attr('data-namespace', uniqueNamespace);

          // Options
          var setCarouselHeight = function(imageOnly) {
            var firstSlide = view.find('.carousel-item.active').length ? view.find('.carousel-item.active').first() : view.find('.carousel-item').first();
            var firstImage = firstSlide.find('img').first();
            if (firstImage.length) {
              if (firstImage[0].complete) {
                // If image won't trigger the load event
                var imageHeight = firstImage.height();
                if (imageHeight > 0) {
                  view.css('height', firstImage.height());
                } else {
                  // If image still has no height, use the natural dimensions to calculate
                  var naturalWidth = firstImage[0].naturalWidth;
                  var naturalHeight = firstImage[0].naturalHeight;
                  var adjustedHeight = (view.width() / naturalWidth) * naturalHeight;
                  view.css('height', adjustedHeight);
                }
              } else {
                // Get height when image is loaded normally
                firstImage.on('load', function(){
                  view.css('height', $(this).height());
                });
              }
            } else if (!imageOnly) {
              var slideHeight = firstSlide.height();
              view.css('height', slideHeight);
            }
          };
  
          if (options.fullWidth) {
            options.dist = 0;
            setCarouselHeight();
  
            // Offset fixed items when indicators.
            if (showIndicators) {
              view.find('.carousel-fixed-item').addClass('with-indicators');
            }
          }

          // Don't double initialize.
          if (view.hasClass('initialized')) {
            // Recalculate variables
            $(window).trigger('resize');
  
            // Redraw carousel.
            view.trigger('carouselNext', [0.000001]);
            return true;
          }
  
          view.addClass('initialized');
          pressed = false;
          offset = target = 0;
          images = [];
          item_width = view.find('.carousel-item').first().innerWidth();
          item_height = view.find('.carousel-item').first().innerHeight();
          dim = item_width * 2 + options.padding;
  
          view.find('.carousel-item').each(function (i) {
            images.push($(this)[0]);
            if (showIndicators) {
              var $indicator = $('<li class="indicator-item"></li>');
  
              // Add active to first by default.
              if (i === 0) {
                $indicator.addClass('active');
              }
  
              // Handle clicks on indicators.
              $indicator.click(function (e) {
                e.stopPropagation();
  
                var index = $(this).index();
                cycleTo(index);
              });
              $indicators.append($indicator);
            }
          });
  
          if (showIndicators) {
            view.append($indicators);
          }
          count = images.length;
  
          function setupEvents() {
            if (typeof window.ontouchstart !== 'undefined') {
              view.on('touchstart.carousel', tap);
              view.on('touchmove.carousel', drag);
              view.on('touchend.carousel', release);
            }
            view.on('mousedown.carousel', tap);
            view.on('mousemove.carousel', drag);
            view.on('mouseup.carousel', release);
            view.on('mouseleave.carousel', release);
            view.on('click.carousel', click);
          }
  
          function xpos(e) {
            // touch event
            if (e.targetTouches && (e.targetTouches.length >= 1)) {
              return e.targetTouches[0].clientX;
            }

            return e.clientX;
          }
  
          function ypos(e) {
            // touch event
            if (e.targetTouches && (e.targetTouches.length >= 1)) {
              return e.targetTouches[0].clientY;
            }
  
            return e.clientY;
          }
  
          function wrap(x) {
            return (x >= count) ? (x % count) : (x < 0) ? wrap(count + (x % count)) : x;
          }
  
          function scroll(x) {
            // Track scrolling state
            scrolling = true;
            if (!view.hasClass('scrolling')) {
              view.addClass('scrolling');
            }
            if (scrollingTimeout != null) {
              window.clearTimeout(scrollingTimeout);
            }
            scrollingTimeout = window.setTimeout(function() {
              scrolling = false;
              view.removeClass('scrolling');
            }, options.duration);
  
            // Start actual scroll
            var i, half, delta, dir, tween, el, alignment, xTranslation;
            var lastCenter = center;
            offset = (typeof x === 'number') ? x : offset;
            center = Math.floor((offset + dim / 2) / dim);
            delta = offset - center * dim;
            dir = (delta < 0) ? 1 : -1;
            tween = -dir * delta * 2 / dim;
            half = count >> 1;
  
            if (!options.fullWidth) {
              alignment = 'translateX(' + (view[0].clientWidth - item_width) / 5 + 'px) ';
              alignment += 'translateY(' + (view[0].clientHeight - item_height) / 5 + 'px)';
            } else {
              alignment = 'translateX(0)';
            }
  
            // Set indicator active
            if (showIndicators) {
              var diff = (center % count);
              var activeIndicator = $indicators.find('.indicator-item.active');
              if (activeIndicator.index() !== diff) {
                activeIndicator.removeClass('active');
                $indicators.find('.indicator-item').eq(diff).addClass('active');
              }
            }
  
            // center
            // Don't show wrapped items.
            if (!noWrap || (center >= 0 && center < count)) {
              el = images[wrap(center)];
  
              // Add active class to center item.
              if (!$(el).hasClass('active')) {
                view.find('.carousel-item').removeClass('active');
                $(el).addClass('active');
              }
              el.style[xform] = alignment +
                ' translateX(' + (-delta / 2) + 'px)' +
                ' translateX(' + (dir * options.shift * tween * i) + 'px)' +
                ' translateZ(' + (options.dist * tween) + 'px)';
              el.style.zIndex = 0;
              if (options.fullWidth) { tweenedOpacity = 1; }
              else { tweenedOpacity = 1 - 0.2 * tween; }
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }
  
            for (i = 1; i <= half; ++i) {
              // right side
              if (options.fullWidth) {
                zTranslation = options.dist;
                tweenedOpacity = (i === half && delta < 0) ? 1 - tween : 1;
              } else {
                zTranslation = options.dist * (i * 2 + tween * dir);
                tweenedOpacity = 1 - 0.2 * (i * 2 + tween * dir);
              }
              // Don't show wrapped items.
              if (!noWrap || center + i < count) {
                el = images[wrap(center + i)];
                el.style[xform] = alignment +
                ' translateX(' + (options.shift + (dim * i - delta) / 2) + 'px)' +
                ' translateZ(' + zTranslation + 'px)';
                el.style.zIndex = -i;
                el.style.opacity = tweenedOpacity;
                el.style.display = 'block';
              }
              
              // left side
              if (options.fullWidth) {
                zTranslation = options.dist;
                tweenedOpacity = (i === half && delta > 0) ? 1 - tween : 1;
              } else {
                zTranslation = options.dist * (i * 2 - tween * dir);
                tweenedOpacity = 1 - 0.2 * (i * 2 - tween * dir);
              }
              // Don't show wrapped items.
              if (!noWrap || center - i >= 0) {
                el = images[wrap(center - i)];
                el.style[xform] = alignment +
                  ' translateX(' + (-options.shift + (-dim * i - delta) / 2) + 'px)' +
                  ' translateZ(' + zTranslation + 'px)';
                el.style.zIndex = -i;
                el.style.opacity = tweenedOpacity;
                el.style.display = 'block';
              }
            }
  
            // center
            // Don't show wrapped items.
            if (!noWrap || (center >= 0 && center < count)) {
              el = images[wrap(center)];
              el.style[xform] = alignment +
                ' translateX(' + (-delta / 2) + 'px)' +
                ' translateX(' + (dir * options.shift * tween) + 'px)' +
                ' translateZ(' + (options.dist * tween) + 'px)';
              el.style.zIndex = 0;
              if (options.fullWidth) { tweenedOpacity = 1; }
              else { tweenedOpacity = 1 - 0.2 * tween; }
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }
  
            // onCycleTo callback
            if (lastCenter !== center &&
                typeof(options.onCycleTo) === "function") {
              var $curr_item = view.find('.carousel-item').eq(wrap(center));
              options.onCycleTo.call(this, $curr_item, dragged);
            }
  
            // One time callback
            if (typeof(oneTimeCallback) === "function") {
              oneTimeCallback.call(this, $curr_item, dragged);
              oneTimeCallback = null;
            }
          }
  
          function track() {
            var now, elapsed, delta, v;
  
            now = Date.now();
            elapsed = now - timestamp;
            timestamp = now;
            delta = offset - frame;
            frame = offset;
  
            v = 1000 * delta / (1 + elapsed);
            velocity = 0.8 * v + 0.2 * velocity;
          }
  
          function autoScroll() {
            var elapsed, delta, x;
  
            if (amplitude) {
              elapsed = Date.now() - timestamp;
              delta = amplitude * Math.exp(-elapsed / options.duration);
              x = target - delta;
              if (delta > 7 || delta < -7) {
                release();
                scroll(target - delta);
                requestAnimationFrame(autoScroll);
              } else {
                scroll(target);
              }
            }
          }

          function click(e) {
            // Disable clicks if carousel was dragged.
            if (dragged) return false;
             else if (!options.fullWidth) {
              var clickedIndex = $(e.target).closest('.carousel-item').index();
              var diff = wrap(center) - clickedIndex;

              cycleTo(clickedIndex);
            }
          }
  
          function cycleTo(n) {
            var diff = (center % count) - n;
  
            // Account for wraparound.
            if (!noWrap) {
              if (diff < 0) {
                if (Math.abs(diff + count) < Math.abs(diff)) { diff += count; }
  
              } else if (diff > 0) {
                if (Math.abs(diff - count) < diff) { diff -= count; }
              }
            }
  
            // Call prev or next accordingly.
            if (diff < 0) {
              view.trigger('carouselNext', [Math.abs(diff)]);
            } else if (diff > 0) {
              view.trigger('carouselPrev', [diff]);
            }
          }
  
          function tap(e) {
            if (e.type === 'mousedown' && $(e.target).is('img')) {
              e.preventDefault();
            }
            pressed = true;
            dragged = false;
            vertical_dragged = false;
            reference = xpos(e);
            referenceY = ypos(e);
  
            velocity = amplitude = 0;
            frame = offset;
            timestamp = Date.now();
            clearInterval(ticker);
            ticker = setInterval(track, 100);
          }

          function drag(e) {
            var x, delta, deltaY;
            if (pressed) {
              x = xpos(e);
              y = ypos(e);
              delta = reference - x;
              deltaY = Math.abs(referenceY - y);
              if (deltaY < 20 && !vertical_dragged) {
                if (delta > 10 || delta < -10) {
                  dragged = true;
                  reference = x;
                  scroll(offset + delta);
                }
              } else if (dragged) return false;
  
               else vertical_dragged = true;
            }
          }
          
          function release(e) {
          
            if (pressed) {
              pressed = false;
            } else {
              return;
            }
                
            clearInterval(ticker);
            target = offset;
            
            if (velocity > 10 || velocity < -10) {
              amplitude = 0.9 * velocity;
              target = offset + amplitude;
            }
            
            target = Math.round(target / dim) * dim;

            if (target < 0 || target > 0) $(this).trigger('drag');
            
            // No wrap of items.
            if (noWrap) {
              if (target >= dim * (count - 1)) {
                target = dim * (count - 1);
              } else if (target < 0) {
                target = 0;
              }
            }
            amplitude = target - offset;
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
 
            return false;
          }

          function play() {
            target = (dim * Math.round(offset / dim)) + (dim * 1);
            amplitude = target - offset;
            timestamp = Date.now();
            
            release();
            requestAnimationFrame(autoScroll);
          }

          function autoplay(event, options) {
            release();
            if (autoplayStatus._shouldPlay === true && autoplayStatus._timeout === undefined) {
              if (typeof autoplayTimout === 'number') {
                clearTimeout(autoplayTimout);
                autoplayTimout = undefined;
                
                setTimeout(() => {
                  autoplay(event, options);
                }, 500);
                requestAnimationFrame(autoScroll);
                release();
  
                return;
              }
              
              if (options.enabled === true && autoplayTimout === undefined) {
                autoplayTimout = setTimeout(function() {
                  play();
                
                  setTimeout(() => {
                    autoplay(event, options)
                  }, 500);
                }, options.speed);
                release();
                requestAnimationFrame(autoScroll);
                
                return;
              }
            }
            
            setTimeout(() => {
              autoplay(event, options)
            }, 500);
          }

          xform = 'transform';
          ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {
            var e = prefix + 'Transform';
            if (typeof document.body.style[e] !== 'undefined') {
              xform = e;
              return false;
            }
            return true;
          });
  
  
          var throttledResize = Materialize.throttle(function() {
            if (options.fullWidth) {
              item_width = view.find('.carousel-item').first().innerWidth();
              var imageHeight = view.find('.carousel-item.active').height();
              dim = item_width * 2 + options.padding;
              offset = center * 2 * item_width;
              target = offset;
              setCarouselHeight(true);
            } else {
              scroll();
            }
          }, 200);
          $(window)
            .off('resize.carousel-'+uniqueNamespace)
            .on('resize.carousel-'+uniqueNamespace, throttledResize);
  
          setupEvents();
          scroll(offset);

          $(this).on('dragLeft', function(event) {});

          $(this).on('dragRight', function(event) {});

          $(this).on('drag', function() {
            autoplayStatus._shouldPlay = false;
            autoplay(event, autoplayStatus);
            autoplayStatus._timeout = setTimeout(() => {
              autoplayStatus._shouldPlay = true;
              clearTimeout(autoplayStatus._timeout);
              autoplayStatus._timeout = undefined;
            }, 100);
          });

          $(this).on('autoplay', function(event, options) {
            autoplayStatus = Object.assign(options, autoplayStatus);
            autoplay(event, autoplayStatus);
          });

        });
  
      },
      autoplay: function({ speed, enabled }) {
        $(this).trigger('autoplay', { speed, enabled });
      }
    };
  
      $.fn.Carousel = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
          return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
          // Default to "init"
          return methods.init.apply( this, arguments );
        } else {
          $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.carousel' );
        }
      }; // Plugin end
  }( jQuery ));