export function getGreenwichTime(date) {
  const formater = new Intl.DateTimeFormat('en', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return formater.format(date)
}

const timeNow = new Date()
console.log(getGreenwichTime(timeNow))