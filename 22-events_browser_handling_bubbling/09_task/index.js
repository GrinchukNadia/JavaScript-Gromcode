const checkBoxChange = document.querySelector('.task-status');
checkBoxChange.addEventListener('change', (event) => {
  console.log(event.target.checked)
})