import { DnDElement } from '../base/DnDElement'
import { onEvent } from '../base/onEvent'

export function addTarget(dropTarget: DnDElement) {
  return onEvent(dropTarget.htmlElement, 'mouseup', () => 'mouseup')
}
