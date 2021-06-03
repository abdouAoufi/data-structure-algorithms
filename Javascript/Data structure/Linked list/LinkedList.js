/* 
var first = new Node("Hi");
first.next = new Node("How");
first.next.next = new Node("Are");
first.next.next.next = new Node("You ?");
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  toString() {
    return this.val;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current.toString;
  }

  shift() {
    if (this.isEmpty()) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return currentHead.toString();
  }

  unshift(val) {
    var newHead = new Node(val);
    if (this.isEmpty()) {
      newHead.next = null;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
    }
    this.head = newHead;
    this.length++;
    return this.head.toString();
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    if (index == 0) return this.head;
    if (index == this.length - 1) return this.tail;
    var count = 1;
    var targetNode = this.head.next;
    while (count < index) {
      targetNode = targetNode.next;
      count++;
    }
    return targetNode;
  }

  set(idx, val) {
    if (idx >= this.length || idx < 0) return false;
    var retrived = this.get(idx);
    retrived.val = val;
    return true;
  }

  inserTo(index, val) {
    if (index > this.length || index < 0) return false;
    if (index == 0) return !!this.unshift(val);
    if (index == this.length) !!this.push(val);
    var nodeToInsert = new Node(val);
    var prevNode = this.get(index - 1);
    var prevNext = prevNode.next;
    prevNode.next = nodeToInsert;
    nodeToInsert.next = prevNext;
    this.length++;
    return true;
  }

  remove(index) {
    if (index > this.length || index < 0) {
      return null;
    }
    if (index == this.length || index == this.length - 1) {
      return this.pop();
    }
    if (index == 0) {
      return this.shift();
    }
    var prevNode = this.get(index - 1);
    var nextPrev = prevNode.next;
    prevNode.next = nextPrev.next;
    this.length--;
    return nextPrev;
  }
  isEmpty() {
    return true ? !this.head : false;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var prev = null;
    var next;
    for (let i = 0; i < this.length; i++) {
      next = node.next ; 
      node.next = prev ;
      prev = node ;
      node = next;
    }
    return this;
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
  getLastItem() {
    return this.tail.val;
  }
}

var linkedList = new SinglyLinkedList();
linkedList.push("Hanan");
linkedList.push("Sara");
linkedList.push("Yasmine");
linkedList.push("Abderahmane");
linkedList.push("Ammar");
linkedList.push("Tarek");
var deletedItem = linkedList.remove(3);
linkedList.reverse();
linkedList.print();
