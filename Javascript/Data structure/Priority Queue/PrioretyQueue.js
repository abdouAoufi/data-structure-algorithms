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
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent.val === element.val) return undefined;
      if (element.priority <= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex; // this is so important
    }
    return this;
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
        if (element.priority < left.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        right = this.values[rightChildIdx];
        if (
          (swap === null && element.priority < right.priority) ||
          (swap !== null && right.priority > left.priority)
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

const pq = new PriorityQueue();
pq.enqueue("html" , 1);
pq.enqueue("css" , 2);
pq.enqueue("javascript" , 10);
pq.enqueue("react" , 5);
pq.enqueue("node js" , 7);
pq.enqueue("mongoDB" , 3);
pq.enqueue("mySQL" , 4);
// pq.enqueue(1 , 1);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
// pq.print();
