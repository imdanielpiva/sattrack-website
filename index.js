// stuffs.js

window.onload = renderElement('high');

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
import './src/js/isOnScreen';
import './src/js/carousel';
import './src/js/scrollIt';
import './src/js/init';
import './src/js/modal';
import './src/js/slick.min';
import './src/js/place-icons-animation';
import { height } from 'window-size';

const velAnimation = require('./src/js/place-icons-animation');

const headerElement = $('.header-background');
let headline;
let caption;
let parent;
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

  if (element === 'animation') {
      velAnimation.animateDots();
      return;
  }

  if (element === 'video') {
		import('./src/images/' + src).then((videoPath) => {
			$(headerElement).append($('<video></video>')
				.addClass(elmClass || '')
				.attr({
					src: videoPath,
					autoplay: true,
					loop: true,
					muted: true
				}));
		});

    return;
  }

  if (element === 'slide-left' && elmClass) {
    parent = $('<div></div>').attr('id', 'oi').css({ 'background': 'linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url(' + require('./src/images/' + src) +')', 'width': '100%', 
    'height': '94vh', 'min-height': '568px', 'background-size': 'cover', 'position': 'sticky',
    'z-index': '-1' });

    caption = $('<div></div>').addClass(`regular-caption ${elmClass}`);
    headline = $('<h3></h3>').addClass('light').html(title);
    p = $('<h5></h5>').addClass('light grey-text text-lighten-2').html(content);

    caption.append(headline);
    caption.append(p);
    parent.append(caption);

    if (elmClass === 'left-caption') {
      $('.single-item-rtl-1').append(parent);

       return;
    }
  }

  if (element === 'slide-right' && elmClass) {
  parent = $('<div></div>').attr('id', 'clip-right').css({ 'background': 'linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url(' + require('./src/images/' + src) +')', 'width': '100%','background-size': 'cover', 'position': 'sticky',
  'z-index': '-1', 'height': '94vh', 'min-height': '568px' });

    caption = $('<div></div>').addClass(`regular-caption ${elmClass}`);
    headline = $('<h3></h3>').addClass('light').html(title);
    p = $('<h5></h5>').addClass('light grey-text text-lighten-2').html(content);

    caption.append(headline);
    caption.append(p);
    parent.append(caption);

    if (elmClass === 'right-caption') {
      $('.single-item-rtl-2').append(parent);
    }
  }
}

function renderElement(priority) {
  const { width } = screen;

  if (priority === 'high') {
    window.addEventListener('load', () => {
      renderElement();
    });

    return;
  }

  if (width <= 500) {
    addElement('img', 'test-car.jpeg');

    return;
  }
  if (width <= 768) {
    addElement('video', 'video.mp4', 'video-background');

    return;
  }
  if (width > 768) {
    addElement('video', 'video.mp4', 'video-background');
  }
}

$(window).resize(() => {
  renderElement();
});

addElement('slide-left', 'main-car-slide.jpg', 'left-caption', 'Rastreamento online de onde estiver.', 'Saiba onde estão seus veículos em tempo real, e obtenha todas as informações de qualquer lugar com qualquer dispositivo móvel conectado a internet.');
addElement('slide-left', 'car-slide-5.jpg', 'left-caption', 'Cerca eletrônica.', 'Proteja seu veículo usando a cerca eletrônica, uma funcionalidade que permite que você determine um perímetro para seu veículo, assim o sistema irá automaticamente te alertar caso seu veículo não esteja dentro do perímetro delimitado.');
addElement('slide-left', 'car-ignition.jpg', 'left-caption', 'Alerta de ignição.', 'Basta ativar o Alerta de Ignição e você será notificado em tempo real quando a ignição do seu veículo for ativada.');
addElement('slide-right', 'truck-slide-5.jpg', 'right-caption', 'Controle total da sua frota.', 'Com a tecnologia de telemetria da SatTrack, é possível analisar o comportamento do motorista e identificar ações que aumentam o desgaste do veículo e os riscos de acidentes, diminuindo assim o desperdício de combustível e o custo de manutenção da frota.');
addElement('slide-right', 'truck-slide-3.jpg', 'right-caption', 'Analise sua frota.', 'Tenha informações detalhadas, como: tempo de utilização do veículo, velocidade média, distância percorrida, ponto inicial e ponto final com histórico de até 6 meses.');
addElement('slide-right', 'truck-slide-1.jpeg', 'right-caption', 'Bloqueio imediato.', 'Em caso de roubo ou circunstâncias que podem colocar seu veículo em perigo, basta pedir o bloqueio entrando em contato com a central.');

// stuffs.css
require('./src/css/materialize.min.css');
require('./src/fonts/icons/material-icons.css');
require('./src/css/style.css');
require('./src/css/slick-theme.css');
require('./src/css/slick.css');
