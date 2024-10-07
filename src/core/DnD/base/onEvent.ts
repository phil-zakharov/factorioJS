type Resolver<V> = (arg: IteratorResult<V>) => void

type Listener<K extends keyof HTMLElementEventMap> = (
  this: HTMLElement,
  ev: HTMLElementEventMap[K]
) => void

type Value<K extends keyof HTMLElementEventMap> = [
  HTMLElement,
  HTMLElementEventMap[K],
]

export function onEvent<K extends keyof HTMLElementEventMap>(
  element: HTMLElement,
  event: K
): AsyncIterableIterator<Value<K>> {
  let handled = false,
    resolver: Resolver<Value<K>> = () => {},
    listener: Listener<K> = () => {}

  return {
    [Symbol.asyncIterator]() {
      return this
    },
    async next() {
      if (!handled) {
        handled = true

        listener = function (this: HTMLElement, event: HTMLElementEventMap[K]) {
          resolver({ value: [this, event], done: false })
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
