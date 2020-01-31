const hamburger = document.querySelector('.hamburger');
const fullScreenMenu = document.querySelector('.fullscreen-menu');
const fullScreenMenuLeft = document.querySelector('.fullscreen-menu__left');
const fullScreenMenuRight = document.querySelector('.fullscreen-menu__right');
const closeMenu = document.querySelector('.fullscreen-menu__close');
const menuLink = document.querySelectorAll('.fullscreen-menu__link');

function noScroll() {
  window.scrollTo(0, 0);
}

hamburger.addEventListener('click', function () {
  fullScreenMenu.style.display = 'flex';
  window.addEventListener('scroll', noScroll);
})

closeMenu.addEventListener('click', function(c){
  c.preventDefault();
  fullScreenMenu.style.display = 'none';
  window.removeEventListener('scroll', noScroll);
})

fullScreenMenu.addEventListener('click', function (event) {
  if (event.target === fullScreenMenu) {
    closeMenu.click();
    window.removeEventListener('scroll', noScroll);
  }

  if (event.target === fullScreenMenuLeft) {
    closeMenu.click();
    window.removeEventListener('scroll', noScroll);
  }

  if (event.target === fullScreenMenuRight) {
    closeMenu.click();
    window.removeEventListener('scroll', noScroll);
  }

})

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function () {
    closeMenu.click();
  });
}