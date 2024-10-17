import { Background } from '../consts/styles/background';

export interface StylesBehavior {
  background: Background
}

export class RedStyles implements StylesBehavior {
  background: Background;

  constructor() {
    this.background = Background.RED
  }
}