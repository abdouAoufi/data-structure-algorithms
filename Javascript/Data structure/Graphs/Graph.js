class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!vertex) {
      throw "Please enter valid key ";
    }
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    const v1 = this.adjacencyList[vertex1];
    const v2 = this.adjacencyList[vertex2];
    v1.push(vertex2);
    v2.push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    // we have side effect here !!
    let v1 = this.adjacencyList[vertex1];
    let v2 = this.adjacencyList[vertex2];
    v1 = v1.filter((vertex) => vertex !== vertex2);
    v2 = v2.filter((vertex) => vertex !== vertex1);
    this.adjacencyList[vertex1] = v1;
    this.adjacencyList[vertex2] = v2;
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => {
      this.removeEdge(vertex, v);
    });
    delete this.adjacencyList[vertex];
  }

  print() {
    console.log("List => ", this.adjacencyList);
  }
}

let graph = new Graph();
graph.addVertex("Abdou");
graph.addVertex("Sara");
graph.addVertex("Brahim");
graph.print();
graph.addEdge("Abdou", "Sara");
graph.addEdge("Abdou", "Brahim");
graph.print();
graph.removeVertex("Abdou");
graph.print();
