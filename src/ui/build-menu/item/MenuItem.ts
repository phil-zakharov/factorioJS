import { Basement } from '../../../behavior/Basement';
import { StylesBehavior } from '../../../behavior/Styles';
import { Building } from '../../../buildings/types';
import { Draggable } from '../../../core/DnD/draggable/Draggable';

export interface MenuItem {
  basement: Basement;

  styles: StylesBehavior;

  draggable: Draggable;

  get element(): HTMLButtonElement

  getBuilding(x: number, y: number): Building
}
