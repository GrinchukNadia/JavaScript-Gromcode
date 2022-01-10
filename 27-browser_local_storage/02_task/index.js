const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value')

const onCounterChange = e => {
  const isButton = e.target.classList.contains('counter__button')
  console.log(isButton)

  if(!isButton) {
    return
  }

  const actionName = e.target.dataset.action

  const oldValue = +counterValueElem.textContent
  const newValue = actionName === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', JSON.stringify(newValue))
  counterValueElem.textContent = newValue;
}

counterElem.addEventListener('click', onCounterChange)

const onStorageChange = e => {
  counterValueElem.textContent = e.newValue
}
window.addEventListener('storage', onStorageChange)

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
}
document.addEventListener('DOMContentLoaded', onDocumentLoaded)