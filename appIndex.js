import './src/js/initial';
import './src/js/jquery.easing.1.4';
import './src/js/animation';
import './src/js/velocity.min';
import './src/js/velocity.ui';
import './src/js/hammer.min';
import './src/js/jquery.hammer';
import './src/js/global';
import './src/js/parallax';
import './src/js/waves';
import './src/js/sideNav';
import './src/js/carousel';
import './src/js/scrollIt';
import './src/js/modal';
import './src/js/slick.min';

import 'mediaelement/build/mediaelement-and-player.min';
import 'mediaelement/build/mediaelementplayer.css';
import 'mediaelement/build/mejs-controls.svg';

const car = $('.car');
const truck = $('.truck');
const carTier = $('.wheel');
const truckTier = $('.truck-tier');
const secTruckTier = $('.second-truck-tier');
const rightPlaceIcon = $('.place-icon-right');
const leftPlaceIcon = $('.place-icon-left');
const footer = $('.footer-copyright');

const iframeAndroid = $('#video-android');

let topOffset = -45;
let hasTruckStarted = false;
let hasCarStarted = false;
let dirtyTruck;
let dirtyCar;

function isMobile (a) {
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge|maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) return true;
  else false;
}

(function init($) {
  $(function () {
    $(document).ready(function () {
      if (screen.width < 950) {
        topOffset = -25;

        $('#left-banner').removeClass('m-tb-16');
			}
			
			const player = new MediaElementPlayer('video-android', {
				clickToPlayPause: true
			});

			const mediaAndroid = $('#mediaAndroid');
			let displayControl = true;

			const firstPlay = (event) => {
				if (displayControl) {
					event.currentTarget.style.opacity = '0';
					
					player.play();
				}

				displayControl = false;

				mediaAndroid.off('click', firstPlay);
				mediaAndroid.remove();
			}

			mediaAndroid.click(firstPlay);

      $('.carousel.carousel-slider').Carousel({
        fullWidth: true,
        indicators: true,
        padding: 4,
        dist: 0
			});

			function loadPromotionModal() {
				const modalEl = document.getElementById('modal1');
						
				if (!modalEl) {
					import('./src/js/module/promotion.js');
					return true;
				}

				$('#modal1').modal('open');
			}
			
			const desktopRibbon = $('#promo-desk');
			const mobileRibbon = $('#promo-mobile');

			if (desktopRibbon) {
				desktopRibbon.click(loadPromotionModal);
			} 

			if (mobileRibbon) {
				mobileRibbon.click(loadPromotionModal);
			}

      $('.single-item').slick({
				arrows: false,
				infinite: true,
				autoplay: true,
        autoplaySpeed: 30000
			});
			
			$('.single-item-rtl-1').attr('id', 'clip-left').slick({
				arrows: false,
        autoplay: true,
				autoplaySpeed: 10000,
				dots: false,
				rtl: false
			});

			$('.single-item-rtl-2').attr('id', 'clip-right').slick({
				arrows: false,
        autoplay: true,
				autoplaySpeed: 10000,
				dots: false,
				rtl: false
			});

      // isVehicleVisible();
      // $.scrollIt({
      //   easing: 'linear',
      //   scrollTime: 1000,
      //   activeClass: 'active',
      //   onPageChange: null,
      //   topOffset: topOffset
      // });

      $('.carousel').Carousel('autoplay', {
        enabled: true,
        speed: 7000
      });
    });

    $(window).scroll(() => {
      // isFooterVisible();
      // isVehicleVisible();
    });

    $('.contact').click(() => {
      // isFooterVisible();
    });

    $('.find-your-car').click(() => {
      if (isMobile(navigator.userAgent || navigator.vendor || window.opera) === true) window.location = 'https://app.sattrack.com.br/'
      else window.location = 'http://sattrack.com.br/app'
    });

    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
    });
  });
})(jQuery);

require('./src/css/materialize.min.css');
require('./src/fonts/icons/material-icons.css');
require('./src/css/style.css');
require('./src/css/slick-theme.css');
require('./src/css/slick.css');
