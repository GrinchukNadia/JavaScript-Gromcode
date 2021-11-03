export function dayOfWeek (date, days) {
  const daysNameArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St']
  
  const dateDay = new Date(date).getDate()
  const dateInFuture = new Date(date).setDate(dateDay + days)
  return daysNameArr[new Date(dateInFuture).getDay()]
}

const dayNow = new Date()
console.log(dayOfWeek(dayNow, 11))