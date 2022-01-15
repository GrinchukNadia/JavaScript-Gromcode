export const delay = time => {
    const delayPromise = new Promise(resolve => {
            setTimeout(() => resolve(), time)
        })
    return delayPromise
}

delay(3000).then(() => console.log('Done'))
