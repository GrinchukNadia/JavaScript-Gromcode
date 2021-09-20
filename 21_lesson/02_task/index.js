export function getTitleElement() {
  const titleElem = document.querySelector('title')
  console.log(titleElem)
  return titleElem
}

export function getInputElement() {
  const inputElem = document.querySelector('input[type="text"]')
  console.log(inputElem)
  return inputElem
}

getTitleElement()
getInputElement()