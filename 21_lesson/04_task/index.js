export function getTitle() {
  return document.querySelector('.title').textContent;
}

export function getDescription() {
  return document.querySelector('.about').innerText;
}

export function getPlans() {
  return document.querySelector('.plans').innerHTML;
}

export function getGoals() {
  return document.querySelector('.goal').outerHTML;
}