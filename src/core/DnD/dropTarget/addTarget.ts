import { DnDElement } from '../base/DnDElement'
import { onEvent } from '../base/onEvent'

export function addTarget(
  dropTarget: DnDElement
): AsyncIterableIterator<[HTMLElement, HTMLElementEventMap['mouseup']]> {
  return onEvent(dropTarget.htmlElement, 'mouseup')
}
