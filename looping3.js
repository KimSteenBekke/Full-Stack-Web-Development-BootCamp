/* Looping with "for-Statement" and three expressions:

First expression: Executes once
Second expression: Executes before every pass through the loop
Final expression: Executes at the end of every through the loop */

var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random ());
    return result;
};

var roll = getDieRoll(6);

// "var i = 0" is the initializer expression defining that the initial variable "i" is EQUAL to 0" //
// "i < 10" is the condition expression defining that the loop continues as long as "i" is LESS THAN "10" //
// "i += 1" is the final expression that will increment "i" by 1 at every loop //
// Logic: Looping will pass 10 times (until First expression is GREATER THAN "10")

for(var i = 0; i < 10; i += 1) {
    console.log(roll);
    roll = getDieRoll(6)
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