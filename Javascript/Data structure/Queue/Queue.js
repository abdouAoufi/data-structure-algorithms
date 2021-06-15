// Queue is FIFO
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enQueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
    }
    this.last = node;
    this.size ++ ;
  }
  deQueue() {}
}
