
function Persone(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;

}
// ! it's better to set functions to the prototype because they take up memory ( side effect )
Persone.prototype.getFullName =  function () {
  return this.firstName + this.lastName;
}
// when new operator executes it creates an empty object then it gonna point that function execution to that object and its prototype
// in this example the Persone function get executed and it point to a new object ! 
var abdou = new Persone("Aoufi", "Abderahmane");
// console.log(abdou);
var hicham = new Persone("Aoufi", "Hicham");
// console.log(hicham);
// hicham.getFullName();


var carFactory = {
  model : "default",
  year : "default",
  printInfo : function(){
    return this.model + " year : " +this.year ;
  }
}


var super5 = Object.create(carFactory);
super5.model = "Renault Super 5";
super5.year = "1989";
const result = super5.printInfo();
console.log(result);

// if the old browser does not support the object.Create .....

if(!Object.create){
  Object.create = function (o) {
    if(arguments.length > 1) {
      throw new Error ("We can't accept more than one paremeter !!")
    }
    function F () {}
    F.prototype = 0 ; 
    return F ();
  }
}