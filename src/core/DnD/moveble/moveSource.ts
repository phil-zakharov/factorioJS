import { Cache } from '../../Cache/cache';

const STEP = 40;

const cachedRect = new Cache<HTMLElement, DOMRect>();

export function moveSource(
  [startElem, mousedownEvent]: [HTMLElement, HTMLElementEventMap['mousedown']],
  [, mousemoveEvent]: [HTMLElement, HTMLElementEventMap['mousemove']],
) {
  const rect = cachedRect.get(startElem, fallback);

  const { x: startClientX, y: startClientY } = mousedownEvent;
  const { x: currentClientX, y: currentClientY } = mousemoveEvent;

  const translateX = removeFractional(currentClientX - startClientX) - rect.x % STEP,
    translateY = removeFractional(currentClientY - startClientY) - rect.y % STEP;

  startElem.style.transform = `translate(${translateX}px, ${translateY}px)`;

}

function fallback(elem: HTMLElement) {
  return elem.getBoundingClientRect();
}

function removeFractional(value: number) {
  const fractional = value % STEP;

  if (fractional > 0) {
    return value - fractional + STEP;
  } else {
    return value - fractional;
  }
}
