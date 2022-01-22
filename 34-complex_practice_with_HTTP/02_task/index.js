const formElem = document.querySelector('.login-form');
const emailElem = formElem.querySelector('[name="email"]');
const nameElem = formElem.querySelector('[name="name"]');
const passwordElem = formElem.querySelector('[name="password"]');
const submitBtnElem = document.querySelector('.submit-button');
const baseUrl =
  'https://61eaff907ec58900177cdb49.mockapi.io/api/v1/registration';

// let userData = {};

formElem.addEventListener('input', (event) => {
  event.preventDefault();
  submitBtnElem.disabled = !formElem.reportValidity();
});

formElem.addEventListener('submit', (event) => {
  event.preventDefault();
  const userData = {
    name: nameElem.value,
    email: emailElem.value,
    password: passwordElem.value,
  };
  
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then((response) => response.json())
  .then(data => alert(JSON.stringify(data)))
  .then(() => {
    nameElem.value = '';
    emailElem.value = '';
    passwordElem.value = '';
    submitBtnElem.disabled = !formElem.reportValidity();
  });
});

submitBtnElem.addEventListener('click', () => {
})
