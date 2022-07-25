const buttonMenuFirst = document.querySelector('.menu__link_1');
const buttonMenuSecond = document.querySelector('.header__language_link');

buttonMenuFirst.addEventListener('mouseover', openSubMenu); 
buttonMenuSecond.addEventListener('mouseover', openSubMenu); 

function openSubMenu (e) {
   if (e.target.closest(".menu__link_1") || e.target.closest('#first')) {
      const subMenuFirst = document.querySelector('#first');
      subMenuFirst.classList.add("active");
   }
   if (e.target.closest(".header__language_link") || e.target.closest('#second')) {
      const subMenuFirst = document.querySelector('#second');
      subMenuFirst.classList.add("active");
   }
}

buttonMenuFirst.addEventListener('mouseout', closeSubMenu); 
buttonMenuSecond.addEventListener('mouseout', closeSubMenu); 

function closeSubMenu (e) {
      const subMenu = document.querySelectorAll('.sub-menu');
      for (const item of subMenu) {
            item.classList.remove("active");
            item.addEventListener('mouseover', openSubMenu);
            item.addEventListener('mouseout', closeSubMenu);
      }
}

const buttonMenuMobile = document.querySelector('.header__language_link-mobile');

buttonMenuMobile.addEventListener('click', openSubMenuMobile); 

function openSubMenuMobile (e) {
      const subMenuMobile = document.querySelector('.sub-menu_mobile');
      subMenuMobile.classList.toggle("_active");
}

const buttonBurgerMenu = document.querySelector('.header__icon');

buttonBurgerMenu.addEventListener('click', openBurgerMenu); 

function openBurgerMenu (e) {
      const burgerMenuIcon = document.querySelector('.header__icon');
      const burgerMenu = document.querySelector('.header__wrapper_burger');
      const body = document.querySelector('body');
      burgerMenuIcon.classList.toggle("_active");
      burgerMenu.classList.toggle("_active");
      body.classList.toggle("_lock");
}


