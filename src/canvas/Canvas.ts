import { Building } from '../buildings/types';

import * as cls from './canvas.module.css';

export class Canvas {
  #canvas: HTMLCanvasElement;

  #context: CanvasRenderingContext2D;

  #buildings: Building[] = [];

  constructor(width: number, height: number) {
    this.#canvas = document.createElement('canvas');

    this.#context = this.#canvas.getContext('2d')!;
    
    this.#canvas.width = width;
    this.#canvas.height = height;

    this.#canvas.classList.add(cls.canvas);
  }

  append(wrapper: HTMLElement) {
    wrapper.appendChild(this.#canvas);
  }

  get canvas() {
    return this.#canvas;
  }

  render() {
    this.#buildings.forEach((building) => {
      this.#context.fillStyle = building.styles.background;

      this.#context.fillRect(
        building.position.x,
        building.position.y,
        building.basement.width,
        building.basement.height,
      );
    });
  }

  addBuilding(building: Building) {
    this.#buildings.push(building);
  }

  start() {
    this.#buildings.forEach((b) => b.basement.height);
  }

  addGrid(step: number) {
    this.#context.fillStyle = '#919191';

    const { height, width } = this.#canvas;

    this.#context.beginPath();

    for (let h = 0; h < height; h += step) {
      this.#context.moveTo(0, h);
      this.#context.lineTo(width, h);
    }

    for (let w = 0; w < width; w += step) {
      this.#context.moveTo(w, 0);
      this.#context.lineTo(w, height);
    }

    this.#context.stroke();
  }
}
