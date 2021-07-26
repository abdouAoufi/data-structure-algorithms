// this challenge was given in Microsoft interview coding
// the problem here is to find the longest subsquance
// understanding the problem ? the longest path
// come up with concrete example ? [0,2,6,9,11,15]
// devide and conquer
// solve or implemnt
// lool back and refactore
const array = [0, 12, 8, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
function getLongestSub(arr) {
  let IDX = 3;
  let diff = 15;
  let currentNUM = array[IDX]; // 0
  const resultHolder = [];
  resultHolder.push(currentNUM);
  for (let i = 3; i < arr.length; i++) {
    if (arr[i] > currentNUM) {
      for (let j = i; j < i + 3; j++) {
        if (arr[j] > currentNUM) {
          let idx = 0;
          if (diff > arr[j] - currentNUM) {
            diff = arr[j] - currentNUM;
            currentNUM = arr[j];
            idx = j;
          }

          resultHolder.push(arr[idx]);
        }
      }
    }
  }
  console.log(resultHolder);
}

getLongestSub(array);
