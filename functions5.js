/* Functions:

Local variables are declared inside a function e.g. "var result"

Global variables are any variables not declared inside a function e.g. "var showResult", "var firstDie" and " var secondDie" */


var getDieRoll = function(dieSize) {
    var result = Math.ceil (dieSize * Math.random () );
    return result;
   };

 var showResult = function (){
     console.log(firstDie);
     console.log(secondDie);
     console.log(firstDie+secondDie);
 }

var firstDie = getDieRoll (6);
var secondDie = getDieRoll (6);
showResult();
