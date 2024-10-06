import { onEvent } from '../base/onEvent';
import { Movable } from './Movable';

export function handleMove(movable: Movable) {
  return onEvent(movable.htmlElement, 'mousemove', () => 'mousemove')
}