export async function* repeat(count: number) {
  while (count > 0) {
    yield null;
  }
}