const singleUseBtn = document.querySelector('.single-use-btn')

function clicked() {
  console.log('clicked')
  singleUseBtn.removeEventListener('click', clicked)
}


singleUseBtn.addEventListener('click', clicked);
