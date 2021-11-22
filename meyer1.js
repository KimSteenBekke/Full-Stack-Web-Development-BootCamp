/* Operators:

Branching with Operators and "if/else" Statements */


var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random ());
    return result;
};

var roll = getDieRoll (6);

// if "roll" is EQUAL TO "6" then console.log "Du slog en sekser!"

if(roll == 6) {
    
    console.log("Du slog en sekser!");

}

// else then console.log "Du skal slå sekser!"

else {
    console.log("Du skal slå en sekser!");

}


console.log("You rolled a " + roll);