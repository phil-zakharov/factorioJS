import { Basement } from "../container/Basement";
import { Factory } from "../container/Factory";
import { Position } from "../container/Position";
import { Styles } from "../container/Styles";

export interface Building {
  position: Position;
  basement: Basement;
  styles: Styles;

  factory: Factory;
}
