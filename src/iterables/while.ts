export async function* doWhile<
  T extends AsyncIterableIterator<unknown, string>,
>(iterable: T, rejectIterable: T) {
  const iterator = iterable[Symbol.asyncIterator]();

  const rejector = rejectIterable[Symbol.asyncIterator]();

  let stopped = false;

  rejector.next().then(() => stopped = true)

  for await (const chunk of iterator) {
    if (stopped) {
      if (iterator.return) {
        iterator.return('doWhile return')
      }

      if (rejector.return) {
        rejector.return('doWhile return')
      }

      return;
    }
    yield chunk
  }
}
