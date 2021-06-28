// Queue is FIFO
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enQueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    return ++this.size;
  }
  deQueue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
  print(){
   let elem = this.first;
   let counter = 0;
   while (counter < this.size) {
     console.log(elem.val);
     elem = elem.next;
     counter++;
   }
  }
}


let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.enQueue(4);
console.log(q.deQueue());
// q.print();
