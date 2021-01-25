import imageOne from './images/logo.png';

import imagethree from './images/bgabout.jpg';
import imagefour from './images/bgContact.jpg';
import imagefive from './images/bgLector.jpg';
import imagesix from './images/bgMixMastering.jpg';

import audio from './audio/audio.mp3';


import './styles/index.scss';


const btnAbout = document.querySelector(".btn-about");
const btnLector = document.querySelector(".btn-lector");
const btnMixMastering = document.querySelector(".btn-mixMastering");
const btnContact = document.querySelector(".btn-contact");
const btnStudio = document.querySelector(".btn-studio");
const btnDomain = document.querySelector(".btn-domain");

const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

const sectionDomain = document.querySelector(".domain-section");
const inner = document.querySelector(".inner");


function domain(){

  btnDomain.addEventListener("click", function(){

  sectionDomain.style.backgroundImage = "url('./images/bg.jpg')";
  inner.innerHTML = '<h1 class="inner__h1">Escape Studio</h1><br><p class="inner_p">Ucieknij do świata dźwięku. Nagrania lektorskie, audiobooki, dubbing, zapowiedzi telefoniczne, udźwiękowienie radiowo-telewizyjne, miks/mastering, nagrania wokalne.</p>';
  container.classList.toggle("active");
} );
}



function about(){

  btnAbout.addEventListener("click", function(){

  sectionDomain.style.backgroundImage = "url('./images/bgabout.jpg')";
  inner.innerHTML = '<h1 class="inner__h1">O nas</h1> <br> <p class="inner_p">Naszą działalność rozpoczęliśmy wraz z końcem listopada 2020 roku. Escape studio aktualnie jest studiem domowym, mieści się w małej wsi w okolicy Wieliczki. Oferujemy nagrania wokalne, lektorskie czy dubbingowe, poza tym oferujemy także profesjonalny Mix/Mastering. Nasze studio nieustannie się rozwija i rozrasta, jesteśmy pełni zapału i chęci do pracy. Gwarantujemy państwu profesjonalizm oraz przyjazną atmosferę.</p>';
  container.classList.toggle("active");
} );
}

function lector(){

  btnLector.addEventListener("click", function(){

  sectionDomain.style.backgroundImage = "url('./images/bgLector.jpg')";
  inner.innerHTML = '<h1 class="inner__h1">Lektor</h1> <br> <p class="inner_p">Szukasz lektora do reklamy, filmu, prezentacji, dubbingu, szkolenia, projektu multimedialnego? Trafiłeś idealnie! Napisz do nas a otrzymasz specjalnie spersonalizowany głos naszego lektora lub aktora dubbingowego!</p><br><p><b>Odsłuchaj nagranie testowe!</b></p><br> <audio width="300" height="48" controls="controls"><source css src="./audio/audio.mp3" type="audio/mpeg"/>Your browser does not support HTML5 audio. Please update your browser to view this media content.</audio>';
  container.classList.toggle("active");
} );
}

function mixMastering(){

  btnMixMastering.addEventListener("click", function(){

  sectionDomain.style.backgroundImage = "url('./images/bgMixMastering.jpg')";
  inner.innerHTML = '<h1 class="inner__h1">Mix - Mastering</h1> <br> <p class="inner_p">Miks/Mastering jest to końcowy etap procesu realizacji produkcji muzycznej, podczas którego wydobywa się niuanse brzmieniowe realizowanego materiału.</p><br><p> Współpracując z nami masz gwarancję, że przygotowany projekt posiadać będzie doskonałe brzmienie oraz spersonalizowane efekty dźwiękowe.</p>';
  container.classList.toggle("active");
} );
}

function contact(){

  btnContact.addEventListener("click", function(){

  sectionDomain.style.backgroundImage = "url('./images/bgContact.jpg')";
  inner.innerHTML = '<h1 class="inner__h1">Kontakt</h1> <br> <ul><li><svg class="svg-contact" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class="svg-inline--fa fa-phone fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg> 668 944 598</li><li><svg class="svg-contact" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-open" class="svg-inline--fa fa-envelope-open fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"></path></svg> <a href="mailto:contact@escapestudio.pl">contact@escapestudio.pl</a></li><li><svg class="svg-contact" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="svg-inline--fa fa-facebook fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg> <a href="https://www.facebook.com/Esacpe-Studio-100576521910654">Facebook</a></li><li><svg class="svg-contact" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram-square" class="svg-inline--fa fa-instagram-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg> <a href="https://www.instagram.com/escapestudioofficial/">instagram</a></li><li><svg class="svg-contact" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tiktok" class="svg-inline--fa fa-tiktok fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg> <a href="#">tik-tok</a></li></ul>';
  container.classList.toggle("active");
} );
}

function openNavbar(){
  hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
    
  });
}

openNavbar();
domain();
about();
lector();
mixMastering();
contact();