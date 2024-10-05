export class Canvas {
  constructor(htmlElement: HTMLElement) {
    const canvas = document.createElement('canvas');

    htmlElement.appendChild(canvas);
  }
}
