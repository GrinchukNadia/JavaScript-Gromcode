'use strict'; // eslint-disable-line

export const tasks = [
  { text: 'Buy milk', done: true },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = (tasksList) => {
  const listItem = document.querySelector('.list')

  const arrayOfElements = tasksList
  .sort((a, b) => a.done - b.done) 
  .map(({text, done}) => {
    
    const elementItem = document.createElement('li')
    elementItem.classList.add('list__item');

    const checkboxElement = document.createElement('input')
    checkboxElement.setAttribute('type', 'checkbox')

    if(done) {
      elementItem.classList.add('list__item_done');
    }
    elementItem.append(checkboxElement, text)
    return elementItem
  });
  
  listItem.append(...arrayOfElements)
};

renderTasks(tasks)