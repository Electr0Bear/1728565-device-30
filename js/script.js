if (window.location.href.indexOf('/index.html') !== -1) {
  console.log('главная страница');

  const sliderSelectorSection = document.querySelector('.slider-selectors');
  const sliderSelectorArray = sliderSelectorSection.querySelectorAll('.slider-selector');
  const sliderItemArray = document.querySelectorAll('.slider-item');

  for (let i = 0; i < sliderSelectorArray.length; i++) {
    sliderSelectorArray[i].addEventListener('click', evt => {
      evt.preventDefault();
      if (!sliderItemArray[i].classList.contains('slider-show')) {

        for (let j = 0; j < sliderItemArray.length; j++) {
          if (sliderItemArray[j].classList.contains('slider-show')) {
            sliderItemArray[j].classList.toggle('slider-show');
            sliderSelectorArray[j].classList.toggle('slider-selector-active');
          }
        }
        sliderItemArray[i].classList.toggle('slider-show');
        sliderSelectorArray[i].classList.toggle('slider-selector-active');
      }
    });
  }

  const servicesSelectorSection = document.querySelector('.services-buttons');
  const servicesSelectorArray = servicesSelectorSection.querySelectorAll('.button');
  const servicesInfoArray = document.querySelectorAll('.service-info');

  for (let i = 0; i < servicesSelectorArray.length; i++) {
    servicesSelectorArray[i].addEventListener('click', evt => {
      evt.preventDefault();
      if (!servicesInfoArray[i].classList.contains('services-info-show') && !servicesSelectorArray[i].classList.contains('button-black')) {
        for (let j = 0; j < servicesInfoArray.length; j++) {
          if (servicesInfoArray[j].classList.contains('services-info-show') && servicesSelectorArray[j].classList.contains('button-black')) {
            servicesInfoArray[j].classList.toggle('services-info-show');
            servicesSelectorArray[j].classList.toggle('button-black')
          }
        }
        servicesInfoArray[i].classList.toggle('services-info-show');
        servicesSelectorArray[i].classList.toggle('button-black');
      }
    });
  }

  const mapShow = document.querySelector('.small-map');
  const mapPopup = document.querySelector('.modal-map');
  const mapClose = document.querySelector('.map-close-button');
  const feedbackShow = document.querySelector('.feedback-button');
  const feedbackPopup = document.querySelector('.modal-feedback');
  const feedbackClose = document.querySelector('.feedback-close-button');
  const userNameInput = feedbackPopup.querySelector('.user-name-input');

  mapShow.addEventListener('click', evt => {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
    feedbackPopup.classList.remove('modal-show');
    document.querySelector('.large-map').focus();
  });

  mapClose.addEventListener('click', evt => {
    evt.preventDefault();
    console.log('нажата кнопка закрытия карты');
    mapPopup.classList.remove('modal-show');
  });

  feedbackShow.addEventListener('click', evt => {
    evt.preventDefault();
    feedbackPopup.classList.add('modal-show');
    mapPopup.classList.remove('modal-show');
    userNameInput.focus();
  });

  feedbackClose.addEventListener('click', evt => {
    evt.preventDefault();
    console.log('нажата кнопка закрытия формы');
    feedbackPopup.classList.remove('modal-show');
  });

  document.addEventListener('keyup', evt => {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      if (mapPopup.classList.contains('modal-show')) {
        mapPopup.classList.remove('modal-show');
        document.querySelector('.small-map').focus();
      }

      if (feedbackPopup.classList.contains('modal-show')) {
        feedbackPopup.classList.remove('modal-show');
        document.querySelector('.feedback-button').focus();
      }
    }
  });
}

if (window.location.href.indexOf('/catalog.html') !== -1) {
  console.log('страница каталога');

  const blockedFilterElementArray = document.querySelectorAll('.locked');

  blockedFilterElementArray.forEach(element => {
    element.firstElementChild.setAttribute('disabled', 'disabled');
  });

}