import { Miner } from "./buildings/Miner";
import { Canvas } from "./canvas/Canvas";
import { Container } from "./container/Container";

function main() {
  const button = document.createElement("button");

  button.textContent = "Build Miner";

  button.onclick = () => {
    buildMiner(canvas);
  };

  document.body.appendChild(button);

  const container = new Container();

  const canvas = new Canvas(container.htmlElement);

  canvas.height = document.body.clientHeight;
  canvas.width = document.body.clientWidth;

  document.body.appendChild(container.htmlElement);
}

main();

function buildMiner(canvas: Canvas) {
  const miner = new Miner(20, 40);

  canvas.build(miner);
}
