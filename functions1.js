/* Functions: 

Simulate a roll of the dice in different ways */

// Returns 3 and 5 and adds them:

var firstDie = 5;
var secondDie = 3;
console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);


// Randomly picks an integer between 1 and 6:

var value = 6 * Math.random();
var roll = Math.ceil (value);
console.log(roll);

// Same result as above, but in one line of code instead of three:

console.log(Math.ceil (6 * Math.random () ));

// With two dies. Randomly picks an integer between 1 and 6 for each die and adds them

var firstDie = Math.ceil (6 * Math.random () );
var secondDie = Math.ceil (6 * Math.random () );
console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);

