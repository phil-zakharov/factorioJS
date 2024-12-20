import { MenuItem } from '../item/MenuItem'
import * as cls from './BuildMenuContainer.module.css'

export class BuildMenuContainer {
  #chields: MenuItem[] = []

  appendChild(child: MenuItem) {
    this.#chields.push(child)
  }

  render() {
    const htmlElement = document.createElement('div')

    htmlElement.classList.add(cls.container)

    this.#chields.forEach((child) => {
      const childPreview = child.element

      childPreview.style.backgroundColor = child.styles.background

      childPreview.style.width = '40px'
      childPreview.style.height = '40px'
      // childPreview.style.position = 'relative'

      htmlElement.appendChild(childPreview)
    })

    return htmlElement
  }
}
