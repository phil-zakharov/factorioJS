export class DnDElement {
  #htmlElement: HTMLElement;

  constructor(htmlElement: HTMLElement) {
    this.#htmlElement = htmlElement;
  }

  public get htmlElement(): HTMLElement {
    return this.#htmlElement;
  }
  public set htmlElement(value: HTMLElement) {
    this.#htmlElement = value;
  }
}