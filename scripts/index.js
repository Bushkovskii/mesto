const editButton = document.querySelector('.profile__button_type_edit');
const popupEditProfile = document.querySelector('#popupEdit');
const profileCloseButton = document.querySelector('#profileCloseButton');
const gallery = document.querySelector('.gallery__grid-container');
const addButton = document.querySelector('.profile__button_type_add');
const popupNewItem = document.querySelector('#popupAdd');
const newItemCloseButton = document.querySelector('#NewItemCloseButton')
const popupImageCloseButton = document.querySelector('#popupImageCloseButton');
const formEditProfile = document.querySelector('#formProfile');
const formAddCard = document.querySelector('#formAddCard');
const addCardTitle = document.querySelector('#NewItemTitle');
const addCardLink = document.querySelector('#NewItemLink');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileFormName = document.querySelector('#ProfileName');
const profileFormAbout = document.querySelector('#ProfileAbout');
const galleryTemplate = document.querySelector('#gallery-template').content;
const popupImage = document.querySelector('#popupImage');
let galleryCard;


function openPopup(popup) {
   popup.classList.add('popup_opened');
}

function closePopup(popup) {
   popup.classList.remove('popup_opened');
}

function submitEditProfileForm(evt) {
   evt.preventDefault();
   profileName.textContent = profileFormName.value;
   profileAbout.textContent = profileFormAbout.value;
   closePopup(popupEditProfile);
}

function createCard (el) {
   const galleryItem = galleryTemplate.cloneNode(true);
   galleryItem.querySelector('.gallery__title').textContent = el.name;
   galleryItem.querySelector('.gallery__image').src = el.link;
   galleryItem.querySelector('.gallery__image').alt = el.name;
   galleryItem.querySelector('.gallery__item').id = el.name.split(' ').join('');
   galleryItem.querySelector('.gallery__trash').id = el.name.split(' ').join('');

   //События
   galleryItem.querySelector('.gallery__like-button').addEventListener('click', evt =>{
      evt.target.classList.toggle('gallery__like-button_active');
   })

   // Удаление карточки.
   galleryItem.querySelector('.gallery__trash').addEventListener('click', evt => {
      evt.target.closest('.gallery__item').remove();
   })

   //Попап с изображением
   galleryItem.querySelector('.gallery__image').addEventListener('click', evt => {
      openPopup(popupImage);
      popupImage.querySelector('.popup__image').src = evt.target.src;
      popupImage.querySelector('.popup__image').alt = evt.target.alt;
      popupImage.querySelector('#popupImageCaption').textContent = evt.target.alt;
   })

    return galleryCard = galleryItem;
}

//Функция добавление карточки
function addCard() {
   gallery.prepend(galleryCard);
}

//Добавление карточек из массива
initialCards.forEach(el => {
   createCard(el);
   addCard()
});

editButton.addEventListener('click', () => {
   openPopup(popupEditProfile);
   profileFormName.value = profileName.textContent;
   profileFormAbout.value = profileAbout.textContent;
});

formEditProfile.addEventListener('submit', submitEditProfileForm);

profileCloseButton.addEventListener('click', () => {
   closePopup(popupEditProfile);
});

addButton.addEventListener('click', () => {
   openPopup(popupNewItem);
});

newItemCloseButton.addEventListener('click', () => {
   closePopup(popupNewItem);
});

popupImageCloseButton.addEventListener('click', () => {
   closePopup(popupImage);
})

//Добавление карточки, которую запросил пользователь
formAddCard.addEventListener('submit', (evt) => {
   evt.preventDefault();
   const card = {
      name: addCardTitle.value,
      link: addCardLink.value
   }
   createCard(card)
   addCard();
   closePopup(popupNewItem);
});