const editButton = document.querySelector('.profile__button_type_edit');
const popupOpen = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close-button');
//форма
let form = document.querySelector('.form');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let formName = document.querySelector('.form__item_el_name');
let formAbout = document.querySelector('.form__item_el_about');
let buttonSave = document.querySelector('.form__button');

//Открытие/закрытие попапа
function popupOpened() {
   popupOpen.classList.add('popup_opened');
}

function popupClosed() {
   popupOpen.classList.remove('popup_opened');
}

editButton.addEventListener('click', popupOpened);
popupClose.addEventListener('click', popupClosed);

//Сохранение данных в форме
function formSubmitHandler(evt) {
   evt.preventDefault();
   profileNameValue = formName.value;
   profileAboutValue = formAbout.value;

   profileName.textContent = profileNameValue;
   profileAbout.textContent = profileAboutValue;
}
form.addEventListener('submit', formSubmitHandler);