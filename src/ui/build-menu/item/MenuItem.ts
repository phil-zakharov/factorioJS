import { Basement } from '../../../behavior/Basement';
import { StylesBehavior } from '../../../behavior/Styles';
import { Draggable } from '../../../core/DnD/draggable/Draggable';

export interface MenuItem {
  basement: Basement;

  styles: StylesBehavior;

  draggable: Draggable;

  get element(): HTMLButtonElement
}

// export class MenuItem {
//   #element: HTMLButtonElement;

//   basement: Basement
//   styles: StylesBehavior

//   draggable: Draggable

//   constructor(basement: Basement, styles: StylesBehavior) {
//     this.basement = basement;
//     this.styles = styles;

//     this.#element = document.createElement('button')

//     this.draggable = new Draggable(this.#element)
//   }

//   get element() {
//     return this.#element
//   }
// }
