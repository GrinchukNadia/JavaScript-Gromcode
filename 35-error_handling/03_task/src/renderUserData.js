const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const userAvatarElem = document.querySelector('.user__avatar');

export const renderDefaultPhoto = () => {
  const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
  userAvatarElem.src = defaultAvatar;
}
export const renderUserData = (data) => {

  const { avatar_url, name, location } = data; // eslint-disable-line
  userAvatarElem.src = avatar_url; // eslint-disable-line
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};
