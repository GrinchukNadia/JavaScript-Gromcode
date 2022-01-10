const listElem = document.querySelector('.list');
const creatBtnElem = document.querySelector('.create-task-btn');
const taskInputElem = document.querySelector('.task-input');

const tasks = [
  {
    text: 'Buy milk and bread',
    done: false,
    id: 1,
    date: 'Sun Feb 01 2021 12:00:00',
    timeDone: '',
  },
  {
    text: 'Pick up Tom from airport',
    done: false,
    id: 2,
    date: 'Sun Feb 01 2021 10:00:00',
    timeDone: '',
  },
  {
    text: 'Visit party',
    done: false,
    id: 3,
    date: 'Sun Feb 01 2021 11:00:00',
    timeDone: '',
  },
  {
    text: 'Visit doctor',
    done: true,
    id: 4,
    date: 'Sun Feb 01 2021 13:00:00',
    timeDone: 'Mon Feb 01 2021 14:00:00',
  },
  {
    text: 'Buy meat',
    done: true,
    id: 5,
    date: 'Sun Feb 01 2021 14:00:00',
    timeDone: 'Mon Feb 01 2021 16:00:00',
  },
];

const sortTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }

  if (a.done) {
    return new Date(b.dateDone) - new Date(a.dateDone);
  }

  return new Date(b.date) - new Date(a.date);
};

const createTask = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-id', id);
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');

  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  listItemElem.append(checkbox, text);
  return listItemElem;
};

const renderTasks = (tasksList) => {
  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(sortTasks).map(createTask);
  listElem.append(...tasksElems);
};

renderTasks(tasks);

const onClickToggle = (event) => {
  const isCheckBox = event.target.type === 'checkbox';
  if (!isCheckBox) {
    return;
  }

  tasks.forEach((el) => {
    const element = el;
    if (element.id === +event.target.dataset.id) {
      element.done = !element.done;
    }
  });
  renderTasks(tasks);
};

const onClickAdd = () => {
  if (!taskInputElem.value) {
    return;
  }

  const elemArr = {
    text: taskInputElem.value,
    done: false,
    id: Date.now(),
    date: new Date(Date.now()),
    timeDone: new Date(Date.now()),
  };
  
  taskInputElem.value = '';
  tasks.push(elemArr);
  renderTasks(tasks);
};

listElem.addEventListener('click', onClickToggle);
creatBtnElem.addEventListener('click', onClickAdd);
