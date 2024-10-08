import './styles/reset.css'

import { Miner } from './buildings/Miner'
import { Canvas } from './canvas/Canvas'
import { Container } from './container/Container'
import { BuildMenuContainer } from './ui/build-menu/container/BuildMenuContainer'
import { BuildMenuItem } from './ui/build-menu/item/BuildMenuItem'
import { Basement } from './container/Basement'
import { Styles } from './container/Styles'
import { Background } from './consts/styles/background'
import { addSource } from './core/DnD/draggable/addSource'
import { handleMove } from './core/DnD/moveble/move'
import { Movable } from './core/DnD/moveble/Movable'
import { once } from './iterables/once'
import { doWhile } from './iterables/while'
import { onEvent } from './core/DnD/base/onEvent'
import { throttle } from './core/utils/throttle'
import { moveSource } from './core/DnD/moveble/moveSource'

async function main() {
  const container = new Container()

  const canvas = new Canvas(container.htmlElement)

  canvas.height = document.body.clientHeight
  canvas.width = document.body.clientWidth

  document.body.appendChild(container.htmlElement)

  canvas.render()

  const buildMenuContainer = new BuildMenuContainer()

  const item = getItem(buildMenuContainer)

  await buildMiner(item, canvas)
}

main()

async function buildMiner(item: BuildMenuItem, canvas: Canvas) {
  const { value } = await once(addSource(item.draggable)).next()

  const movable = new Movable(document.body)

  const throttledMove = throttle(moveSource, 20)

  for await (const chunk of doWhile(
    handleMove(movable),
    onEvent(document.body, 'mouseup')
  )) {
    throttledMove(value, chunk)
  }

  const { x, y } = item.element.getBoundingClientRect()

  const miner = new Miner(x, y)

  canvas.build(miner)

  item.element.style.removeProperty('transform')

  buildMiner(item, canvas)
}

function getItem(buildMenuContainer: BuildMenuContainer) {
  const item = new BuildMenuItem(
    new Basement(40, 40),
    new Styles(Background.RED)
  )

  buildMenuContainer.appendChild(item)

  document.body.appendChild(buildMenuContainer.render())
  
  return item
}
