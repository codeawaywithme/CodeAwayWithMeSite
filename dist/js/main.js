//Navigation
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const home = document.querySelector('.home');
// Scroll Lock
const html = document.querySelector("html");
const body = document.querySelector("body");

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));
    home.classList.add('open');
    //Scroll Lock
    html.classList.add(".scrollLock");
    body.classList.add(".scrollLock");
    disableScrolling();
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open')
    navItems.forEach(item => item.classList.remove('open'));
    home.classList.remove('.open')
    html.classList.remove(".scrollLock");
    body.classList.remove(".scrollLock");
    enableScrolling();


    showMenu = false; 
  }
}
function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}
function enableScrolling(){
  window.onscroll=function(){};
}


