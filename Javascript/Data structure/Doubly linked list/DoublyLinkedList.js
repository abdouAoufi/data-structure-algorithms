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
  pop() {
    if (this.length === 0) return undefined;
    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    this.length--;
    return currentTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = oldHead.next;
    this.head.previous = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  unshif(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.head.val;
    if (index === this.length - 1) return this.tail.val;
    let count = 0;
    let pointer;
    const half = Math.floor(this.length / 2);
    if (index <= half) {
      pointer = this.head;
      while (index != count) {
        pointer = pointer.next;
        count++;
      }
    } else {
      count = this.length - 1;
      pointer = this.tail;
      while (index !== count) {
        pointer = pointer.previous; // ? principle rule is to reassign the pointer
        count--;
      }
    }
    return pointer.val;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const doublylinkedlist = new DoublyLinkedList();
doublylinkedlist.push(12); // 0
doublylinkedlist.push(14); // 1
doublylinkedlist.push(16); // 2
doublylinkedlist.push(18); // 3
doublylinkedlist.push(20); // 4
doublylinkedlist.push(22); // 5
doublylinkedlist.push(24); // 6
doublylinkedlist.push(26); // 7
console.log(doublylinkedlist.get(3));
