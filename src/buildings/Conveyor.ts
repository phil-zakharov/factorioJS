import { Basement } from '../behavior/Basement';
import { Factory } from '../behavior/Factory';
import { Position } from '../behavior/Position';
import { Styles, StylesBehavior } from '../behavior/Styles';
import { Background } from '../consts/styles/background';
import { Color } from '../consts/styles/color';
import { Draggable } from '../core/DnD/draggable/Draggable';
import { MenuItem } from '../ui/build-menu/item/MenuItem';
import { Building } from './types';

export class Conveyor implements Building {
  factory = new Factory(10);

  position: Position;

  basement: Basement;

  styles: StylesBehavior;

  constructor(x: number, y: number) {
    this.basement = new Basement(40, 40);
    this.position = new Position(x, y);
    this.styles = new Styles(Background.BLACK, Color.BLACK)
  }

  render(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.styles.background;

    context.fillRect(
      this.position.x,
      this.position.y,
      this.basement.width,
      this.basement.height,
    );
  }
}

export class ConveyorMenuItem implements MenuItem {
  #element: HTMLButtonElement;

  basement: Basement;

  styles: StylesBehavior;

  draggable: Draggable;

  constructor() {
    this.basement = this.basement = new Basement(40, 40);
    this.styles = new Styles(Background.BLACK, Color.BLACK);

    this.#element = document.createElement('button');

    this.draggable = new Draggable(this.#element);
  }

  get element() {
    return this.#element;
  }

  getBuilding(x: number, y: number) {
    return new Conveyor(x, y)
  }
}