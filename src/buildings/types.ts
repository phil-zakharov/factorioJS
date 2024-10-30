import { Basement } from '../behavior/Basement';
import { Factory } from '../behavior/Factory';
import { Position } from '../behavior/Position';
import { StylesBehavior } from '../behavior/Styles';

export interface Building {
  position: Position;

  basement: Basement;

  styles: StylesBehavior;

  factory: Factory;

  render(context: CanvasRenderingContext2D): void
}
