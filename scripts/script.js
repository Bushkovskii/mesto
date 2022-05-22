const editButton = document.querySelector('.profile__btn-icon_type_edit');
const popupOpen = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close-icon');

function popupOpened() {
   popupOpen.classList.remove('popup_opened');
}

function popupClosed() {
   popupOpen.classList.add('popup_opened');
}

editButton.addEventListener('click', popupOpened);
popupClose.addEventListener('click', popupClosed);