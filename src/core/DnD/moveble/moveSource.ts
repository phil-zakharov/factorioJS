export function moveSource(
  [startElem, mousedownEvent]: [HTMLElement, HTMLElementEventMap['mousedown']],
  [, mousemoveEvent]: [HTMLElement, HTMLElementEventMap['mousemove']]
) {
  const { clientX: startClientX, clientY: startClientY } = mousedownEvent
  const { clientX: currentClientX, clientY: currentClientY } = mousemoveEvent

  startElem.style.transform = `translate(${currentClientX - startClientX}px, ${currentClientY - startClientY}px)`
}
