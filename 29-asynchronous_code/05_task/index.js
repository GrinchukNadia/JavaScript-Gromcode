const randomeDelay = (from, to) =>
  Math.floor(Math.random() * (to + 1 - from) + from);

export const requestUserData = (userId, callback) => {
  if (userId === 'broken') {
    console.log('broken');
    callback(null, 'Failed to load user data');
  }
  const randomNumber = randomeDelay(1000, 3000);

  const userInfo = {
    userId,
    email: `${userId}@example.com`,
  };
  setTimeout(() => callback(userInfo), randomNumber);
};