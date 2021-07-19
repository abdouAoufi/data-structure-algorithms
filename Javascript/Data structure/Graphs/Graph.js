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
  // ? this is recursive version .....
  depthFirstRecursive(start) {
    const result = [];
    const vistied = {};
    const self = this;
    (function check(vertex) {
      if (!vertex) {
        return null;
      }
      vistied[vertex] = true;
      result.push(vertex);
      self.adjacencyList[vertex].forEach((neighbor) => {
        if (!vistied[neighbor]) {
          return check(neighbor);
        }
      });
    })(start);
    return result;
  }

  depthFirstIterative(start) {
    const visited = {};
    const result = [];
    const stack = [start];
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop(); // take the last
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breathFirst(start) {
    const queue = [];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  print() {
    console.log("List => ", this.adjacencyList);
  }
}

let graph = new Graph();
// ADDING NODES ....
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
// ADDING EDGES ....
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
// graph.print();

var result = graph.depthFirstIterative("A");
console.log(result);
