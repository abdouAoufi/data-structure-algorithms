function makePromise(value) {
  return new Promise((resolve, reject) => {
    if (value >= 5) {
      setTimeout(() => {
        resolve("Sucess Value is greater then 5");
      }, 3000);
    } else {
      reject("Error value is less than 5");
    }
  });
}

// makePromise(6)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

async function doWork() {
  try {
    const result = await makePromise(3);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
doWork();
console.log("I dont care about promise !!");
