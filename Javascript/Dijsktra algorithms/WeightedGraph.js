class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Djikstra(start, finish) {
    const nodes = new priorityQueue();
    let distances = {};
    let previous = {};
    let smallest;
    let path = []; // to return at the end ...
    // build inital start
    for (let vertex in this.adjacencyList) {
      previous[vertex] = null;
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueu(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueu(vertex, Infinity);
      }
    }
    // as long as theres is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeu().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        // smallest = A
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboors for each vertex
          let nextNode = this.adjacencyList[smallest][neighbor]; // [A,B]
          // calculate new distances .to neighbooring node ....
          let candidat = distances[smallest] + nextNode.weight; // 4
          let nextNeighbor = nextNode.node;
          if (candidat < distances[nextNeighbor]) {             // 4 < Infinity => true
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidat; // 4
            // updating new previousS distance to neighbor
            previous[nextNeighbor] = smallest; // A
            // enqueue in queue with new priority (distance)
            nodes.enqueu(nextNeighbor, candidat);
          }
        }
      }
    }
    
    return (path.concat(start).reverse())
  }
}

class priorityQueue {
  constructor() {
    this.values = [];
  }
  enqueu(val, priority) {
    this.values.push({ val, priority }); // push to the last element
    this.sort();
  }

  dequeu() {
    return this.values.shift(); // give me the first element
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority); // sorting based on the priority
  }
}

var graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "F", 1);
graph.addEdge("D", "E", 3);
graph.addEdge("F", "E", 1);

let result = graph.Djikstra("A", "E");
console.log(result);
