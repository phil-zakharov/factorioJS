import { Canvas } from './canvas/Canvas';
import { Container } from './container/Container';

function main() {
  const container = new Container();

  new Canvas(container.htmlElement)

  document.body.appendChild(container.htmlElement);
}

main();

const a = 10;