class MaxBinaryHeap {
  constructor() {
    this.values = [39,41,18,27,12,33];
  }
  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
       let parentIndex = Math.floor((index - 1) / 2);
       let parent = this.values[parentIndex] ;
       if(parent === element) return undefined;
       if(parent > element) break ;
       this.values[parentIndex] = element;
       this.values[index] = parent;
       index = parentIndex; // this is so important 
    }
    return this;
  }
}


const bin = new MaxBinaryHeap();

console.log(bin.insert(55));
console.log(bin.insert(55));