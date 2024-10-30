import { Background } from '../consts/styles/background';
import { Color } from '../consts/styles/color';

export interface StylesBehavior {
  background: Background

  color: Color;
}

export class Styles implements StylesBehavior {
  background: Background;

  color: Color;

  constructor(background: Background, color: Color) {
    this.background = background;
    this.color = color;
  }
}