export function finishList() {
  const ulElem = document.querySelector('.list')
  const middleElem = document.querySelector('.special');
  
  function insertLiElem(num) {
    const liElem = document.createElement('li')
    liElem.textContent = num
    return liElem
  }

  ulElem.append(insertLiElem(8))
  ulElem.prepend(insertLiElem(1))
  middleElem.before(insertLiElem(4))
  middleElem.after(insertLiElem(6))
}