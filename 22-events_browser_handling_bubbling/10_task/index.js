const btns = document.querySelectorAll('.pagination__page')

function handleClick(event) {
  console.log(event.target.attributes['data-page-number'].value);
}

btns.forEach(el => el.addEventListener('click', handleClick))