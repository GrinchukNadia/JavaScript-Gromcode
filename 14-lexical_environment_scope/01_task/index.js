
let messageText = 'Just learn it';
export const sendMessage = (name) => {
  console.log(`${name}, ${messageText}! Your Gromcode`);
};
export const setMessage = (text) => {
  messageText = text;
};

sendMessage('Ann')
setMessage('Good job')
sendMessage('Ann')