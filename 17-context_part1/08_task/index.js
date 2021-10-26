export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.secondsPassed < 60) {
        this.secondsPassed += 1;
      }
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
    }, 1000);
  },
  getTime() {
    return `${this.minsPassed}:${this.secondsPassed < 10 
      ? `0${this.secondsPassed}` 
      : this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

timer.startTimer();
setTimeout(() => timer.getTime(), 4000);
setTimeout(() => timer.getTime(), 6000);
setTimeout(() => timer.stopTimer(), 7000);
setTimeout(() => timer.startTimer(), 8000);
setTimeout(() => timer.getTime(), 9000);
setTimeout(() => timer.getTime(), 11000);
setTimeout(() => timer.stopTimer(), 12000);
setTimeout(() => timer.resetTimer(), 14000);
setTimeout(() => timer.getTime(), 16000);
