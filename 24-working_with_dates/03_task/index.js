export function getDiff(startDate, endDate) {
  const startMs = new Date(startDate).getTime()
  const endMs = new Date(endDate).getTime()

  const timeDifference = Math.abs(startMs - endMs);

  const second = 1000
  const minut = second * 60
  const hour = minut * 60
  const day = hour * 24;

  const hoursIsLefted = timeDifference % day;
  const minutsIsLefted = hoursIsLefted % hour
  const secondsIsLefted = minutsIsLefted % minut

  const days = Math.trunc(timeDifference / day)
  const hours = Math.trunc(hoursIsLefted / hour)
  const minuts = Math.trunc(minutsIsLefted / minut)
  const seconds = Math.trunc(secondsIsLefted / second)

  return `${days}d ${hours}h ${minuts}m ${seconds}s`;
}

const firstDate = new Date(2012, 4, 12, 4, 1, 2);
const secondDate = new Date(2012, 4, 12, 4, 15, 5);

console.log(getDiff(secondDate, firstDate))
// console.log(getDiff(firstDate, secondDate))
