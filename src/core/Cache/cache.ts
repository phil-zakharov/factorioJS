export class Cache<K, V> {
  #cache = new Map<K, V>()

  get(key: K, fallback: (key: K) => V) {
    let value = this.#cache.get(key);

    if (!value) {
      value = fallback(key)
      this.#cache.set(key, value)
    }
    return value
  }
}