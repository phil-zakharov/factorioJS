export function throttle<T extends (...args: never[]) => void>(
  fn: T,
  delayMS: number
): (...args: Parameters<T>) => void {
  let isReady = true

  return function (...args: Parameters<T>): void {
    if (isReady) {
      fn(...args)

      isReady = false

      setTimeout(() => {
        isReady = true
      }, delayMS)
    }
  }
}
