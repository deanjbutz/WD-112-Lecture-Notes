//! loops
/*
    Loops allow us to go over a block of information or code in a determined amount of cycles. It's important to note that it is possible for us to write code without declaring an endpoint.
    Loops help us repeat a process without rewriting a lot of code.
*/

//! for loops
/*
    We have to setup our loops in a way that we can:
    1) see where we are in a loop,
    2) consider what sort of condition we want to run it against, and
    3) note when we are done with that condition and move on to the next iteration.

    We need to:
    1. Create and index
    2. Run a condition
    3. Change to the indexing variable (execution of the condition)
*/

//? let's count to 10!

for (let i = 0; i <= 10; i++) {
    console.log(i);  
}

/*
    We start our loop with a "for". Within this function, we are injecting some parameters that JS will run against:
    index; condition; change index -> result

    Within our parameters, we are stating an index declaration to 0. This is baseline.
    We move on asking if the variable is less than or equal to 10.
    If true, add 1 to i.
    Once that is processed, return that value (in this case, console.log of that number.)
    Once our condition is met, we return a FALSE which ends our loop, THIS is important to note:

    for(<create index variabl>.; <run condition>; <change index>) {
        <return results>
        <continue until condition is met>
    }
*/

//? If we do not indicate what our condition is, the loop will not have a finish and thus run until we have to force close it.

//! infinite loop
/*
    No condition means that JS does not know when to stop and will never assume that information.
*/

/*
for (let i = 0; i++) {
    console.log(i);    
}
*/

//! challenge
//* Using a for loop, set an index to 2.  Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration.

for (let i = 2; i > -10; i-=4) {
    console.log(i);
}

//? We aren't limited by positive or negative numbers. We can even cycle through variables assigned with strings.

let word = "supercalifragilisticexpialidocious"
for (let i = 0; i < word.length; i++) {     //length is a method we can use in JS which helps us determine a value we may not know.
    // console.log(i, word[i]);
    // 1) we set a value of each index and are displaying
    // 2) we set to display the value within the "object" of word. Each character assigned to the variable of "word" is provided and index value and this is how we are cycling through it.
    console.log(`The letter ${word[i]} is in position ${i+1}.`);
}

//! for in loops
/*
    With for loops, we are seeking an index value and running that against a condition. For in loops don't require us to have an index number.
*/

let city = {
    name: "Indianapolis",
    pop: 8777000,
    speedway: true
};
for (info in city) {
    console.log(info);
}

//? "info" is a placeholder for the information we are wanting to pull from "city." We could use the "bear" or "potato" and it would produce the same result. BUT, keeping a standard we are writing code in a "relative" manner so people reading it after us can easily follow along.

// "info" has shown us the keys within our object.

//? What if we wanted to see those values represented within the object?

console.log(city[info]);

/*
    syntax of for in
    for (variable in object) {
        statement
    }
*/

//? for in an array:
let list = ["milk", "eggs", "beans", "meat", "bread", "apples"];
for (item in list) {
    //? What happens if we console.log item? What should we expect?
    console.log(item); //return the index position of our array
    console.log(list[item]); //return the item in the index position of the list
}

//! challenge
/*
What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';
Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.
let propCase;  // We've set an empty variable that we plan to assign a value after our loop.
*/
let name = "piCard";
let correctCase;

for (letter in name) {
    letter == 0 ? correctCase = name[letter].toUpperCase(): correctCase += name[letter].toLowerCase();
//         1           2                          3              4          5     
}
console.log(`${correctCase}: "Engage!"`);

/*
    1. We are taking the value of the letter index and declaring a position of 0.
    2. We assign our empty variable top equal that positioned value.
    3. If that index is 0, we will take that value and run a ".toUpperCase()" funtion on it.
    4. If the index is NOT 0, we still want to include it into our empty variable and utilize our += expression so it knows to add the next value (or n++).
    5. If the index is NOT 0, we want to run a ".toLowerCase()" function so that all letters are in the proper case.
*/

//! for of loops
/*
    In order to run a "for of" loop, the "thing" must be numbered like an array.
    let object = {
        string: "Peter",
        boolean: true,
        number: 1
    }

    for (item of object) {
        console.log(item);
    }

    ? Because the object is not indexed like an array, we are unable to loop items "of" that object. We cannot be sure what is "of" this particular object.
*/

let indexArray = ["spot1", 2, true, "notFifth"]
for (let pos of indexArray) {
    console.log(pos, 'was run through a "for of" loop');
}
//! output
// spot1 was run through a "for of" loop
// 2 was run through a "for of" loop
// true was run through a "for of" loop
// notFifth was run through a "for of" loop

/*  syntax for of loop
    for (variable of iterable) {
        statement
    }
*/

//? We are capable of iterating over the values within this array or "of" this array.

/*
    ? Quick Recap:
    for loop: loops through a block of code until the counter reaches a specified number
    for in loop: loops through of an object
    for of loop: loops over iterable objects as arrays and strings *remember, a string can be accessed in much the same way as an array.
*/

//! for of loop challenge
//* Created an array of animals:  mouse, cat, dog, bird, and pig.  Using a for of loop, console log each animals respective "sound" (ex: 'meow' when it returns 'cat').

let animalArray = ["mouse", "cat", "dog", "bird", "pig"];
for (animal of animalArray) {
    if (animal == "mouse") {
        console.log("squeak");
    } else if (animal == "cat") {
        console.log("meow");
    } else if (animal == "dog") {
        console.log("woof");
    } else if (animal == "bird") {
        console.log("tweet");
    } else if (animal == "pig") {
        console.log("oink");
    } else {
        console.log("animal input invalid");
    }
};

//? OR

/*let*/ animalArray = ["mouse", "cat", "dog", "bird", "pig"];
for (animal of animalArray) {
    switch (animal) {
        case "mouse":
            console.log("squeak");
            break;
        case "cat":
            console.log("meow");
            break;
        case "dog":
            console.log("woof");
            break;
        case "bird":
            console.log("tweet");
            break;
        case "pig":
            console.log("oink");
            break;
        default:
            console.log("animal input invalid");
    }
}

//? OR

/*let*/ animalArray = ["mouse", "cat", "dog", "bird", "pig"];
for (animal of animalArray) {
    animal == "mouse" ?
    console.log("squeak") :
    animal == "cat" ?
    console.log("meow") :
    animal == "dog" ?
    console.log("woof") :
    animal == "bird" ?
    console.log("tweet") :
    console.log("oink");
};

//? OR with 2 arrays

let animalArray = ["mouse", "cat", "dog", "bird", "pig"];
let soundArray = ["squeak", "meow", "woof", "tweet", "oink"]
let animals2 = {mouse: "squeak", }
for (animal of animalArray) {
    console.log("The " + animal + " says " + soundArray[0]);
};

//! FIZZ BUZZ CHALLENGE
// Create a variable with any number between 0-100.
// For multiples of 3, print "Fizz"
// For multiples of 5, print "Buzz"
// For multiples of 3 and 5, print "Fizz Buzz"
// If it's not multiples of 3 and 5, print the number itself

let anyNum = 9;
let output = anyNum;
if ((anyNum % 3) == 0) {
    output = "Fizz";
}
if (anyNum % 5 == 0) {
    output = "Buzz"
} 
if (anyNum%3==0 && anyNum%5==0) {
    output = "Fizz Buzz"
}
console.log(output);

for (let anyNum = 0; anyNum <= 100; anyNum++) {
    let output = anyNum;
    if ((anyNum % 3) == 0) {
        output = "Fizz";
    }
    if (anyNum % 5 == 0) {
        output = "Buzz"
    } 
    if (anyNum%3==0 && anyNum%5==0) {
        output = "Fizz Buzz"
    }
    console.log(output);
};