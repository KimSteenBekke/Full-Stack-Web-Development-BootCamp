/* Functions: 

Create custom functions */

var getDieRoll1 = function() {

    console.log("rolling die 1");
    return Math.ceil (6 * Math.random () );

    };

 var getDieRoll2 = function() {

    console.log("rolling die 2");
    return Math.ceil (6 * Math.random () );
  
    };


var firstDie = getDieRoll1 ();
console.log(firstDie);

var secondDie = getDieRoll2 ();
console.log(secondDie);

// var firstDie = Math.ceil (6 * Math.random () );
// var secondDie = Math.ceil (6 * Math.random () );


var x = "total";
console.log(x);
console.log(firstDie + secondDie);
