import { onEvent } from '../base/onEvent'
import { Movable } from './Movable'

export function handleMove(
  movable: Movable
): AsyncIterableIterator<[HTMLElement, HTMLElementEventMap['mousemove']]> {
  return onEvent(movable.htmlElement, 'mousemove')
}
