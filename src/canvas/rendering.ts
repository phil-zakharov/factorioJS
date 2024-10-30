import { sleep } from '../core/promise/sleep';

export async function rendering(cb: () => void) {
  while (true) {
    await sleep(1000)
    cb()
  }
}