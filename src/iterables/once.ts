export async function* once<T>(
  iterable: AsyncIterableIterator<T>
): AsyncIterableIterator<T> {
  const iterator = iterable[Symbol.asyncIterator]()

  const { value } = await iterator.next()

  yield value

  if (iterator.return) {
    iterator.return('once')
  }

  return
}
