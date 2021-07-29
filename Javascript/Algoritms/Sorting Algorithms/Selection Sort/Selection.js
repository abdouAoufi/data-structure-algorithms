// Selection Sorting is based on select the minumum and put it in the front of an array !
// ? this is naive implementation made by me
// the time complexity of this algotithms is o(n^2) ! bad
function selectionSort(arr) {
  let currentIteration = 0;
  let minimum = Infinity;
  while (currentIteration < arr.length) {
    for (let i = currentIteration; i < arr.length; i++) {
      if (arr[i] < minimum) {
        minimum = arr[i];
      }
    }
    let indexOfMinimum = arr.lastIndexOf(minimum);
    [arr[indexOfMinimum], arr[currentIteration]] = [
      arr[currentIteration],
      arr[indexOfMinimum],
    ];
    minimum = Infinity;
    currentIteration++;
  }
  return arr;
}

// let result = selectionSort([1, 3, 2, 0.5]);
// console.log(result);

function betterSelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i; // lowest = 0 ;
    for (let j = i + 1; j < arr.length; j++) { // j = 1 => arr.length
      if (arr[j] < arr[lowest]) { // 1 < 3 true 
        lowest = j; // lowest = 1;
      }
    }
    if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
}

const result = betterSelectionSort([3, 1 , 1, 2, 2 , 2 , 0.5]);
console.log(result);
