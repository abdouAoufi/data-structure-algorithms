function search(searchNumber) {
  let size = 100;
  let data = [];
  for (let i = 0; i < size; i++) {
    data.push(i);
  }
  if (searchNumber > data[data.length - 1]) {
    console.log("OUT OF BOUND");
    return;
  }
  binarySearch(data , searchNumber);
  function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    while (arr[middle] !== val && right >= left) {
      if (arr[middle] > val) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
      middle = Math.floor((left + right) / 2);
    }
    if (arr[middle] !== val) {
      return -1;
    }
    console.log("Found item ");
    return middle;
  }

  console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 6));
  //                       [1, 2, 3, 4, 5, 6 , 7]
}

search(50);
