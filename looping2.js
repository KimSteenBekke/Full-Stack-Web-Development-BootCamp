/* Looping with "do and while-Statements" */

var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random ());
    return result;
};

var roll = getDieRoll (6);

// "do" will always execute "getDieRoll(6) once and then continue with "while(roll > 4)

do{
    roll = getDieRoll(6);
    console.log(roll);
}while(roll > 4)

// "while(roll < 4)" will skip results LESS THAN 4 and continue "getDieRoll(6)"

while(roll < 4) {
    roll = getDieRoll(6);
}

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