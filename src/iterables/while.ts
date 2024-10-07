export async function* doWhile<T, U>(
  iterable: AsyncIterableIterator<T>,
  rejectIterable: AsyncIterableIterator<U>
) {
  const iterator = iterable[Symbol.asyncIterator]();

  const rejector = rejectIterable[Symbol.asyncIterator]();

  let stopped = false;

  rejector.next().then(() => stopped = true)

  try {
    for await (const chunk of iterator) {
      if (stopped) {
        throw new Error('stopped')
      }
      yield chunk
    }
  } catch (error) {
    console.log('stopped', error)
  } finally {
    if (iterator.return) {
      iterator.return('doWhile return')
    }

    if (rejector.return) {
      rejector.return('doWhile return')
    }
  }
}
