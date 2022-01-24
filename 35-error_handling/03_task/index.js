import { fetchUserData, fetchUserRepo } from './src/fetchUserData.js';
import { renderUserData } from './src/renderUserData.js';
import { hideSpinner, showSpinner } from './src/spinner.js';

const userAvatarElem = document.querySelector('.user__avatar');
const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
userAvatarElem.src = defaultAvatar;


  const onSearchUser = () => {
    const userNameInputElem = document.querySelector('.name-form__input');
    const userName = userNameInputElem.value;
    showSpinner();

    fetchUserData(userName)
      .then((userData) => {
        fetchUserRepo(userData);
        renderUserData(userData);
      })
      .catch(() => alert('Failed to load data'))
    .finally(() => hideSpinner());
  };

  const showUserBtnElem = document.querySelector('.name-form__btn');
  showUserBtnElem.addEventListener('click', onSearchUser);
