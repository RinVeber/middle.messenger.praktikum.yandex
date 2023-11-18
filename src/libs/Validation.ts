enum ValidateRuleType {
  Login = 'login',
  Password = 'password',
  Email = 'email',
  FirstName = 'first_name',
  SecondName = 'second_name',
  DisplayName = 'display_Name',
  Phone = 'phone',
}

class FormValidator {
  private form;

  public constructor(parentEl: HTMLElement) {
    this.form = parentEl.querySelector('form') as HTMLFormElement;
  }

  init() {
    let isFormValid = true;
    const inputs = this.form.querySelectorAll('[name]');

    inputs.forEach((inputElement) => {
      const input = inputElement as HTMLInputElement;

      this.checkValidity(input);

      if (input.dataset.isValid === 'false') {
        isFormValid = false;
        return false;
      }
    });

    if (isFormValid) {
      this.getInputValues(this.form);
    }
  }

  getInputValues(form: HTMLFormElement) {
    const formData = new FormData(form);

    console.log(Object.fromEntries([...formData]));
  }

  checkValidity(input: HTMLInputElement) {
    let isValidInput;
    const name = input.name;

    switch (name) {
      case ValidateRuleType.Login:
        isValidInput = this._validateLogin(input);
        break;
      case ValidateRuleType.Email:
        isValidInput = this._validateEmail(input);
        break;
      case ValidateRuleType.Password:
        isValidInput = this._validatePassword(input);
        break;
      case ValidateRuleType.Phone:
        isValidInput = this._validatePhone(input);
        break;
      case ValidateRuleType.FirstName:
      case ValidateRuleType.SecondName:
      case ValidateRuleType.DisplayName:
        isValidInput = this._validateName(input);
        break;
      default:
        isValidInput = true;
        break;
    }

    input.dataset.isValid = isValidInput.toString();
  }

  private _validateName(input: HTMLInputElement): boolean {
    const regExp = new RegExp(/^[а-яА-ЯёЁa-zA-Z-]+$/, 'g');
    const errorElement = (input.parentNode as HTMLElement).querySelector(
      '.input__error-text',
    ) as HTMLElement;

    errorElement.textContent = '';

    if (input.value === '') {
      errorElement.textContent = 'Поле не должно быть пустым';
      return false;
    } else if (input.value[0] !== input.value[0].toUpperCase()) {
      errorElement.textContent = 'Первая буква должна быть заглавной';
      return false;
    } else if (!regExp.test(input.value)) {
      errorElement.textContent = 'Разрешены символы латиницы или кириллицы';
      return false;
    }

    return true;
  }

  private _validateLogin(input: HTMLInputElement): boolean {
    const regExp = new RegExp(/^[a-zA-Z0-9-_]*$/);

    const errorElement = (input.parentNode as HTMLElement).querySelector(
      '.input__error-text',
    ) as HTMLElement;

    errorElement.textContent = '';

    if (input.value.length < 3 || input.value.length > 20) {
      errorElement.textContent = 'Логин должен быть от 3 до 20 символов';

      return false;
    } else if (!/[^0-9]/.test(input.value)) {
      errorElement.textContent = 'Логин не может состоять только из чисел';

      return false;
    } else if (input.value.includes(' ')) {
      errorElement.textContent = 'Логин не может содержать пробелы';
    }

    if (!regExp.test(input.value)) {
      errorElement.textContent = 'Не допустимые символы';

      return false;
    }

    return true;
  }

  private _validateEmail(input: HTMLInputElement): boolean {
    const regExp = new RegExp(
      /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/,
      'gi',
    );
    const errorElement = (input.parentNode as HTMLElement).querySelector(
      '.input__error-text',
    ) as HTMLElement;

    errorElement.textContent = '';

    if (!regExp.test(input.value)) {
      errorElement.textContent = 'Не валидный email';

      return false;
    }

    return true;
  }

  private _validatePassword(input: HTMLInputElement): boolean {
    const regExp = new RegExp(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/);

    const errorElement = (input.parentNode as HTMLElement).querySelector(
      '.input__error-text',
    ) as HTMLElement;

    errorElement.textContent = '';

    if (input.value.length < 8 || input.value.length > 40) {
      errorElement.textContent = 'Пароль должен содержать от 8 до 40 символов';

      return false;
    }

    if (!regExp.test(input.value)) {
      errorElement.textContent = 'Не корректный пароль';

      return false;
    }

    return true;
  }

  private _validatePhone(input: HTMLInputElement): boolean {
    const regExp = new RegExp(/^(\+)?(\d){10,14}/);

    const errorElement = (input.parentNode as HTMLElement).querySelector(
      '.input__error-text',
    ) as HTMLElement;

    errorElement.textContent = '';

    if (!regExp.test(input.value)) {
      errorElement.textContent = 'Не верный формат номера';

      return false;
    }

    return true;
  }
}

export default FormValidator;
