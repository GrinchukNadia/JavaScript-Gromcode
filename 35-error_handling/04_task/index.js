export const parseUser = (data) => {
  try {
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
};

console.log(parseUser('{"name": "Tom"}'));
