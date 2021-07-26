const fs = require("fs");
const fetch = require("node-fetch");
const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 2);
  if (random === 0) resolve();
  else reject();
});

// promise
//   .then(() => console.log("Resolved"))
//   .catch(() => console.log("!!!! Rejected"));

// fs.promises
//   .readFile("./async.js", { encoding: "utf-8" })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((res) =>
//     res
//       .json()
//       .then((data) => console.log(data))
//       .catch((error) => console.log(error))
//   )
//   .catch((error) => console.log(error));

// using async await

const readFile = async () => {
  try {
    const data = await fs.promises.readFile("./text.txt", {
      encoding: "utf-8",
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// I think await execute the promise

// readFile();

const pokimon = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
  const data = await res.json();
  console.log(data);
};

// pokimon();

const result = [2, 4, 14, 7, 8].some((num) => {
   console.log(num);
   return num % 2 === 0;
});
console.log(result);
