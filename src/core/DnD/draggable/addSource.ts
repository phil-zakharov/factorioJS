import { DnDElement } from '../base/DnDElement'
import { onEvent } from '../base/onEvent'

export function addSource(
  draggable: DnDElement
): AsyncIterableIterator<[HTMLElement, HTMLElementEventMap['mousedown']]> {
  return onEvent(draggable.htmlElement, 'mousedown')
}
