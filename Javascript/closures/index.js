// ! Undersating closures
// this is possible because of closures ! 
function greeting(whattosay) {
  return function (name) {
    console.log(whattosay + " " + name); // whattosay still even though the stack of function went away ....
  };
}

greeting("Hello ")("Abdou");

function globale() {
  return function (name) {
    console.log(name);
  }
}
// ? you can do this 
var result = globale();
result("Abdou");