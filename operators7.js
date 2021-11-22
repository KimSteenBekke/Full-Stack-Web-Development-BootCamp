/* Operators:

Branching with Operators and "if/else"-Statements:

Comparison Operators: ">=" (GREATER THAN OR EQUAL TO), "<=" (LESS THAN OR EQUAL TO)

Nested "if"-statement: "if(roll <= 5)"

"else if"-statement: "else if (roll == 1)"

"else"-statement: "That was an ok roll" */


var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random ());
    return result;
};

var roll = getDieRoll (6);

// if "roll" is GREATER THAN OR EQUAL TO "3" then check if "roll" is LESSER THAN OR EQUAL TO "5" and then console.log "Great roll!"

if(roll >= 3 && roll <= 5) {
    
    console.log("Great roll!");

}

// else if "roll" EQUALS "1" then console.log "That was a terrible roll!"

else if (roll == 1) {
    console.log("That was a terrible roll!");

}

// else then console.log "That was an ok roll"

else {
    console.log("That was an ok roll");

}


console.log("You rolled a " + roll);