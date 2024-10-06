import { Basement } from '../../../container/Basement'
import { Styles } from '../../../container/Styles'
import { Draggable } from '../../../core/DnD/draggable/Draggable';

export class BuildMenuItem {
  #element: HTMLButtonElement;

  basement: Basement
  styles: Styles

  draggable: Draggable

  constructor(basement: Basement, styles: Styles) {
    this.basement = basement;
    this.styles = styles;

    this.#element = document.createElement('button')

    this.draggable = new Draggable(this.#element)
  }

  get element() {
    return this.#element
  }
}