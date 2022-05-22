const editButton = document.querySelector('.profile__button_type_edit');
const popupOpen = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close-button');

function popupOpened() {
   popupOpen.classList.add('popup_opened');
}

function popupClosed() {
   popupOpen.classList.remove('popup_opened');
}

editButton.addEventListener('click', popupOpened);
popupClose.addEventListener('click', popupClosed);