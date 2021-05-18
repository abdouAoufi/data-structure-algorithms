// simple function show how bubble sort works
function bubbleSort(arr) {
  let right = 0;
  let left = 0;
  let swap = false;
  do {
    swap = false;
    for (let i = 1; i <= arr.length - 1; i++) {
      right = arr[i];
      left = arr[i - 1];
      if (right < left) {
        // we have to swap here !!
        arr[i] = left;
        arr[i - 1] = right;
        // this will assure the next loop !!
        swap = true;
      }
    }
  } while (swap);
  return arr;
}

const unsortedArray = [1, 3, 2, 6, 4, 12, 11, 10, 9, 7];
const sortedArray = bubbleSort(unsortedArray); // before => [ 1, 3, 2, 6, 4, 12, 11, 10, 9, 7 ] 
console.log(sortedArray); // result => [ 1, 2, 3, 4, 6, 7, 9, 10, 11, 12 ]
 