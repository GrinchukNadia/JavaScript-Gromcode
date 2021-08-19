export function createLogger() {
  const memory = [];

  function warn(text) {
    memory.push({
      message: text,
      dateTime: new Date(),
      type: 'warn',
    });
  }

  function error(text) {
    memory.push({
      message: text,
      dateTime: new Date(),
      type: 'error',
    });
  }

  function log(text) {
    memory.push({
      message: text,
      dateTime: new Date(),
      type: 'log',
    });
  }

  function getRecords(typeCase) {
    switch (typeCase) {
      case 'log':
        return [...memory]
          .filter((el) => el.type === 'log')
          .sort((a, b) => b.dateTime - a.dateTime);

      case 'error':
        return [...memory]
          .filter((el) => el.type === 'error')
          .sort((a, b) => b.dateTime - a.dateTime);

      case 'warn':
        return [...memory]
          .filter((el) => el.type === 'warn')
          .sort((a, b) => b.dateTime - a.dateTime);

      default:
        return [...memory].sort((a, b) => b.dateTime - a.dateTime);
    }
  }

  return {
    warn,
    error,
    log,
    getRecords,
    memory,
  };
}

// const logger = createLogger()
// setTimeout(() => logger.log('User logged in'), 1000);
// setTimeout(() => logger.warn('User try to restricted page'), 2000);
// setTimeout(() => logger.log('User logged out'), 3000);
// setTimeout(() => logger.error('Unexpected error on the page'), 4000);

// setTimeout(() => {
//   const allMemory = logger.getRecords();
//   console.log(allMemory);
// }, 5000)