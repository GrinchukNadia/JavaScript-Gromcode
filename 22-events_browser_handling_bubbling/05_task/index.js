const searchBtn = document.querySelector('.search__btn')
searchBtn.addEventListener('click', () => {
  console.log(document.querySelector('.search__input').value)
})