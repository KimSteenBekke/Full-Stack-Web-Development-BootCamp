/* Operators:

Branching with Operators: 

Logical Operators: ">=" (GREATER THAN OR EQUAL TO), "<=" (LESSER THAN)

Comparison Operator: "&&" (AND) */


var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random ());
    return result;
};

var roll = getDieRoll (6);

// if "roll" is GREATER THAN OR EQUAL TO "2" AND "roll" is LESSER THAN OR EQUAL TO "3", then console.log "Great Roll"

if(roll >= 2 && roll <= 3) {
 console.log("Great roll!");
}


console.log("You rolled a " + roll);


