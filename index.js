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
import './src/js/modal';
import './src/js/sideNav';
import './src/js/isOnScreen';
import './src/js/carousel';
import './src/js/scrollIt';
import './src/js/init';
import './src/js/place-icons-animation';
import './src/js/place-icons-animation-mobile';

const velAnimation = require('./src/js/place-icons-animation');
const velAnimationMobile = require('./src/js/place-icons-animation-mobile');
const headerElement = $('.header-background');
let parent;
let img;
let caption;
let btn;
let headline;
let animationMobile;
let animation;
let video;
let image;
let p;

function isMobile (a) {
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) return true;
  else false;
}

function addElement(element, src, elmClass, title, content) {

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

  if (element === 'banner-slide' && elmClass) {
    const carousel = $('#header-banner');

    parent = $('<li></li>').addClass('carousel-item');
    caption = $('<div></div>').addClass(`banner-regular-caption ${elmClass}`);
    headline = $('<h3></h3>').addClass('banner-light').html(title);
    p = $('<h5></h5>').addClass('banner-light banner-grey-text banner-text-lighten-2').html(content);
    animation =  velAnimation.animateDots();
    animationMobile = velAnimationMobile.animateDots();
    video = $('<video></video>').addClass('video-background')
      .attr({
        src: require('./src/images/' + src),
        autoplay: true,
        loop: true,
        muted: true
      }).css({
          'background': 'linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(' + require('./src/images/' + src) +')',
          'background-position': 'center',
          'background-size': 'cover',
          'height': '94vh',
        });
    image = $('<div></div>').addClass('banner-slide-mask')
      .css({
        'background': 'linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(' + require('./src/images/' + src) +')',
        'background-position': 'center',
        'background-size': 'cover',
        'width': '100%'
      });

    if (elmClass === 'video') {  
      parent.append(video);
      carousel.append(parent);
    }

    if (elmClass === 'animation') {
      parent.append(animation)  
      .css({
        'background': 'linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(' + require('./src/images/' + src) +')'
      });
      carousel.append(parent);
    }

    if (elmClass === 'animationMobile') {
      parent.append(animationMobile)  
      .css({
        'background': 'linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(' + require('./src/images/' + src) +')',
        'background-position': '5% 90%'
      });
      carousel.append(parent);
    }

    if (elmClass === 'image') {
      parent.append(image);
      carousel.append(parent);
    }
  }

  if (element === 'banner-slide-mobile' && elmClass) {
    const carousel = $('#header-banner');
    const modal = $('#modal');
    const section = $('#section');
    const section1 = $('#section1');

    parent = $('<li></li>').addClass('carousel-item');

    animationMobile = velAnimationMobile.animateDots();

    image = $('<div></div>').addClass('banner-slide-mask')
      .css({
        'background': 'linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(' + require('./src/images/' + src) +')',
        'background-position': 'center',
        'background-size': 'cover',
        'width': '100%'
      });

      img = $('<div></div>').addClass('banner-slide-mask')
      .css({
        'background': 'linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(' + require('./src/images/' + src) +')',
        'background-position': 'center',
        'background-size': 'cover',
        'width': '100%'
      });

    if (elmClass === 'animationMobile') {
      parent.append(section1);
      parent.append(animationMobile)
      .css({
        'background': 'linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(' + require('./src/images/' + src) +')',
        'background-position': '5% 90%'
      });
      parent.append(modal);
      carousel.append(parent);
    }

    if (elmClass === 'img') {
      parent.append(section);
      parent.append(img);
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
}

$(window).resize(() => {
  renderElement();
});

if(!isMobile(navigator.userAgent || navigator.vendor || window.opera) === true) {
  addElement('banner-slide', 'foto-desktop.jpg', 'animation');
  addElement('banner-slide', 'promo.svg', 'image');
  addElement('banner-slide', 'video.mp4', 'video');
}

if(isMobile(navigator.userAgent || navigator.vendor || window.opera) === true) {
  addElement('banner-slide-mobile', 'foto-desktop.jpg', 'animationMobile');
  addElement('banner-slide-mobile', 'promo.svg', 'image');
  addElement('banner-slide-mobile', 'rush.jpeg', 'img');
}

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