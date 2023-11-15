document.addEventListener('DOMContentLoaded', function(){
// открыть\закрыть бургер-меню
let burger = document.querySelector('.btn-burger');
let menu = document.querySelector('.menu');
let menuLink = document.querySelectorAll('.menu__link');
const body = document.body;

let disableScroll = function() {
  let paddingOffset = window.innerWidth - body.offsetWidth + 'px';
  let paddingTop = window.scrollY;
  body.dataset.position = paddingTop;
  body.style.paddingRight = paddingOffset;
  body.style.top = -paddingTop + 'px';
  body.classList.add('disable-scroll');
}

let enableScroll = function() {
  let paddingTop = parseInt(body.dataset.position, 10);
  body.style.paddingRight = '0px';
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  window.scroll({top: paddingTop, left: 0});
  body.removeAttribute('data-position');
}

burger.addEventListener('click', function() {
  burger.classList.toggle('is-open');
  menu.classList.toggle('menu-open');
  if (burger.getAttribute('aria-label') === 'Открыть меню') {
    burger.setAttribute("aria-label", 'Закрыть меню');
    burger.setAttribute('aria-expanded', true);
    disableScroll();
  } else {
    burger.setAttribute("aria-label", 'Открыть меню');
    burger.setAttribute('aria-expanded', false);
    enableScroll();
  }
});

let menuClose = function() {
  burger.classList.remove('is-open');
  burger.setAttribute("aria-label", 'Открыть меню');
  burger.setAttribute('aria-expanded', false);
  menu.classList.remove('menu-open');
  enableScroll();
};

menuLink.forEach(function(e) {
  e.addEventListener('click', function() {
    menuClose();
  });
});
document.addEventListener('click',
function(el) {
  let target = el.target;
  if(!target.closest('.header__burger') && burger.classList.contains('is-open')) {
    menuClose();
  }
});

// menu-dropdown
  const menuBtn = document.querySelectorAll('.menu-dropdown__btn');
  const dropList = document.querySelectorAll('.dropdown');
  const dropLink = document.querySelectorAll('.dropdown__link');

  let menuDropdownClose = function() {
    menuBtn.forEach(btn => {
      btn.classList.remove('is-open');
    });
    dropList.forEach(list => {
        list.classList.remove('is-open');
    });
  };

  menuBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let TextBtn = currentBtn.firstElementChild.textContent;
      let currentList = currentBtn.closest('.menu-dropdown__item').querySelector('.dropdown');
      let currentSimplebarContentWrapper = currentBtn.closest('.menu-dropdown__item').querySelector('.simplebar-content-wrapper');

      menuBtn.forEach(btn => {
        if(btn !== currentBtn) {
          btn.classList.remove('is-open');
        };
      });
      dropList.forEach(list => {
        if(list !== currentList) {
          list.classList.remove('is-open');
          currentSimplebarContentWrapper.setAttribute('tabindex', -1);
        }
      });

      currentBtn.classList.toggle('is-open');
      // меняем атрибуты доступности открыто\закрыто
      if(currentBtn.classList.contains('is-open')) {
        currentBtn.setAttribute('aria-label', `Закрыть список художников направления ${TextBtn}`);
        currentBtn.setAttribute('aria-expanded', true);
      } else {
        currentBtn.setAttribute('aria-label',`Открыть список художников направления ${TextBtn}`);
        currentBtn.setAttribute('aria-expanded', false);
      };
      currentList.classList.toggle('is-open');
    });
  });
  // закрытие списка по клику на ссылку внутри
  dropLink.forEach(link => {
    link.addEventListener('click', () => menuDropdownClose());
  });
  // закрытие списка по клику вне списка и пунктов меню
  document.addEventListener('click', (el) => {
    if(!el.target.closest('.menu-dropdown')) {
      menuDropdownClose();
    };
  });

// иницилизация SimpleBar
const dropdownList = document.querySelectorAll('.dropdown__list');

dropdownList.forEach(dropdown => {
  new SimpleBar (dropdown, {
  autoHide: false,
  scrollbarMaxSize: 28,
  });
});

// открыть\закрыть, отправить форму поиска
let btnSearchOpen = document.querySelector('.header__searchbar-open');
let formSearch = document.querySelector('.header__searchbar');
let input = document.querySelector('.searchbar__field');
let btnSearchClose = document.querySelector('.searchbar__close');

btnSearchOpen.addEventListener('click', function() {
  formSearch.classList.add('header__searchbar--visible');
  btnSearchOpen.classList.add('is-active');
  btnSearchOpen.setAttribute('aria-expanded', true);
});

btnSearchClose.addEventListener('click', function() {
  formSearch.classList.remove('header__searchbar--visible');
  btnSearchOpen.classList.remove('is-active');
  btnSearchOpen.setAttribute('aria-expanded', false);
  input.value = '';
});

// иницилизация Choices
const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
  position: 'bottom',
  classNames: {
    containerOuter: 'choices gallery__choices',
  },
});

// modal-windows
const btnsModalOpen = document.querySelectorAll('.gallery__btn-open');
const modalOverlay = document.querySelector('.overlay');
const modals = document.querySelectorAll('.modal');
const btnsModalClose = document.querySelectorAll('.modal__btn-close');

btnsModalOpen.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let path =e.currentTarget.getAttribute('data-path');
        modals.forEach(function(el) {
            el.classList.remove('modal--visible');
        });
        // e.currentTarget.setAttribute('aria-expanded', true);
        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('overlay--visible');
        disableScroll();
    });
});

let modalClose = function() {
  modalOverlay.classList.remove('overlay--visible');
  enableScroll();
  modals.forEach(function(el) {
    el.classList.remove('modal--visible');
  });
};

// закрытие закрытие окна по close
btnsModalClose.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    modalClose();
  });
});

// закрытие закрытие окна по click
modalOverlay.addEventListener('click', function(e) {
    if(e.target == modalOverlay) {
      modalClose();
    }
});
// закрытие по esc
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    modalClose();
  }
});

// иницилизация accordion
const accordions = Array.from(document.querySelectorAll('.accordion'));
new Accordion(accordions, {
  duration: 400,
  collapse: true,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__header',
  panelClass: 'accordion__body',
  openOnInit: [0],
});

// иницилизация tabs
const mQuery = window.matchMedia('(max-width: 992px)');
let tabsBtn = document.querySelectorAll('.painters-nav__btn');
let tabsItem = document.querySelectorAll('.painters-info__item');
let painter = document.querySelector('.painters-info');

tabsBtn.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    if (mQuery.matches) {
      painter.setAttribute('data-target-id', 'painter');
      let pathId =e.currentTarget.getAttribute('data-path-id');
      let targetId =document.querySelector(`[data-target-id="${pathId}"]`);
      targetId.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
  }
  let path =e.currentTarget.getAttribute('data-path');

  tabsBtn.forEach(function(btn) {
    btn.classList.remove('is-active');
    btn.setAttribute("aria-expanded", false);
    e.currentTarget.classList.add('is-active');
    e.currentTarget.setAttribute("aria-expanded", true)
  });

  tabsItem.forEach(function(item) {
    item.classList.remove('is-visible');
    document.querySelector(`[data-target="${path}"]`).classList.add('is-visible');
  });
  painter.removeAttribute('data-target-id');
});
});

//  иницилизация tippy
tippy('[data-tippy-content]', {
  trigger: 'click',
  duration: 300,
});
let tippyBtns = document.querySelectorAll('.projects-tooltip');
tippyBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    let tippyCurrent = e.currentTarget;
    if(tippyCurrent.getAttribute('aria-expanded') === 'false') {
        tippyCurrent.setAttribute('aria-expanded', true);
    } else {
      tippyCurrent.setAttribute('aria-expanded', false);
    }
  });
});

// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

// validate form
const validation = new JustValidate('.form');
const modalMessage = document.querySelector('.contacts-modal');
const btnmodalMessage = document.querySelector('.contacts-modal__btn');
btnmodalMessage.addEventListener('click', function(e) {
  if(e.target == btnmodalMessage) {
    closeMessage();
  }
});
let openMessage = function() {
 modalMessage.classList.add('is-visible');
 modalOverlay.classList.add('overlay--visible');
 disableScroll();
}
let closeMessage = function() {
 modalMessage.classList.remove('is-visible');
 modalOverlay.classList.remove('overlay--visible');
 enableScroll();
}

validation
 .addField('#name', [
   {
     rule: 'minLength',
     value: 3,
     errorMessage: 'Минимум 3 символа',
    //  errorMessage: 'Имя слишком короткое',
   },
   {
     rule: 'maxLength',
     value: 20,
     errorMessage: 'Не более 20 символов',
     //  errorMessage: 'Имя слишком длинное',
   },
   {
    rule: 'customRegexp',
    value: /^[а-яёА-ЯЁ\s]+$/gi,
    errorMessage: 'Только русские символы',
  },
   {
     rule: 'required',
     value: true,
     errorMessage: 'Введите имя',
   },
 ])
 .addField('#tel', [
   {
     rule: 'required',
     errorMessage: 'Введите телефон',
   },
   {
     rule: 'function',
     validator: function() {
       const phone = telSelector.inputmask.unmaskedvalue();
       return phone.length === 10;
     },
     errorMessage: 'Не достаточное количество символов',
   },
 ]).onSuccess((event) => {
   let formData = new FormData(event.target);
   let xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function () {
    if (xhr.readyState == 3) {
      console.log('Идет отправка формы ...');
    }
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        openMessage();
        console.log(xhr);
        setInterval(closeMessage, 3000);
      }
      if (xhr.status == 500) {
        console.log('Внутренняя ошибка сервера!');
        console.dir(xhr);
      }
    }
   }

   xhr.open('POST', 'mail.php', true);
   xhr.send(formData);
   console.log(200500);

   event.target.reset();
 });

 // плавный скролл по якорям
 const smoothLinks = document.querySelectorAll('a[href^="#"]');
 for (let smoothLink of smoothLinks) {
   smoothLink.addEventListener('click', function (e) {
     e.preventDefault();
     const id = smoothLink.getAttribute('href');
     document.querySelector(id).scrollIntoView({
       behavior: 'smooth',
       block: 'start'
     });

   });
 };
});
