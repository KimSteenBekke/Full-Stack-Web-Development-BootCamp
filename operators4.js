/* Operators:

Branching with Operators:

Logical Operators: "!" (NOT EQUAL TO), "||" (OR)

Comparison Operator: "==" (EQUAL TO) */ 


var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random ());
    return result;
};

var roll = getDieRoll (6);

// if "roll" is NOT EQUAL TO "1" OR "roll" is EQUAL TO "6" then console.log "Great roll"

if(!(roll == 1 || roll == 6)) {
   console.log("Great roll!");
}


console.log("You rolled a " + roll);