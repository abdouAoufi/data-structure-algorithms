// implementation of insertion algorithms  !

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

const arr = [5, 3, 4, 1, 2];
const result = insertionSort(arr);
console.log(result);

function betterInsertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;  
  }
  return arr;
}

const arr = [5, 3]; 
const result = betterInsertionSort(arr);
console.log(result); 
