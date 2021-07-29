const arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
const calculateSum = (arr) => {
  let sum = 0;
  arr.forEach((num) => {
    sum = sum + num;
  });
  return sum;
};

const hourGlass = (arr) => {
  let rslt = [];
  let sum = [];
  let start = 0;
  while (start < 4) {
    let center = 0;
    for (let i = 0; i < start + 3; i++) {
      // console.log(start);
      for (let j = start; j < start + 3; j++) {
        if ((i + 1) % 2 === 0) {
          if (j > start && j < start + 2) {
            center = arr[i][j];
          }
        } else {
          rslt.push(arr[i][j]);
        }
      }
    }
    rslt.push(center);
    sum.push(calculateSum(rslt));
    rslt = [];
    start++;
  }
  return  (sum) ;
};

function betterBubleSort(arr) {
  let swap = true;
  let count = 0;
  for (let i = arr.length; i > 0; i--) {
    if (swap) {
      swap = false;
      count++;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          swap = true;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }
  return arr;
}

const result = hourGlass(arr);
console.log(result);
