// ! function overloading in JS
function salam(firstName, lastName, language) {
  language = language || "ar";
  if (language === "ar") {
    console.log("Salam " + firstName + " " + lastName);
  } else if (language === "en") {
    console.log("Hello " + firstName + " " + lastName);
  } else {
    console.log("Hola " + firstName + " " + lastName);
  }
}

// salam("Aoufi ", "abderhamne " , "es");

function salamInArabic(firstName, lastName) {
  salam(arguments[0], arguments[1]);
}
// ? this is a way to handle function overloading in JS
function salamInEnglish(firstName, lastName) {
  salam(arguments[0], arguments[1], "en");
}
function salamInEspagnole(firstName, lastName) {
  salam(arguments[0], arguments[1], "es");
}

salamInEnglish("Aoufi" , "Abderahmnae");
// ! function statement
function greet(name) {
  name = name || "No name !!";
  console.log("Hello " + name);
}
// greet();
// ! function expression
const greetFunc = function (name) {
  console.log("Hello " + name);
};
