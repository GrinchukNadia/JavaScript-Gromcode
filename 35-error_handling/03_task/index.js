import { fetchUserData, fetchUserRepo } from "./src/fetchUserData.js";
import { renderDefaultPhoto, renderUserData } from "./src/renderUserData.js";
import { showSpinner } from "./src/spinner.js";


window.addEventListener('DOMContentLoaded', () => {
  renderDefaultPhoto();
  
  const onSearchUser = () => {
    const userNameInputElem = document.querySelector('.name-form__input');
    const userName = userNameInputElem.value;
    fetchUserData(userName)
      .then((userData) => {
        showSpinner();
        fetchUserRepo(userData);
        renderUserData(userData);
      })
      .catch((e) => alert('Failed to load data'));
    // .finally();
  };
  
  const showUserBtnElem = document.querySelector('.name-form__btn');
  showUserBtnElem.addEventListener('click', onSearchUser);
})
