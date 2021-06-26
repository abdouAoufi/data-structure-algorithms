function makeGreeting(language){
   return function (firstName , lastName){
      if(language === 'en'){
         console.log(`Hello ${firstName} ${lastName}`);
      }
      else if(language === 'es'){
         console.log(`Hola ${firstName} ${lastName}`);
      }
   }
}

var engGreeting = makeGreeting('en');
var espGreeting = makeGreeting('es');

espGreeting("Aoufi" , "Abderahmane");