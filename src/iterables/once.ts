export async function* once<T extends AsyncIterableIterator<unknown, string>>(
  iterable: T
) {
  const iterator = iterable[Symbol.asyncIterator]()

  const { value } = await iterator.next()

  yield value

  if (iterator.return) {
    iterator.return('once')
  }

  return
}
