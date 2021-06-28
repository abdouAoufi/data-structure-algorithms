var person = {
   fitstname : "John",
   lastName : "Doe",
   getFullName : function (){
      var fullName = "Fist name : " + this.fitstname + " Last name " + this.lastName ;
      return fullName ;
   }
}

var person2 = {
   fitstnamee : "Aoufi",
   lastName : "Abderahmane",
}

let logName = function(lang1 , lang2){
   console.log(this.getFullName()) // this will point to the global object 
}

var logNamee = logName.bind(person); // this is a copy from the original method which 
// points to the person object with the help of bind 

// logNamee();

logName.call(person , 'en' , 'ar'); // ! this is equivalent to the previouse one 
logName.apply(person , ['en' , 'es']) // ! this just like them 


// ? or we can do this 
var binded = function(lang1 , lang2){
   console.log(this.getFullName()) // this will point to the global object 
}.bind(person);


// console.log(person.getFullName.apply(person2));

// person.getFullName();



// function currying 
function mulitply(a,b){
   return a * b ;
}

var mult = mulitply.bind(this , 2); // ? a will be 2 for ever 
console.log(mult(4)); // this will be so 2 * 4 = 8 