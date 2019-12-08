export class Validator {
  static validateTextInput(input) {
    if (input.checkValidity() !== true || input.value.length === 0) {
      return 'Это обязательное поле';
    } else if (input.value.length < 2 || input.value.length > 30) {
      return 'Должно быть от 2 до 30 символов';
    } else {
      return '';
    }
  }

  static validateUrlInput(input) {
    const link = input.value;
    if (link === '') {
      return 'Это обязательное поле';
    } else if (!link.startsWith('http://') && !link.startsWith('https://')) {
      return 'Здесь должна быть ссылка';
    } else {
      return '';
    }
  }
}
