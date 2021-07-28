sum([1, 2, 3, 5, 4], 9);

function sum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        console.log("We found it !!");
        console.log(arr[i], arr[j]);
      }
    }
  }
}
