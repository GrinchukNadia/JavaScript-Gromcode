export const callbackPrompt = {
  message: 'Write your phone number',
  showPrompt() {
    const userPhone = prompt(this.message);
    console.log(userPhone);
  },
  showDeferredPrompt(ms) {
    return setTimeout(this.showPrompt.bind(this), ms);
  },
};

callbackPrompt.showDeferredPrompt(2000);
