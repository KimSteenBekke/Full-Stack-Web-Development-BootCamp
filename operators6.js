/* Operators:

Branching with Operators and Nested Statements:

Comparison Operators: ">=" (GREATER THAN OR EQUAL TO), "<=" (LESS THAN OR EQUAL TO)

Nested "if"-statement: "if(roll <= 5)" */


var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random ());
    return result;
};

var roll = getDieRoll (6);

// if "roll" is GREATER THAN OR EQUAL TO "3" then check if "roll" is LESSER THAN OR EQUAL TO "5" and then console.log "Great roll"

if(roll >= 3) {
    if(roll <= 5) {
        console.log("Great roll!");
    }
}

console.log("You rolled a " + roll);