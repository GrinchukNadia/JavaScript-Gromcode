// old
/*
const squareArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return [...arr].map((el) => el * el);
}
*/ 

// refactored
const squareArray = (arr) =>
  !Array.isArray(arr) ? null : [...arr].map((el) => el * el);