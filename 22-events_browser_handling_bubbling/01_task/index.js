const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p')
const spanElem = document.querySelector('.rect_span')
const list = document.querySelector('.events-list');

function listTargetElem(text, color) {
  list.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
}

const divTargetGreenElem = listTargetElem.bind(null, 'div', 'green')
const divTargetGreyElem = listTargetElem.bind(null, 'div', 'grey')
const pTargetGreenElem = listTargetElem.bind(null, 'p', 'green')
const pTargetGreyElem = listTargetElem.bind(null, 'p', 'grey')
const spanTargetGreenElem = listTargetElem.bind(null, 'span', 'green')
const spanTargetGreyElem = listTargetElem.bind(null, 'span', 'grey')

function attachHandlers() {
  divElem.addEventListener('click', divTargetGreenElem )
  divElem.addEventListener('click', divTargetGreyElem, true)
  pElem.addEventListener('click', pTargetGreenElem )
  pElem.addEventListener('click', pTargetGreyElem, true)
  spanElem.addEventListener('click', spanTargetGreenElem )
  spanElem.addEventListener('click', spanTargetGreyElem, true)
}
attachHandlers()

const clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', () => {
  list.innerHTML = ''
})

const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
removeHandlersBtn.addEventListener('click', () => {
  divElem.removeEventListener('click', divTargetGreenElem);
  divElem.removeEventListener('click', divTargetGreyElem, true)
  pElem.removeEventListener('click', pTargetGreenElem )
  pElem.removeEventListener('click', pTargetGreyElem, true)
  spanElem.removeEventListener('click', spanTargetGreenElem )
  spanElem.removeEventListener('click', spanTargetGreyElem, true)
})

const attachHandlersBtn = document.querySelector('.attach-handlers-btn');
attachHandlersBtn.addEventListener('click', () => attachHandlers())