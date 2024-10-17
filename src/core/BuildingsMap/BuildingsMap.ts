class BuildingsNode {
  x: number | undefined;
  y: number | undefined;
}

export class BuildingsMap {
  vertexes: BuildingsNode[] = [];

  addVertex(node: BuildingsNode) {
    this.vertexes.push(node)
  }

  
}