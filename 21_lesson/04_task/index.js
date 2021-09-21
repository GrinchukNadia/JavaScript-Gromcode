export function getTitle() {
  const textContentElement = document.querySelector('.title')
  return textContentElement.textContent
}

export function getDescription() {
  const innerTextElement = document.querySelector('.about');
  return innerTextElement.innerText;
}

export function getPlans() {
  const innerHtmlElement = document.querySelector('.plans')
  return innerHtmlElement.innerHTML
}

export function getGoals() {
  const outerHtmlElement = document.querySelector('.goal')
  return outerHtmlElement.outerHTML;
}

console.log(getTitle())
console.log(getDescription())
console.log(getPlans())
console.log(getGoals())