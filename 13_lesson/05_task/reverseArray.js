export default (arr) => {
  if (!Array.isArray(arr) || arr.length < 1) {
    return null;
  }

  return [...arr].reverse();
};