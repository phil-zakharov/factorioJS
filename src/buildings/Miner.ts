import { Basement } from "../behavior/Basement";
import { Factory } from "../behavior/Factory";
import { Position } from "../behavior/Position";
import { RedStyles, StylesBehavior } from "../behavior/Styles";
import { Draggable } from '../core/DnD/draggable/Draggable';
import { MenuItem } from '../ui/build-menu/item/MenuItem';
import { Building } from "./types";

export class Miner implements Building {
  factory = new Factory(10);

  position: Position;

  basement: Basement;
  
  styles: StylesBehavior;

  constructor(x: number, y: number) {
    this.basement = new Basement(40, 40);
    this.position = new Position(x, y);
    this.styles = new RedStyles();
  }
}

export class MinerMenuItem implements MenuItem {
  #element: HTMLButtonElement;

  basement: Basement;

  styles: StylesBehavior;

  draggable: Draggable;

  constructor() {
    this.basement = this.basement = new Basement(40, 40);;
    this.styles = new RedStyles();

    this.#element = document.createElement('button');

    this.draggable = new Draggable(this.#element);
  }

  get element() {
    return this.#element;
  }
}