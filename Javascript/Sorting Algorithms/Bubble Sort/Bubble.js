// simple function show how bubble sort works
// ! Bubble sort is not the best sorting algorithms so it's less efficient !
// ? Asending => smallest to greatest
// largest value sinking to the end
// ? Big(O) => o(n^2)
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
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
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

// Old way
// function swap(arr, index1, index2) {
//   let temp = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
// }

// ES2015
// const swap2 = (arr, index1, index2) => {
//   [arr[index1], arr[index2]] = [arr[index2], arr[index1]]; // ! powerfull 
// };

// implementing bubbleSort

// function betterBubleSort(arr) {
//   let swap = true;
//   let count = 0 ;
//   for (let i = arr.length; i > 0; i--) {
//     if (swap) {
//       swap = false ;
//       count ++ ;
//       for (let j = 0; j < i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           swap = true ;
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//   }
//   return [arr , count];
// }

// const unsortedArray2 = [2, 3, 1];
// const sortedArrayBetter = betterBubleSort(unsortedArray2);
// console.log(sortedArrayBetter);


