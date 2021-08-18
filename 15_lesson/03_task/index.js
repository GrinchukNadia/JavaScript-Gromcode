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
        console.log([...memory].sort((a, b) => b.dateTime - a.dateTime));
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