export function shmoment(date) {
  const setMethodNames = {
    years: 'setFullYear',
    months: 'setMonth',
    days: 'setDate',
    hours: 'setHours',
    minutes: 'setMinutes',
    seconds: 'setSeconds',
    milliseconds: 'setMilliseconds',    
  }
  const getMethodNames = {
    years: 'getFullYear',
    months: 'getMonth',
    days: 'getDate',
    hours: 'getHours',
    minutes: 'getMinutes',
    seconds: 'getSeconds',
    milliseconds: 'getMilliseconds',
  }

  let dateCopy = new Date(date)
  
  const calculator = {
      add(value, number) {
        const currentDate = dateCopy[getMethodNames[value]]()
        dateCopy = new Date(
          dateCopy[setMethodNames[value]](currentDate + number)
        );
        return this;
      },
      subtract(value, number) {
        this.add(value, -number)
        return this;
      },
      result () {
        return dateCopy;
      },
  }

  return calculator;
}

console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('days', 3).subtract('days', 2).result())