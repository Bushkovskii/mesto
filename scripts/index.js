const editButton = document.querySelector('.profile__button_type_edit');
const popupOpen = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let form = document.querySelector('.popup__form');
let formName = document.querySelector('.popup__form-item_el_name');
let formAbout = document.querySelector('.popup__form-item_el_about');

function popupOpened() {
   popupOpen.classList.add('popup_opened');
   formName.value = profileName.textContent;
   formAbout.value = profileAbout.textContent;
}

function popupClosed() {
   popupOpen.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
   evt.preventDefault();
   profileNameValue = formName.value;
   profileAboutValue = formAbout.value;


   profileName.textContent = profileNameValue;
   profileAbout.textContent = profileAboutValue;
   popupClosed();
}

editButton.addEventListener('click', popupOpened);
popupClose.addEventListener('click', popupClosed);
form.addEventListener('submit', formSubmitHandler);