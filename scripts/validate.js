const validateParameters = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    // console.log(`Массив форм:${formList}`)
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(formElement, settings);
    })
}

const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    console.log(`Массив полей:${inputList}`)
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    console.log(`Кнопка:${buttonElement}`)
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, settings);
            buttonState(inputList, buttonElement, settings);
        })
    })
}

const checkInputValidity = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
        hideInputError(formElement, inputElement, settings);
    }
}

const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    console.log(`Элемент ошибка(show): ${errorElement}`)
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.classList.add(settings.errorClass);
    errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    console.log(`Элемент ошибка(hide): ${errorElement}`)
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(settings.errorClass)
}


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const buttonState = (inputList, buttonElement, settings) => {
    if(hasInvalidInput(inputList)) {
        buttonElement.classList.add(settings.inactiveButtonClass);
    } else {
        buttonElement.classList.remove(settings.inactiveButtonClass);
    }
}

enableValidation(validateParameters);