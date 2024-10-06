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
import { Draggable } from './core/DnD/draggable/Draggable'
import { handleMove } from './core/DnD/moveble/move'
import { Movable } from './core/DnD/moveble/Movable'
import { once } from './iterables/once'
import { doWhile } from './iterables/while'
import { onEvent } from './core/DnD/base/onEvent'
import { throttle } from './core/utils/throttle'

function main() {
  const button = document.createElement('button')

  button.textContent = 'Build Miner'

  button.onclick = () => {
    buildMiner(canvas)
  }

  document.body.appendChild(button)

  const container = new Container()

  const canvas = new Canvas(container.htmlElement)

  canvas.height = document.body.clientHeight
  canvas.width = document.body.clientWidth

  document.body.appendChild(container.htmlElement)

  const buildMenuContainer = new BuildMenuContainer()

  const item = getItem(buildMenuContainer)

  start(item.draggable)
}

main()

function getItem(buildMenuContainer: BuildMenuContainer) {
  const item = new BuildMenuItem(
    new Basement(40, 40),
    new Styles(Background.RED)
  )

  buildMenuContainer.appendChild(item)

  document.body.appendChild(buildMenuContainer.render())
  return item
}

function buildMiner(canvas: Canvas) {
  const miner = new Miner(20, 40)

  canvas.build(miner)
}

async function start(element: Draggable) {
  console.log('1')

  const result = await once(addSource(element)).next()

  console.log('result', result)

  console.log('2')

  const movable = new Movable(document.body)

  const move = (chunk: unknown) => {
    console.log('chunk', chunk)
  }
  
  const throttledMove = throttle(move, 20)

  for await (const chunk of doWhile(
    handleMove(movable),
    onEvent(document.body, 'mouseup', () => 'mousemove')
  )) {
    throttledMove(chunk)
  }

  console.log('3')
}
