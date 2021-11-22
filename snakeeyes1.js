/* Operators:

Branching with Operators and "if/else"-Statements:

Comparison Operator: "==" (EQUAL TO) */ 


var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random ());
    return result;
};

var roll = getDieRoll (6);

// if "roll" is EQUAL TO "2" then console.log "Snake Eyes!"

if(roll == 2) {
   console.log("Snake Eyes!");
}

// else then console.log "Loooooser!" 

else(console.log("Loooooser!"))

console.log(roll);