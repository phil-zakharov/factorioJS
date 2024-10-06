import { Building } from "../buildings/types";

import * as cls from './canvas.module.css'

export class Canvas {
  #canvas: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;

  #height = 100;

  #width = 100;

  #buildings: Building[] = [];

  constructor(htmlElement: HTMLElement) {
    this.#canvas = document.createElement("canvas");

    this.#context = this.#canvas.getContext("2d")!;

    this.#canvas.classList.add(cls.canvas)
    
    this.#canvas.width = this.#width;
    
    this.#canvas.height = this.#height;
    
    htmlElement.appendChild(this.#canvas);
  }

  set height(value: number) {
    this.#height = value;
  }

  set width(value: number) {
    this.#width = value;
  }

  build(building: Building) {
    // this.#buildings.push(building);

    this.#context.fillStyle = building.styles.background;

    this.#context.fillRect(
      building.position.x,
      building.position.y,
      building.basement.width,
      building.basement.height,
    );
  }

  addBuilding(building: Building) {
    this.#buildings.push(building)
  }

  start() {
    this.#buildings.forEach((b) => b.basement.height)
  }
}
