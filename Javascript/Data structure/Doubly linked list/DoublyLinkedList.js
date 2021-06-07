class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
    }
    this.tail = node;
    this.length++;
    return this;
  }
}

const doublylinkedlist = new DoublyLinkedList();
doublylinkedlist.push(12);
console.log(doublylinkedlist.push(14));
