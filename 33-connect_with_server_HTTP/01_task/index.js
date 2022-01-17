const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u1001';

userAvatarElem.src = defaultAvatar;

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const fetchUserData = (name) => fetch(`https://api.github.com/users/${name}`)
    .then((response) => response.json() );

const renderUserData = data => {
  const { avatar_url, name, location } = data; // eslint-disable-line
  userAvatarElem.src = avatar_url; // eslint-disable-line
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
}

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then(userData => renderUserData(userData))
};

showUserBtnElem.addEventListener('click', onSearchUser);