export class Canvas {
  #height = 100;

  #width = 100;


  set height(value: number) {
    this.#height = value;
  }

  set width(value: number) {
    this.#width = value;
  }

  render(htmlElement: HTMLElement) {
    const canvas = document.createElement('canvas');

    canvas.width = this.#width;

    canvas.height = this.#height;

    htmlElement.appendChild(canvas);
  }
}
