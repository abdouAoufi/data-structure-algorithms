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

  set(index, newVal) {
    const result = this.get(index);
    if (result) {
      result.val = newVal;
      return true;
    } else {
      return false;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
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
    return pointer;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) {
      this.unshif(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    const nodeToInsert = new Node(val);
    const nodeBeforeTarget = this.get(index - 1);
    const oldNext = nodeBeforeTarget.next;
    nodeBeforeTarget.next = nodeToInsert;
    nodeToInsert.previous = nodeBeforeTarget;
    nodeToInsert.next = oldNext;
    oldNext.previous = nodeBeforeTarget;
    this.length++;
    return true;
  }
  remove(index){
     if(index < 0 || index >= this.length) return undefined ;
     if(index === 0) return this.shift() ;
     if (index === this.length - 1) return this.pop();
     const nodeBeforeTarget = this.get(index - 1 );
     const nodeTobeRemoved = nodeBeforeTarget.next ;
     const nextNodeTarget = nodeTobeRemoved.next ;
     nodeTobeRemoved.next = null ;
     nodeTobeRemoved.previous = null ;
     nextNodeTarget.previous = nodeBeforeTarget ;
     nodeBeforeTarget.next = nextNodeTarget ;
     this.length -- ; 
     return nodeTobeRemoved ;
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
console.log(doublylinkedlist.remove(0).val);
doublylinkedlist.print();
