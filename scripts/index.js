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
let newItem = document.querySelector('#NewItem');
let newItemTitle = document.querySelector('#NewItemTitle');
let newItemLink = document.querySelector('#NewItemLink');



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


//Функция добавление карточки
function addCard(element) {
   const galleryTemplate = document.querySelector('#gallery-template').content;//Template
   const galleryItem = galleryTemplate.cloneNode(true);//Клонирование template
   const trashButton = galleryItem.querySelector('.gallery__trash');

   galleryItem.querySelector('.gallery__title').textContent = element.name;
   galleryItem.querySelector('.gallery__image').src = element.link;
   //Добавление id для карточки и кнопки удаления. Методы split и join добавлены потому что
   //без них не удается найти нужные элементы по id.
   galleryItem.querySelector('.gallery__item').id = element.name.split(' ').join('');
   trashButton.id = element.name.split(' ').join('');

   //Лайк
   galleryItem.querySelector('.gallery__like-button').addEventListener('click', event =>{
      event.target.classList.toggle('gallery__like-button_active');
   })

   //Удаление карточки. Данный обработчик добавлен в функцию addCard(). Если обработчик вынести
   // из addCard (пример в закомментированном коде, начиная со строки 151), тогда событие срабатывает только
   // на первом элементе.
   trashButton.addEventListener('click', event => {
      // const eventTargetId = event.target.id;
      // console.log(event.target.id);
      // console.log(`ID:${event.target.id}`);
      document.querySelector(`#${event.target.id}`).remove();
   })

   gallery.prepend(galleryItem);//Добавление карточки в список
}


//Добавление карточек из массива
   initialCards.forEach(element => {
      addCard(element);
   });

//Добавление карточки, которую запросил пользователь
newItem.addEventListener('submit', (evt) => {
   evt.preventDefault();
   let titleValue = newItemTitle.value;
   let linkValue = newItemLink.value;
   const card = {
      name: titleValue,
      link: linkValue
   }
   addCard(card);
   popupClose(popupNewItem);
});

//Обработчик(объявленная функция)
// function addCardHandler(evt) {
//    evt.preventDefault();
//    let titleValue = newItemTitle.value;
//    let linkValue = newItemLink.value;
//    const card = {
//       name: titleValue,
//       link: linkValue
//    }
//    addCard(card);
//    popupClose(popupNewItem);
// }


//Удаление карточки
// const trashButton = document.querySelector('.gallery__trash');
// function removeCard(event) {
//    const eventTargetId = event.target.id.split(' ').join('');
//    console.log(event.target.id);
//    console.log(`ID:${eventTargetId}`);
//    document.querySelector(`#${eventTargetId}`).remove();
// }
//
//
// trashButton.addEventListener('click', removeCard);