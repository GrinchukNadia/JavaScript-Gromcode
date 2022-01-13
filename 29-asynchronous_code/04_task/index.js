export const delay = (delayTime, callback, context, ...rest) => {
  setTimeout(() => callback.call(context, ...rest), delayTime)
}
