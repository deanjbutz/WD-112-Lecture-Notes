//! conditionals
/*
    -a falsy value is a value that is considered false when encountered in a boolean context.
    -There are 6 falsy values in JS
        - false
        - 0
        - "", '', ``
        - null
        - undefined
        - NaN (Not a Number)
    -What does this mean? Whenever JS is expecting a Boolean value and it returns one of 6 values, it is evaludated as "falsy".
*/

//! if
/*
    ? When utilizing comparison operators, we typically are asking so we can move on to the next batch of code. "if" something is true, do "this thing."
*/

let test = [];
let test1 = 0;
let test2 = 1;
let test3 = null;
let test4 = undefined;
let test5 = NaN;
console.log(Boolean(test));  //true
console.log(Boolean(test1)); //false
console.log(Boolean(test2)); //true
console.log(Boolean(test3)); //false
console.log(Boolean(test4)); //false
console.log(Boolean(test5)); //false

let light = "on";

if(light == "on") {
    console.log("The light is on.");
}

let weather = 65;
if(weather < 70) {
    console.log("Consider wearing a jacket.")
}

//! syntax
/*
if (conditionatl) {
    true;
}
*/

if(true) {
    console.log("Works");
}

/*
    Understanding how our comparison operators are functioning can help us ask questions to produce desireable results. If the weather is less than 70 degrees outside, we may want to be instructed to wear a jacket.
    ? What if we wanted to make sure two things were true inside of our "if" statement?
*/

let rain = true;
if (weather < 70 && rain != false) {
    console.log("It is a little chilly and will possibly rain.");
}

//! challenge
/*
Create two variable:
    1) let batman = 'is the night'
    2) let bruce = true
Create an if statement that returns true and console log 'Batman'
*/

let batman = 'is the night';
let bruce = true;
if(batman == 'is the night' && bruce == true) {
    console.log('Batman');
}

//! if else
/*
    ? Perhaps we want to evaluate a question and provide and option for either the "yes" and "no" of that answer. EX. "If you're tired, sleep. If not, go for a walk." if/else statements allow us this ability to write out a chain of events.
*/

let today = 75;
if (today < 70) {
    console.log(`It's ${today}, wear a jacket.`);
} else {
    console.log(`It's ${today}, no jacket needed.`);
}

//? What if there are multiple things you would like to check against and compare to?

//! challenge

let name = "Brian";
if (name == "Dean") {
    console.log(`Hello, my name is ${name}`);
} else {
    console.log(`Hello, is your name ${name}?`);
}

//! else if
/*
    This is a condition that would be checked if the above condition was not met.
*/

//? Let's cook something.

let cookTime = 5;
if (cookTime === 45) {
    console.log("Let us feast!");
} else if (cookTime >= 30) {
    console.log(`It has only been ${cookTime} minutes. Wait another 5 - 15 minutues.`);
} else if (cookTime >= 20) {
    console.log(`It has only been ${cookTime} minutes. Wait another 10 - 25 minutes.`);
} else {
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it...`);
}

/*
    The end of the "else if" statement should have a simple "else" to finish it. This is simply stating that none of our conditions were met to execute and we should provide a response to those responses we can't account for.
    ? It should also be considered that it will finish the method once the condition has been met. Remember, JS reads from top to bottom. If passes on a particular "else if" statement, it will consider it completed.
*/

let cookTime2 = 40;
if (cookTime2 === 45) {
    console.log("Let us feast!");
} else if (cookTime2 >= 20) {
    console.log(`It has only been ${cookTime2} minutes. Wait another 10 - 25 minutes.`);
} else if (cookTime2 >= 30) {                                                                   //! does not get to this point because condition above has been met.
    console.log(`It has only been ${cookTime2} minutes. Perhaps at least try cooking it.`);
}

//? We can see that although the first statement is true, we actually want it to read the second statement. This would provide us the wrong information and because that first "else if" is true, JS no longer needs to finish reading the rest of the "else if" statement.

//! challenge
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 32;
if (age >= 0 && age <= 17) {
    console.log("Sorry, you're too young to do anything.");
} else if (age >= 18 && age < 21) {
    console.log("You can vote!");
} else if (age >= 21 && age < 25) {
    console.log("You can drink!");
} else if (age >= 25) {
    console.log("You can rent a car!");
} else {
    console.log("Error: Please verify your age. Negative value entered.");
}

//? OR

/*let*/ age = 17;
if (age >= 25) {
    console.log("You can rent a car!");
} else if (age >= 21) {
    console.log("You can drink!");
} else if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Sorry, you're too young to do anything.");
}

//! ternaries
/*
    This is a quick way of considering an "if else" statement. We are capable of writing out our conditional in a much more simple manner.
*/
//? We can consider and "if else":
let first = "Bob";
if (first === "Dean") {
    console.log(`Hi, ${first}!`);
} else {
    console.log(`Not sure I know ${first}.`);
}

//? Writing a ternary requires us to define our condition
//? = "if" that returns true, provide a result - "else" return a result

// syntax
// condition ? if true : else result

/*let*/ first = "Bob";
first === "Dean" ? console.log(`Hi, ${first}! We're using a ternary!`) : console.log(`Not sure I know ${first}.`);

//? OR (your preference)

/*let*/ first = "Dean";
first === "Dean" ?
console.log(`Hi, ${first}! We're using a ternary!`) :
console.log(`Not sure I know ${first}.`);

//? It's even possible to chain out "if else"

let hero = "Batman";
let villain = "Penguin";
hero === "Batman" && villain === "Riddler" ?
console.log("What has a head and a tail but no body?") :
hero === "Batman" && villain === "Joker" ?
console.log("Why so serious?") :
hero === "Batman" && villain === "Kiteman" ?
console.log("What does Kiteman do?") :
console.log(`${hero} is the night!`);

//! challenge
/*
Take this if/else statement and make it into a ternary.
let lampOn = false;
let daytime = true;
if(lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
    console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}
*/

let lampOn = true;
let daytime = false;
lampOn == true && daytime != true ?
console.log('The lamp is on during the night') :
lampOn != true && daytime != true ?
console.log('The lamp is off during the night') :
lampOn == true && daytime == true ?
console.log('The lamp is on during the day') :
lampOn != true && daytime == true ?
console.log('The lamp is off during the day') :
console.log('What lamp?');

//? OR

/*let*/ lampOn = true;
/*let*/ daytime = false;
lampOn == true && daytime != true
? console.log('The lamp is on during the night')
: lampOn != true && daytime != true
? console.log('The lamp is off during the night')
: lampOn == true && daytime == true
? console.log('The lamp is on during the day')
: lampOn != true && daytime == true
? console.log('The lamp is off during the day')
: console.log('What lamp?');

//? OR

/*let*/ lampOn = true;
/*let*/ daytime = false;
lampOn && daytime
? console.log('The lamp is on during the day')
: lampOn && !daytime
? console.log('The lamp is on during the night')
: !lampOn && daytime
? console.log('The lamp is off during the day')
: !lampOn && !daytime
? console.log('The lamp is off during the night')
: console.log('What lamp?');

//! switch
/*
    The switch statement executes a block of code depending upon different cases.
    ? Switch statements are another versioning of how we consider "if else" statements. We are asking a question and requiring a specific response which is determined by our answer.
*/

let instructor = "Ing";
switch (instructor) {
    case "Zach":
        console.log(`${instructor} is part of the Web Development team.`);
        break;
        //Once each case has been evaluated, and we return a result, we need note to "break" out from our switch statements, otherwise we continue on through out the statements and produce those results as well.
    case "Ing":
        console.log(`${instructor} is part of the Web Development team.`);
        break;
    default:
        console.log(`Sorry I cannot find what ${instructor} teaches, at this time.`);
        //We must end all of our switch statements with a default, in the same way we end all "else if" statements with an "else" statement. Think of this as a "catch all" to those conditions we either haven't considered or don't want to consider.
        //We can also simplify this down to check among a variety of cases to result in one response.
}

instructor = "Amanda";
switch (instructor) {
    case "Ing":
    case "Adam":
    case "Eric":
    case "Zach":
    case "Donovan":
        console.log(`${instructor} is part of the Web Development team.`);
        break;
    case "Josh":
    case "Amanda":
    case "Casey":
    case "Junior":
        console.log(`${instructor} is part of the Software Development team.`)
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches.`);
}

//! challenge
/*
    Create a 'grade' variable that holds a string value of 'A,B,C,D or F.
    Create a switch statement that passes that variable to check.  Depending on the grade, console log a string result that indicates what they need (ex: A = 'Passed!', F = 'Failing', etc.).  
*/
let grade = "F"
switch (grade) {
    case "A":
        console.log(`Your grade is ${grade}. You passed exceptionally!`);
        break;
    case "B":
        console.log(`Your grade is ${grade}. You passed!`);
        break;
    case "C":
        console.log(`Your grade is ${grade}. You barely passed!`);
        break;
    case "D":
        console.log(`Your grade is ${grade}. You did not pass.`);
        break;
    case "F":
        console.log(`Your grade is ${grade}. You failed.`);
        break;
    default:
        console.log("Error: grade invalid");
}

//? We can apply conditionals within our switch to be met as well.

let switchConditional = 1;
switch (switchConditional == "string" || typeof switchConditional == "boolean") {
    case true:
        console.log(`${switchConditional} is a string or boolean!`);
        break;
    default:
        console.log(`${switchConditional} is NOT a string or boolean`);
}

//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let numGrade = 101;
switch (true) {
    case (numGrade < 0) :
        console.log("Error: negative value entered.");
        break;
    case (numGrade <= 59) :
        console.log(`You are failing with an F.`);
        break;
    case (numGrade <= 65) :
        console.log(`You are failing with a D.`);
        break;
    case (numGrade <= 78):
        console.log(`You are passing with a C.`);
        break;
    case (numGrade <= 88) :
        console.log(`You are passing with a B.`);
        break;
    case (numGrade <= 100):
        console.log(`You are excelling with an A.`);
        break;
    default:
        console.log("Error: value more than 100 entered.");
}

//? or to simplify:

/*let*/ grade = 55;
switch (true) {
    case grade > 88 :
        console.log("You are passing with an A.");
        break;
    case grade > 78 :
        console.log("You are passing with a B.");
        break;
    case grade > 65 :
        console.log("You are passing with a C.");
        break;
    case grade > 59 :
        console.log("You are passing with a D.");
    default:
        console.log("You are failing with an F.");
}