(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const closeMenu = document.querySelector('.btn__close');
    const menu = document.querySelector('.header__nav');
    const menuLinks = menu.querySelectorAll('.nav__link');
    const howBtns = document.querySelectorAll('.how__link');
    const howArticles = document.querySelectorAll('.how__article');
    const slider = document.querySelector('.swiper');
    const searchBtn = document.querySelector('.header__btn');
    const searchForm = document.querySelector('.search-form');
    const searchFormClose = document.querySelector('.search-form__btn');

    burger.addEventListener('click', () => {
      menu.classList.add('header__nav_active');
      document.body.classList.add('stop-scroll');
    });
    closeMenu.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
      document.body.classList.remove('stop-scroll');
    });

    searchBtn.addEventListener('click', () => {
      searchForm.classList.add('search-form_active');
    });
    searchFormClose.addEventListener('click', () => {
      searchForm.classList.remove('search-form_active');
    });

    menuLinks.forEach(el => {
      el.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
        document.body.classList.remove('stop-scroll');
      });
    });

    howBtns.forEach(element => {
      element.addEventListener('click', e => {
        const path = e.currentTarget.dataset.path;
        howBtns.forEach(btn => {
          btn.classList.remove('how__link_active');
        });
        e.currentTarget.classList.add('how__link_active');
        howArticles.forEach(element => {
          element.classList.remove('how__article_active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('how__article_active');
      });
    });

    let mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });

    new Accordion('.questions__list', {
      elementClass: 'questions__item',
      triggerClass: 'item__btn',
      panelClass: 'item__content',
      activeClass: 'item__content_active'
    });
  });
})();
