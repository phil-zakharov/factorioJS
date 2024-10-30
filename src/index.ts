import './styles/reset.css';

import { Miner, MinerMenuItem } from './buildings/Miner';
import { Canvas } from './canvas/Canvas';
import { Container } from './behavior/Container';
import { BuildMenuContainer } from './ui/build-menu/container/BuildMenuContainer';
import { MenuItem } from './ui/build-menu/item/MenuItem';
import { addSource } from './core/DnD/draggable/addSource';
import { handleMove } from './core/DnD/moveble/move';
import { Movable } from './core/DnD/moveble/Movable';
import { once } from './iterables/once';
import { doWhile } from './iterables/while';
import { onEvent } from './core/DnD/base/onEvent';
import { throttle } from './core/utils/throttle';
import { moveSource } from './core/DnD/moveble/moveSource';
import { rendering } from './canvas/rendering';
import { ConveyorMenuItem } from './buildings/Conveyor';
import { repeat } from './iterables/repeat';

async function main() {
  const container = new Container();

  const canvas = new Canvas(1000, 1000);

  document.body.appendChild(container.htmlElement);

  canvas.append(container.htmlElement);

  const buildMenuContainer = new BuildMenuContainer();

  handleBuild(new MinerMenuItem(), buildMenuContainer, canvas);

  handleBuild(new ConveyorMenuItem(), buildMenuContainer, canvas)

  addGridBtn(canvas);

  rendering(() => canvas.render())
}

main();

function handleBuild(menuItem: MenuItem, buildMenuContainer: BuildMenuContainer, canvas: Canvas) {
  const minerMenuItem = getItem(menuItem, buildMenuContainer);

  repeat(() => handleBuildMenuItem(minerMenuItem, canvas));
}

function addGridBtn(canvas: Canvas) {
  const btn = document.createElement('button');

  btn.textContent = 'grid';
  btn.style.position = 'fixed';
  btn.style.bottom = '0px';
  btn.style.left = '0px';

  btn.onclick = () => canvas.addGrid(40);

  document.body.appendChild(btn);
}

async function handleBuildMenuItem(item: MenuItem, canvas: Canvas) {
  const { value } = await once(addSource(item.draggable)).next();

  const movable = new Movable(document.body);

  const throttledMove = throttle(moveSource, 20);

  for await (const chunk of doWhile(
    handleMove(movable),
    onEvent(document.body, 'mouseup'),
  )) {
    throttledMove(value, chunk);
  }

  const { x, y } = item.element.getBoundingClientRect();

  const miner = item.getBuilding(x, y);

  canvas.addBuilding(miner);

  item.element.style.removeProperty('transform');
}

function getItem(menuItem: MenuItem, buildMenuContainer: BuildMenuContainer) {
  buildMenuContainer.appendChild(menuItem);

  document.body.appendChild(buildMenuContainer.render());

  return menuItem;
}
