/* Operators:

Branching with Operators:

Comparison Operator: "!=" (NOT EQUAL TO) */ 


var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random ());
    return result;
};

var roll = getDieRoll (6);

// if "roll" is NOT EQUAL TO "1" then console.log "Great roll"

if(roll != 1) {
   console.log("Great roll!");
}

console.log("You rolled a " + roll);