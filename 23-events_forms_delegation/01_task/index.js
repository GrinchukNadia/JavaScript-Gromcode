// так можно получить данные формы - ВАРИАНТ 1:
// const formFields = [...new FormData(formElem)];
// formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
  // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
  // const [prop, value] = formField;
  // return {
    // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
    // ...acc,
    // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));

const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emailErrorEl = document.querySelector('.error-text_email');
const passwordErrorEl = document.querySelector('.error-text_password');

const isRequired = (value) => (value ? undefined : 'Required');
const isEmail = (value) => (value.includes('@') ? undefined : 'Should be an email');

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired]
}

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName]
  return validators
    .map((el) => el(value))
    .filter((el) => el)
    .join(', ');
}

const onEmailChange = event => {
  const validationText = validate('email', event.target.value)
  emailErrorEl.textContent = validationText;
}

const onPasswordChange = event => {
  const validationText2 = validate('password', event.target.value);
  passwordErrorEl.textContent = validationText2;
}

emailInputElem.addEventListener('input',  onEmailChange)
passwordInputElem.addEventListener('input',  onPasswordChange)

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault()
  const formData = [...new FormData(formElem)]
    .reduce((acc, [name, passw]) => ({...acc, [name]: passw}), {})
  alert(JSON.stringify(formData))
}

formElem.addEventListener('submit', onFormSubmit)