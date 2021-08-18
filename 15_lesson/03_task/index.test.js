import { createLogger } from "./index";

it('methods should safe information in memory', () => {
  const logger = createLogger()

  const memoryBeforeLog = logger.memory
  expect(memoryBeforeLog).toEqual([])

  logger.log("User logged in")


  expect(logger.memory).toEqual([{
    message: "User logged in",
    dateTime: expect.anything(),
    type: 'log'
  }])

  logger.warn("User logged out")
  expect(logger.memory).toEqual([
    {
      message: 'User logged in',
      dateTime: expect.anything(),
      type: 'log',
    },
    {
      message: 'User logged out',
      dateTime: expect.anything(),
      type: 'warn',
    },
  ])

  logger.error("Unexpected error on the page")
  expect(logger.memory).toEqual([
    {
      message: 'User logged in',
      dateTime: expect.anything(),
      type: 'log',
    },
    {
      message: 'User logged out',
      dateTime: expect.anything(),
      type: 'warn',
    },
    {
      message: 'Unexpected error on the page',
      dateTime: expect.anything(),
      type: 'error',
    },
  ]);
})

it('every new logger have independent memory', () => {
  const logger = createLogger();

  expect(logger.memory).toEqual([]);

  logger.log('User logged in');

  expect(logger.memory).toEqual([
    {
      message: 'User logged in',
      dateTime: expect.anything(),
      type: 'log',
    },
  ]);

  const anotherLogger = createLogger();
  expect(anotherLogger.memory).toEqual([]);

  anotherLogger.error('Unexpected error on the page');
  expect(anotherLogger.memory).toEqual([
    {
      message: 'Unexpected error on the page',
      dateTime: expect.anything(),
      type: 'error',
    },
  ]);

  expect(logger.memory).not.toEqual(anotherLogger.memory)
})

it('expect have certain type of memory if getRecords method has parameter',
  () => {
    const logger = createLogger();
    logger.log('User logged in')
    logger.warn('User try to restricted page')
    logger.log('User logged out')
    logger.error('Unexpected error on the page');

    const logResult = logger.getRecords('log')
    expect(logResult).toEqual([
      { 
        message: 'User logged out', 
        dateTime: expect.anything(),
        type: 'log', 
      },
      { 
        message: 'User logged in', 
        dateTime: expect.anything(),
        type: 'log',
      },
    ]);

    const errorResult = logger.getRecords('error')
    expect(errorResult).toEqual([
      {
        message: 'Unexpected error on the page',
        dateTime: expect.anything(),
        type: 'error',
      },
    ]);

    const warnResult = logger.getRecords('warn')
    expect(warnResult).toEqual([
      {
        message: 'User try to restricted page',
        dateTime: expect.anything(),
        type: 'warn',
      },
    ]);
  })

  it('return all memory if any paramerers in getRecords', () => {
    const logger = createLogger();
    logger.log('User logged in');
    logger.warn('User try to restricted page');
    logger.log('User logged out');
    logger.error('Unexpected error on the page');

    const allMemory = logger.getRecords()
    expect(allMemory).toEqual([
      {
        message: 'Unexpected error on the page',
        dateTime: expect.anything(),
        type: 'error',
      },
      {
        message: 'User logged out',
        dateTime: expect.anything(),
        type: 'log',
      },
      {
        message: 'User try to restricted page',
        dateTime: expect.anything(),
        type: 'warn',
      },
      {
        message: 'User logged in',
        dateTime: expect.anything(),
        type: 'log',
      },
    ]);
  })