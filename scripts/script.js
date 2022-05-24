//Переменные для открытия/закрытия попапа
const editButton = document.querySelector('.profile__button_type_edit');
const popupOpen = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close-button');
// Данные профиля
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
//форма
let form = document.querySelector('.popup__form');
let formName = document.querySelector('.popup__form-item_el_name');
let formAbout = document.querySelector('.popup__form-item_el_about');
let buttonSave = document.querySelector('.popup__form-button');

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