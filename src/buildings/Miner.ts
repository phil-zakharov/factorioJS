import { Basement } from '../behavior/Basement';
import { Factory } from '../behavior/Factory';
import { Position } from '../behavior/Position';
import { Styles, StylesBehavior } from '../behavior/Styles';
import { Background } from '../consts/styles/background';
import { Color } from '../consts/styles/color';
import { Draggable } from '../core/DnD/draggable/Draggable';
import { MenuItem } from '../ui/build-menu/item/MenuItem';
import { Building } from './types';

export class Miner implements Building {
  factory = new Factory(10);

  position: Position;

  basement: Basement;

  styles: StylesBehavior;

  constructor(x: number, y: number) {
    this.basement = new Basement(40, 40);
    this.position = new Position(x, y);
    this.styles = new Styles(Background.RED, Color.BLACK);
  }

  render(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.styles.background;

    context.fillRect(
      this.position.x,
      this.position.y,
      this.basement.width,
      this.basement.height,
    );

    context.fillStyle = this.styles.color;

    this.factory.factoredItems++;

    const fontSize = 18;

    context.font = `${fontSize}px serif`;

    const x = this.position.x + this.basement.width / 2 - fontSize / 2;

    const y = this.position.y + this.basement.height / 2;

    context.fillText(String(this.factory.factoredItems), x, y);
  }
}

export class MinerMenuItem implements MenuItem {
  #element: HTMLButtonElement;

  basement: Basement;

  styles: StylesBehavior;

  draggable: Draggable;

  constructor() {
    this.basement = this.basement = new Basement(40, 40);
    this.styles = new Styles(Background.RED, Color.BLACK);

    this.#element = document.createElement('button');

    this.draggable = new Draggable(this.#element);
  }

  get element() {
    return this.#element;
  }
}
