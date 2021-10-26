export function squaredNumbers() {
  const numbers = document.querySelectorAll('.number')
  numbers.forEach(el => {
    const dataNumber = el.getAttribute('data-number')
    el.setAttribute('data-squared-number', dataNumber * dataNumber)
  })
}

squaredNumbers()