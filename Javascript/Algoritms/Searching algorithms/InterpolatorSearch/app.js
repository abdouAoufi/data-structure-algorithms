let data = [];
function buildArray(callback) {
  for (let i = 0; i < 100; i++) {
    data.push(i + 1);
  }
  callback(data);
}

function InterPollatorSearch(arr, val) {
  let low = 0;
  let high = arr.length - 1;
  let middle = 0;
  let numOfTry = 0;
  let found = false;
  while (!found) {
    if (low >= high) {
      break;
    }
    middle = Math.floor(
      low + ((high - low) / (arr[high] - arr[low])) * (val - arr[low])
    );
    console.log(middle);
    numOfTry++;
    if (arr[middle] === val) {
      console.log("Found the item after ", numOfTry, " times.");
      found = true;
    }
    if (arr[middle] > val) {
      high = middle - 1;
    } else if (arr[middle] < val) {
      low = middle + 1;
    }
  }
  if (arr[middle] !== val) {
    return -1;
  }
  return middle;
}
buildArray((data) => {
  InterPollatorSearch(data, 10);
});
