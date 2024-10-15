class BuildingsNode {
  x: number;
  y: number;
}

export class BuildingsMap {
  vertexes: BuildingsNode[] = [];

  addVertex(node: BuildingsNode) {
    this.vertexes.push(node)
  }

  
}