import {Validator} from "./validate.js";
export class Popup {
  constructor(container) {
    this.container = container;
    this.container.querySelector('.popup__close').addEventListener('click', () => this.close());
  }

  close() {
    document.forms.newForm.reset();
    document.forms.resetInfo.reset();
    this.container.classList.remove('popup_opened');
  }

  open() {
    this.container.classList.add('popup_opened');
  }
}

export class BigImagePopup extends Popup {
  constructor(container) {
    super(container);
  }

  applyImage(link) {
    this.container.querySelector('.image').setAttribute('src', link);
  }
}

// базовый класс для форм редактирования профиля и добавления новой карточки
export class FormPopup extends Popup {
  constructor(container) {
    super(container);
    this.form = container.querySelector('form');
    this.submitButton = this.form.querySelector('.popup__button');
    this.label1 = this.form.querySelector('.chek__open_first');
    this.label2 = this.form.querySelector('.chek__open_second');

    this.form.addEventListener('submit', event => {
      event.preventDefault();
      if (this.validate()) {
        this.submit(this.nameInput().value, this.linkInput().value);
        this.close();
      }
    });

    this.form.addEventListener('input', () => {
      this.validate();
    });
  }

  validate() {
    this.label1.textContent = this.validateName(this.nameInput());
    this.label2.textContent = this.validateLink(this.linkInput());
    if (this.label1.textContent.length === 0 && this.label2.textContent.length === 0) {
      this.enableButton();
      return true;
    } else {
      this.disableButton();
      return false;
    }
  }

  enableButton() {
    const btn = this.submitButton;
    btn.removeAttribute('disabled');
    btn.classList.remove('popup__button');
    btn.classList.add('popup__button_active');
  }

  disableButton() {
    const btn = this.submitButton;
    btn.setAttribute('disabled', true);
    btn.classList.add('popup__button');
    btn.classList.remove('popup__button_active');
  }

  open() {
    this.reset();
    super.open();
  }

  reset() {
    this.form.reset();
    this.label1.textContent = '';
    this.label2.textContent = '';
  }

  nameInput() {
    return this.form.elements.name;
  }

  linkInput() {
    return this.form.elements.link;
  }
}

export class UserInfoPopup extends FormPopup {
  constructor(container, openButton, userInfo) {
    super(container);

    this.userInfo = userInfo;

    openButton.addEventListener('click', () => {
      this.open();

      this.nameInput().value = this.userInfo.name();
      this.linkInput().value = this.userInfo.about();
    });
  }

  submit(name, link) {
    this.userInfo.edit(name, link);
  }

  validateName(input) {
    return Validator.validateTextInput(input);
  }

  validateLink(input) {
    return Validator.validateTextInput(input);
  }
}

export class NewCardPopup extends FormPopup {
  constructor(container, openButton, cardList) {
    super(container);

    openButton.addEventListener('click', () => {
      this.open();
    });

    this.cardList = cardList;
  }

  submit(name, link) {
    this.cardList.addCard(name, link);
  }

  validateName(input) {
    return Validator.validateTextInput(input);
  }

  validateLink(input) {
    return Validator.validateUrlInput(input);
  }
}
