import { Canvas } from './canvas/Canvas';
import { Container } from './container/Container';

function main() {
  const container = new Container();

  const canvas = new Canvas()

  canvas.height = 200;
  canvas.width = 200;

  canvas.render(container.htmlElement)


  document.body.appendChild(container.htmlElement);
}

main();
