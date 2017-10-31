// stuffs.js
window.onload = renderElement('high');

import './src/js/initial';
import './src/js/jquery.easing.1.4';
import './src/js/animation';
import './src/js/velocity.min';
import './src/js/hammer.min';
import './src/js/jquery.hammer';
import './src/js/global';
import './src/js/parallax';
import './src/js/waves';
import './src/js/sideNav';
import './src/js/isOnScreen';
import './src/js/carousel';
import './src/js/scrollIt';
import './src/js/init';
import './src/js/modal';

const headerElement = $('.header-background');
let headline;
let caption;
let parent;
let video;
let image;
let p;

function addElement(element, src, elmClass, title, content) {
  if (element === 'img') {
    $('.video-background').remove();
    headerElement
      .css({
        'background-image': 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(' + require('./src/images/' + src) +')',
        'background-position': 'center',
        'background-size': 'cover'
      });

    return;
  }

  if (element === 'slide' && elmClass) {
    parent = $('<li></li>').addClass('carousel-item');
    caption = $('<div></div>').addClass(`regular-caption ${elmClass}`);
    headline = $('<h3></h3>').addClass('light').html(title);
    p = $('<h5></h5>').addClass('light grey-text text-lighten-2').html(content);
    image = $('<div></div>')
      .addClass('slide-mask')
      .css({
        background: 'linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(' + require('./src/images/' + src) +')',
        'background-position': '50%',
        'background-size': 'cover',
        width: '100%',
        height: '100%',
        position: 'sticky',
        bottom: '0',
        'z-index': '-1'
      });
      
    caption.append(headline);
    caption.append(p);
    parent.append(caption);
    parent.append(image);

    if (elmClass === 'left-caption') {
      $('.left-slide').append(parent);
      
      return;
    }

    if (elmClass === 'right-caption') {
      $('.right-slide').append(parent);
    }
  }
/////////////////////////////////////////banner-img
  if (element === 'banner-slide' && elmClass) {
    const carousel = $('#header-banner');

    parent = $('<li></li>').addClass('carousel-item');

    video = $('<video></video>').addClass('video-background')
    .attr({
      src: require('./src/images/' + src),
      autoplay: true,
      loop: true,
      muted: true
    });

    image = $('<div></div>')
      .addClass('banner-slide-mask')
      .css({
        'background': 'linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(' + require('./src/images/' + src) +')',
        'background-position': 'center',
        'background-size': 'cover',
        'width': '100%',
      });

    if (elmClass === 'video') {
      parent.append(video);
      carousel.append(parent);
    }

    if (elmClass === 'image') {
      parent.append(image);
      carousel.append(parent);
    }
  }
}

function renderElement(priority) {
  const { width } = screen;

  if (priority === 'high') {
    window.addEventListener('load', () => { renderElement(); });

    return;
  }

  if (width <= 500) {
    addElement('img', 'phone-bg.jpg');

    return;
  }
  if (width <= 768) {
    addElement('img', 'tablet-bg.jpg');

    return;
  }
  if (width > 768) {
    // addElement('img', 'promo.svg');
    // addElement('video', 'video.mp4', 'video-background');
  }
}

$(window).resize(() => {
  renderElement();
});

addElement('banner-slide', 'promo.svg', 'image', 'Promoção.', 'll');
addElement('banner-slide', 'video.mp4', 'video');
addElement('slide', 'main-car-slide.png', 'left-caption', 'Rastreamento online de onde estiver.', 'Saiba onde seus veículos estão em tempo real e tenha todos os detalhes sobre seus veículos de qualquer lugar que estiver com qualquer dispositivo com conectado a internet.');
addElement('slide', 'car-slide-5.jpg', 'left-caption', 'Cerca eletrônica.', 'Proteja seu veículo usando a cerca eletrônica, uma funcionalidade que permite que você determine um perímetro para seu veículo, assim o sistema irá automaticamente te alertar caso seu veículo não esteja dentro do perímetro delimitado.');
addElement('slide', 'car-ignition.jpg', 'left-caption', 'Alerta de ignição.', 'Basta ativar o Alerta de Ignição e você será notificado em tempo real quando a iginção do seu veículo for ativida.');
addElement('slide', 'truck-slide-5.jpg', 'right-caption', 'Controle total da sua frota.', 'Com a tecnologia de telemetria de dados da Sattrack, as informações coletadas dos veículos são analisadas em dados, com isso é possível acompanhar o comportamento do motorista ao volante, identificando infrações que aumentam o risco de acidente, desperdiço de combustível e redução da disponibilidade da frota.');
addElement('slide', 'truck-slide-3.jpg', 'right-caption', 'Analise sua frota.', 'Saiba das informações detalhadamente, como tempo de utilização do veículo, velocidade média e máxima, distância percorrida, ponto inicial e ponto final com histórico de até 6 meses.');
addElement('slide', 'truck-slide-1.jpg', 'right-caption', 'Bloqueio imediato.', 'Em caso de roubo ou circunstâncias que podem colocar seu veículo em perigo, baster pedir o bloqueio imediato do veículo.');

// stuffs.css
require('./src/css/materialize.min.css');
require('./src/fonts/icons/material-icons.css');
require('./src/css/style.css');