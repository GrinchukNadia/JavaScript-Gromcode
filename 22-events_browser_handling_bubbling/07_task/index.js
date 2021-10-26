const btns = document.querySelectorAll('.btn')
 
function handleClick(event) {
  console.log(event.target.textContent)
}

btns.forEach(el => {
  el.addEventListener('click', handleClick)
});
