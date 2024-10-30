export async function repeat(cb: () => Promise<void>) {
  while (true) {
    await cb()
  }
}