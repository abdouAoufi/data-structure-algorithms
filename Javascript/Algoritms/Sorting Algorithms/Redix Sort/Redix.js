function getDegit(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDegit(arr) {
  let max = 0;
  arr.forEach((item) => {
    if (digitCount(item) > max) max = digitCount(item);
  });
  return max;
}

function radixSort(nums) {
  let mostDegitCount = mostDegit(nums);
  for (let k = 0; k < mostDegitCount; k++) {
    let digitBuckts = Array.from({ length: 10 }, () => []); // create array and each element has empty array
    for (let i = 0; i < nums.length; i++) {
      let digit = getDegit(nums[i], k);
      digitBuckts[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckts);
  }
  return nums;
}

console.log(radixSort([12, 21, 3444, 344]));
