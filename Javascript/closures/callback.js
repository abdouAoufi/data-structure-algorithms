function tellmeLetter(callback) {
  let a = 1000;
  let b = 2000;
  callback(b);
}

tellmeLetter(function (a) {
  console.log("hello world !! after " + a + ' SECONDS ') ;
});
