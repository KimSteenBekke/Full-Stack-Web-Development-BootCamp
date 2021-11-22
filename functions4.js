/* Functions:

Create custom functions with repeat request */

var getDieRoll1 = function() {

    console.log("rolling die 1");
    return Math.ceil (6 * Math.random () );

    };

var firstDie = getDieRoll1 ();
    console.log(firstDie);

    var getDieRoll2 = function() {

        console.log("rolling die 2");
        return Math.ceil (6 * Math.random () );
    
        };
    
    var secondDie = getDieRoll2 ();
        console.log(secondDie);

var x = "total";
    console.log(x);
    console.log(firstDie + secondDie);

// Repeats string "Geeks 4 Geeks 4 five times

var y = "Made by:";
    console.log(y);

A = "Geeks 4 Geeks 4 ";
a = A.repeat(5);
    console.log(a);



// Repeats function "sayHi" five times

function runFunctionXTimes(callback, interval, repeatTimes) {
    let repeated = 0;
    const intervalTask = setInterval(doTask, interval)

    function doTask() {
        if ( repeated < repeatTimes ) {
            callback()
            repeated += 1
        } else {
            clearInterval(intervalTask)
        }
    }
} 

function sayHi() {
    console.log("Hi")
}

runFunctionXTimes(sayHi, 0, 5)