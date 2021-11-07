//! while loops
/*
    A while loop executes a statement inside of a code block provided the while condition continues to evaluate to true.
    The condition is evaluated before executing the statement.
*/

let randInt = 32;

while (randInt > 0) {
    randInt = randInt - 1
    console.log(randInt);
}

//! remember to avoid infinite loops

let iterable = 0;
while (iterable <= 100) {
    iterable++
    if (iterable % 2 == 0) {                            //! this loop does not log iterable of 0
        console.log(`${iterable} is divisble by 2`);
    }
};

iterable = 0;
while (iterable <= 100) {
    if (iterable % 2 == 0) {                            //! this loop DOES log iterable of 0 because iterable++ is after the log
        console.log(`${iterable} is divisble by 2`);
    }
    iterable++
};