const arr = [1, 2, 3, 4, 5, 6];
// the problem is to find the nuber

const result = ((arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      return arr[i];
    }
  }
  return null;
})(arr);

((arr) => {
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i], arr[i - 1]);
  }
})([1, 3, 4, 5]);

console.log(result);
