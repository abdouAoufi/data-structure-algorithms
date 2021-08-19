function hash(str, length) {
  str = str || " ";
  let total = 0;
  for (let i = 0; i < Math.min(str.length, 100); i++) {
    let char = str[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * 31 + value) % length;
  }
  console.log("Total => ", total);
}

let list = [[]];
list[0].push([1, "Abodu"])
console.log(list[0][0][1]);
