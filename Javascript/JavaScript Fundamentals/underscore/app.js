_.each({ one: 1, two: 2, three: 3, four: 4 }, handle, this);
const mapped = _.map([1, 2, 3], (item) => item * 3);
function handle(i) {
  console.log("handle", i);
}

console.log(mapped);
