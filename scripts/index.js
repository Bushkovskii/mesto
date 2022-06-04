const editButton = document.querySelector('.profile__button_type_edit');
const popup = document.querySelector('.popup');
const profileCloseButton = document.querySelector('#profileCloseButton');

const gallery = document.querySelector('.gallery__grid-container');//Контейнер списка
const initialCards = [
   {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },
   {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },
   {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },
   {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   }
];// Массив карточек

//Профиль
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let form = document.querySelector('.popup__form');
let profileFormName = document.querySelector('#ProfileName');
let profileFormAbout = document.querySelector('#ProfileAbout');

//Добавление карточки
const addButton = document.querySelector('.profile__button_type_add');
const popupNewItem = document.querySelector('#popupAdd');
const newItemCloseButton = document.querySelector('#NewItemCloseButton')
let newItemTitle = document.querySelector('#NewItemTitle');
let newItemLink = document.querySelector('#NewItemLink');
let newItemButton = document.querySelector('#NewItemButton');

function popupOpen(popup) {
   popup.classList.add('popup_opened');
}

function popupClose(popup) {
   popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
   evt.preventDefault();
   let profileNameValue = profileFormName.value;
   let profileAboutValue = profileFormAbout.value;


   profileName.textContent = profileNameValue;
   profileAbout.textContent = profileAboutValue;
   popupClose(popup);
}

editButton.addEventListener('click', () => {
   popupOpen(popup);
   profileFormName.value = profileName.textContent;
   profileFormAbout.value = profileAbout.textContent;
});
profileCloseButton.addEventListener('click', () => {
   popupClose(popup);
});
form.addEventListener('submit', formSubmitHandler);

//Открытие/закрытие попапа (добавить)
addButton.addEventListener('click', () => {
   popupOpen(popupNewItem);
});
newItemCloseButton.addEventListener('click', () => {
   popupClose(popupNewItem);
});

//Карточки
initialCards.forEach(element => {
   const galleryTemplate = document.querySelector('#gallery-template').content;//Template
   const galleryItem = galleryTemplate.cloneNode(true);//Клонирование template

   galleryItem.querySelector('.gallery__title').textContent = element.name;
   galleryItem.querySelector('.gallery__image').src = element.link;

   galleryItem.querySelector('.gallery__like-button').addEventListener('click', function (event){
      event.target.classList.toggle('gallery__like-button_active');
   })//Лайк

   gallery.append(galleryItem);//Добавление карточки в список
});