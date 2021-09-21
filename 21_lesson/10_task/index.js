export function finishForm() {
  const inputPasswordElem = document.querySelector('input')
  const inputLoginElem = document.createElement('input')
  const formElem = document.querySelector('.login-form');
  inputPasswordElem.type = 'password'
  inputLoginElem.name = 'login'
  inputLoginElem.type = 'text'
  formElem.prepend(inputLoginElem)
}