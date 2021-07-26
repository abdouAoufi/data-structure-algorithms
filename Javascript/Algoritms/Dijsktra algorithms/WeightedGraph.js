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
    const nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let smallest;
    let path = []; // to return at the end ...
    // build inital start
    for (let vertex in this.adjacencyList) {
      previous[vertex] = null;
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
    }
    // as long as theres is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
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
          if (candidat < distances[nextNeighbor]) {
            // 4 < Infinity => true
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidat; // 4
            // updating new previousS distance to neighbor
            previous[nextNeighbor] = smallest; // A
            // enqueue in queue with new priority (distance)
            nodes.enqueue(nextNeighbor, candidat);
          }
        }
      }
    }

    return path.concat(start).reverse();
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    this.bubleUp();

    return this;
  }
  bubleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent.val === element.val) return undefined;
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex; // this is so important
    }
  }
  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let left, right;
      let swap = null;
      if (leftChildIdx < length) {
        left = this.values[leftChildIdx];
        if (element.priority > left.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        right = this.values[rightChildIdx];
        if (
          (swap === null && element.priority > right.priority) ||
          (swap !== null && right.priority < left.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  print() {
    console.log(this.values);
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

let result = graph.Djikstra("A", "F");
console.log(result);
