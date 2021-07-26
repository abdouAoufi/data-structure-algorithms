// ! this is the power of functionnal programming

function mapForEach(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i])); // push the result of call this function
  }
  return newArr;
}

var arr3 = mapForEach([1, 2, 3], function (item) {
  return item * 4;
});

const limiter = function (limit, item) {
  return item > limit;
};

var arr4 = mapForEach([1, 2, 3], less(1)); // set permanent par to the limiter

function less(lim) {
  var rslt = limiter.bind(this, lim);
  return rslt;
}

// another solution

var checkPastLimitSimplified = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var arr5 = mapForEach([1, 2, 3], checkPastLimitSimplified(1)); // set permanent par to the limiter
console.log(arr5);

