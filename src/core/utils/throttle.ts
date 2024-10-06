export function throttle<T extends unknown[]>(fn: (...args: T) => void, delayMS: number) {
  let isReady = true;

  return function (...args: T) {
    if (isReady) {
      fn(...args)
      
      isReady = false;
      
      setTimeout(() => {
        isReady = true
      }, delayMS)
    }
  }
}
