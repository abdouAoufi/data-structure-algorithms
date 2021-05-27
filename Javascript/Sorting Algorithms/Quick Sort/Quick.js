/* 
steps to solve a problem 
1 - understand the problem . 
2 - come up with a concrete example . 
3 - split the problem into pices . 
4 - solve or at least try . 
5 - look back and improve 
*/
/*
Suppose we have an array like this !!

1 - The problem we have an array [5 , 2 , 1 , 8 , 4 , 7 , 6 , 3]  sort it this way 
2 - Target => 5 [3 , 2 , 1 , 4 , (5) , 7 , 6 , 8]
3 - We want for each element in the array find the elements that are greater than and puth theme to right 
  - We want for each element in the array find the elements that are less than and puth theme to left
4 - let's try !!

*/

function pivot(arr, start = 0, end = arr.length) {
  function swap(array, e1, e2) {
    let temp = array[e1];
    array[e1] = array[e2];
    array[e2] = temp;
  }
  let pivot = arr[start]; // 4 
  let swapIdx = start; // 0 
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++; // 1
      swap(arr, swapIdx, i); // ? pivot = 4 , swapIdx = 2 , i = 7 , swap(arr[swapIdx], arr[i])
    }
  }
  swap(arr, swapIdx, start);
  return swapIdx; 
}


function quickSort(arr, left = 0, right = arr.length - 1) {
   if (left < right) { 
      let pivotIdx = pivot(arr, left, right); // [1 , 3 , 2 , 4] ! (4) p => 3
      quickSort(arr, left, pivotIdx - 1); // [1 , 3 , 2 ] => [1 , 2 , 3] ! (3) p=> 2 [1 , 2]  ! (2) p=> 1  [1] ! (1)
      quickSort(arr, pivotIdx + 1, right); // [5 ,7 , 6 , 8 ] => [5 , 7 , 6 , 8] ! (5) p=> 4 [7 , 6 , 8] => [6 , 7 , 8]  !(6) 
   }
   return arr;
}

const result = quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
console.log(result);