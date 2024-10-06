type Resolver<V> = (arg: IteratorResult<V>) => void
type Listener = () => void

export function onEvent<Value extends string>(
  element: HTMLElement,
  event: keyof HTMLElementEventMap,
  getValue: () => Value
): AsyncIterableIterator<Value> {
  let handled = false,
    resolver: Resolver<Value> = () => {},
    listener: Listener = () => {}

  return {
    [Symbol.asyncIterator]() {
      return this
    },
    async next() {
      if (!handled) {
        handled = true

        listener = () => {
          resolver({ value: getValue(), done: false })
        }

        element.addEventListener(event, listener)
      }

      return new Promise((resolve) => {
        resolver = resolve
      })
    },
    return(value) {
      console.log('onEvent return', event, value)
      element.removeEventListener(event, listener)
      return Promise.resolve({ value: undefined, done: true })
    },
    throw(error) {
      console.log('onEvent throw', event, error)
      element.removeEventListener(event, listener)
      return Promise.resolve({ value: undefined, done: true })
    },
  }
}
