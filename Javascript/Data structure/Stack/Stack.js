// this is LIFO and i think it's sn object 
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      const currentFirst = this.first;
      this.first = node;
      this.first.next = currentFirst;
    }
    this.size++;
  }
  pop() {
    if (!this.first) return null;
    const currentFirst = this.first;
    if (this.size === 1) {
      this.first = null;
    }
    this.first = currentFirst.next;
    this.size--;
    return currentFirst;
  }
  print() {
    let elem = this.first;
    let counter = 0;
    while (counter < this.size) {
      console.log(elem.val);
      elem = elem.next;
      counter++;
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();
