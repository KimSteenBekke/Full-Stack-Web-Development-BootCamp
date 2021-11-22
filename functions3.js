/* Functions: Create custom functions with parameters:

function "dieSize" defines the number of eyes on the dies through parameters on:

"var firstDie = getDieRoll1 (6);" and "var secondDie = getDieRoll2 (6);" */

var getDieRoll1 = function(dieSize) {

   // console.log(dieSize);
    return Math.ceil (dieSize * Math.random () );

    };

 var getDieRoll2 = function(dieSize) {

    // console.log(dieSize);
    return Math.ceil (dieSize * Math.random () );
  
    };

var y = "diesize 1:";
//console.log(y);
var firstDie = getDieRoll1 (6);
var yy = "eyes die 1:";
console.log(yy);
console.log(firstDie);


var z = "diesize 2:";
//console.log(z);
var secondDie = getDieRoll2 (6);
var zz = "eyes die 2:";
console.log(zz);
console.log(secondDie);

var x = "total eyes:";
console.log(x);
console.log(firstDie + secondDie);