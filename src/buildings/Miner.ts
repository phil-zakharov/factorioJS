import { Background } from "../consts/styles/background";
import { Basement } from "../container/Basement";
import { Factory } from "../container/Factory";
import { Position } from "../container/Position";
import { Styles } from "../container/Styles";
import { Building } from "./types";

export class Miner implements Building {
  factory = new Factory(10);

  position: Position;

  basement: Basement;
  
  styles: Styles;

  constructor(x: number, y: number) {
    this.basement = new Basement(20, 20);
    this.position = new Position(x, y);
    this.styles = new Styles(Background.RED);
  }
}
