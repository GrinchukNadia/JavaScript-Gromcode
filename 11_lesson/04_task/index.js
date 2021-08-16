const countOccurrences = (strMain='', strKey) => {
  if(strKey.length < 1) {
    return null
  }
  
  console.log(strMain.split(strKey));
  if(strMain.includes(strKey)) {
    return (strMain.split(strKey).length - 1)
  }
  return 0
}

countOccurrences('mnonwoemnoefsn woemnmn', 'mn')