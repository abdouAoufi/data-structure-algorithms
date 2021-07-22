class MaxBinaryHeap {
  constructor() {
    this.values = [10];
  }
  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1; // 2 - 1 => 1 
    const element = this.values[index]; // 10
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2); // 0
      let parent = this.values[parentIndex]; // 10 
      if (parent === element) return undefined;
      if (parent > element) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex; // this is so important
    }
    return this;
  }
  remove() {
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
        if (element < left) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        right = this.values[rightChildIdx];
        if (
          (swap === null && element < right) ||
          (swap !== null && right > left)
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

const bin = new MaxBinaryHeap();
bin.insert(30);
bin.insert(20);
bin.insert(100);
bin.insert(150);
bin.insert(40);
bin.remove();
bin.print();
