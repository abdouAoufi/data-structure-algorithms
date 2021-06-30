class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) {
      return false;
    }
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    if (!found) return false;
    return true;
  }
  BFStraverse() {
    let node = this.root;
    var queue = [];
    var store = [];
    queue.push(node);
    while (queue.length > 0) {
      node = queue.shift();
      store.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return store;
  }
  DFSPreOrder() {
    let store = [];
    let current = this.root;
    function traverse(node) {
      store.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return store;
  }

  BFSPostOrder() {
    let store = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      store.push(node.value);
    }
    traverse(current);
    return store;
  }
  BFSInOrder() {
    let store = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      store.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return store;
  }
}

//      10
//   5   |    13
// 2 | 7  | 11 | 16

var tree = new BinarySearchTree();
tree.insert("html");
tree.insert("head");
tree.insert("title");
tree.insert("body");
var result = tree.DFSPreOrder();
console.log(result);
