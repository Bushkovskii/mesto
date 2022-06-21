const buttonEditProfile = document.querySelector('.profile__button_type_edit');
const popupEditProfile = document.querySelector('#popupEdit');
const profileCloseButton = document.querySelector('#profileCloseButton');
const gallery = document.querySelector('.gallery__grid-container');
const buttonAddProfile = document.querySelector('.profile__button_type_add');
const popupNewItem = document.querySelector('#popupAdd');
const newItemCloseButton = document.querySelector('#NewItemCloseButton')
const popupImageCloseButton = document.querySelector('#popupImageCloseButton');
const formEditProfile = document.querySelector('#formProfile');
const formAddCard = document.querySelector('#formAddCard');
const buttonAddCard = document.querySelector('#NewItemButton');
const newCardTitle = document.querySelector('#new-item-title');
const newCardLink = document.querySelector('#new-item-link');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileFormName = document.querySelector('#profile-name');
const profileFormAbout = document.querySelector('#profile-about');
const galleryTemplate = document.querySelector('#gallery-template').content;
const popupImage = document.querySelector('#popupImage');
const popupImageCaption = popupImage.querySelector('#popupImageCaption');
const popupFullImage = popupImage.querySelector('.popup__image');
const popupOverlayList = Array.from(document.querySelectorAll('.popup__overlay'));

//Проверка нажатой клавиши
function checkKey (key) {
    if (key === 'Escape') {
        return true;
    }
}

//Поиск открытого попапа
const findOpenedPopup = () => {
    return document.querySelector('.popup_opened');
}

//Обработчик
function handlerKey(evt) {
    const key = evt.key;
    if (checkKey(key)) {
        closePopup(findOpenedPopup());
    }
}

function openPopup(popup) {
   popup.classList.add('popup_opened');
   document.addEventListener('keydown', handlerKey);
}

function closePopup(popup) {
   popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handlerKey);
}

function submitEditProfileForm(evt) {
   evt.preventDefault();
   profileName.textContent = profileFormName.value;
   profileAbout.textContent = profileFormAbout.value;
   closePopup(popupEditProfile);
}

function createCard (el) {
   const galleryItem = galleryTemplate.cloneNode(true);
   const cardImage = galleryItem.querySelector('.gallery__image');
   const galleryCardTrash = galleryItem.querySelector('.gallery__trash');
   galleryItem.querySelector('.gallery__title').textContent = el.name;
   cardImage.src = el.link;
   cardImage.alt = el.name;
   galleryItem.querySelector('.gallery__item').id = el.name.split(' ').join('');
   galleryCardTrash.id = el.name.split(' ').join('');

   //События
   galleryItem.querySelector('.gallery__like-button').addEventListener('click', evt =>{
      evt.target.classList.toggle('gallery__like-button_active');
   })

   // Удаление карточки.
    galleryCardTrash.addEventListener('click', evt => {
      evt.target.closest('.gallery__item').remove();
   })

   //Попап с изображением
   cardImage.addEventListener('click', evt => {
      popupFullImage.src = evt.target.src;
      popupFullImage.alt = evt.target.alt;
      popupImageCaption.textContent = evt.target.alt;
      openPopup(popupImage);
   })

    return galleryItem;
}

//Функция добавление карточки
function addCard(el) {
   gallery.prepend(el);
}

function ButtonAddCardDisable(buttonElement) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__button_disabled');
}

//Добавление карточек из массива
initialCards.forEach(el => {
   addCard(createCard(el))
});

buttonEditProfile.addEventListener('click', () => {
   openPopup(popupEditProfile);
   profileFormName.value = profileName.textContent;
   profileFormAbout.value = profileAbout.textContent;
});

formEditProfile.addEventListener('submit', submitEditProfileForm);

profileCloseButton.addEventListener('click', () => {
   closePopup(popupEditProfile);
});

buttonAddProfile.addEventListener('click', () => {
   openPopup(popupNewItem);
   ButtonAddCardDisable(buttonAddCard);
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
      name: newCardTitle.value,
      link: newCardLink.value
   }
   addCard(createCard(card));
   closePopup(popupNewItem);
   formAddCard.reset();
});

//Закрытие попапа по клику на оверлей
popupOverlayList.forEach((overlayElement) => {
    overlayElement.addEventListener('click', () => {
        const popupParent = overlayElement.closest('.popup');
        closePopup(popupParent);
    })
})