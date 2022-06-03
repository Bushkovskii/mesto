const editButton = document.querySelector('.profile__button_type_edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let form = document.querySelector('.popup__form');
let formName = document.querySelector('.popup__form-item_el_name');
let formAbout = document.querySelector('.popup__form-item_el_about');

// const initialCards = [
//    {
//       name: 'Архыз',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//    },
//    {
//       name: 'Челябинская область',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//    },
//    {
//       name: 'Иваново',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//    },
//    {
//       name: 'Камчатка',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//    },
//    {
//       name: 'Холмогорский район',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//    },
//    {
//       name: 'Байкал',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//    }
// ];
//
// let galleryContent = document.querySelector('.gallery__grid-container');
// const galleryItem = document.
// galleryContent.append(initialCards);


function popupOpen(popup) {
   popup.classList.add('popup_opened');
}

function popupClosed() {
   popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
   evt.preventDefault();
   profileNameValue = formName.value;
   profileAboutValue = formAbout.value;


   profileName.textContent = profileNameValue;
   profileAbout.textContent = profileAboutValue;
   popupClosed();
}

editButton.addEventListener('click', () => {
   popupOpen(popup);
   formName.value = profileName.textContent;
   formAbout.value = profileAbout.textContent;
});
popupClose.addEventListener('click', popupClosed);
form.addEventListener('submit', formSubmitHandler);