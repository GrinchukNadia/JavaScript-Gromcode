const createMessenger = () => {
  let messageText = 'Just learn it';
  let messageSender = 'Gromcode';
  const sendMessage = (name) => {
    console.log(`${name}, ${messageText}! Your ${messageSender}`);
  };
  const setMessage = (text) => {
    messageText = text;
  };
  const setSender = (sender) => {
    messageSender = sender;
  };

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};
export default createMessenger;
