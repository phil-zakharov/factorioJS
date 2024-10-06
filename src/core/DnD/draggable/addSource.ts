import { DnDElement } from '../base/DnDElement'
import { onEvent } from '../base/onEvent'

export function addSource(
  draggable: DnDElement
): AsyncIterableIterator<string> {
  return onEvent(draggable.htmlElement, 'mousedown', () => 'mousedown')
}
