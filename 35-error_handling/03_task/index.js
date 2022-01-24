const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatarElem.src = defaultAvatar;

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const repoListElem = document.querySelector('.repo-list');
const spinnerElem = document.querySelector('.spinner');

const fetchUserData = (name) =>
  fetch(`https://api.github.com/users/${name}`).then((response) =>
    response.json()
  );

const renderUserData = (data) => {
  const { avatar_url, name, location } = data; // eslint-disable-line
  userAvatarElem.src = avatar_url; // eslint-disable-line
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      spinnerElem.classList.remove('spinner_hidden');
      fetch(userData.repos_url)
        .then((response) => response.json())
        .then((data) => {
          const repoNames = data.map(
            ({ name }) => `
                <li class="repo-list__item">${name}</li>
              `
          );

          repoListElem.innerHTML = repoNames.join(' ');
        })
        .catch((e) => new Error('Failed to load data'));

      renderUserData(userData);
    })
    .catch((e) => {
      spinnerElem.classList.add('spinner_hidden');
      console.log('work');
      alert(e.message);
    })
    .finally(spinnerElem.classList.add('spinner_hidden'));
};

showUserBtnElem.addEventListener('click', onSearchUser);
