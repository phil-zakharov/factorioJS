export class Container {
  #htmlElement;

  constructor() {
    this.#htmlElement = document.createElement('div');
  }
  
  get htmlElement() {
    return this.#htmlElement;
  }
}
