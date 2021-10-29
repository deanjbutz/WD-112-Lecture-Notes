// functions
/*
    Function is a block of reusable code that can take in parameters (door,) perform an action, and return the result.
    There are two types of functions:
        - function declaration
            - are hoisted
        - function expression
            - arrow functions
            - are NOT hoisted
    Functions have a default return statement of "undefined" unless otherwise specified.
*/

/*
    function identifier(parameters_if_any) {
        block of code to run
        return statement
    }
*/

function funDeclaration() {
    // console.log("This is a function declaration.");
    return "This is a function declaration's return statement."
}

// a function will not run until it is "invoked" (called)
// parantheses immediately invoke the function

funDeclaration() // will NOT show until wrapped in console.log()
console.log(funDeclaration());

// or assign the result to a variable
let functionResult = funDeclaration()
console.log(functionResult);

// functions can have none or many parameters
// parameters act as doors to let arguments inside of a function

function sayHello(firstName) {
    return `Hello, ${firstName}!`
}

console.log(sayHello());
// returns "Hello, undefined!" because no parameter is given

console.log(sayHello("Dean"));
// returns "Hello, Dean!"

let userName1 = "Cole"
let userName2 = "Quinton"
let userName3 = "Emily"

console.log(sayHello(userName1));
console.log(sayHello(userName2));
console.log(sayHello(userName3));

function generateEmail(email, suckersName, title, signature) {
    return `To: ${email}
            Title: ${title}
            Hello Mr. ${suckersName}, we've been trying to reach\n
            you about your car's extended warranty. \n
            Sincerely, ${signature}`
}

console.log(generateEmail("sucker@gmail.com", "Paul", "Warranty", "Mr. Scam Artist"));

// function expression
/*
    function expression  utilizes a variable as a placeholder.
    function expressions are not hoisted.
*/

/*
    let identifier = function(params_if_any) {
        block of executable code
        return statement
    }
*/

let myDog = function(name, breed) {
    return `My dog, ${name}, is a ${breed}.`
}
console.log(myDog("Reggie", "cattle dog and retriever mix"));

// arrow functions
/*
    introduced in ES6
    more concise way of writing functions
    arrow functions are created using function expression ONLY
    do not bind to this or super (more on that in Classes)
*/

// concise body arrow function
// can only have one parameter if it's not enclosed by ()
//can have implicit return statement ONLY without using { }

let greetEveryone = () => console.log("Hello, class!");
greetEveryone();

let greetPerson = person => console.log(`Hello, ${person}!`);
greetPerson();

// parantheses around parameters needed only if none or many are present

// block body arrow functions

let sendEmail = (email, name) => {
    return `Hello: ${name}:
    
    This is to inform ou that you are learning JavaScript.
    
    Good on you! We can send some swag to ${email}.
    
    Sincerely,
    
    Paul & Summer`
}

console.log(sendEmail("email@email.com", "Dean"));

// functions and their return statements
// functions can only return one value. More than one value requires grouping into an array, object, or set.

function twoNums(num1, num2) {
    return num1, num2
}

console.log(twoNums(1,2)); // only returns 2

function twoNums(num1, num2) {
    return [num1, num2]         //! added brackets
}

console.log(twoNums(1,2)); // returns [ 1, 2 ]

//! challenge
/*
    create a function declaration called addNums that takes two number and returns a result.
*/

let addNums = (num1,num2) => {return (num1 + num2)};
console.log(addNums(1,2));

function addNums(num1,num2) {
    return (num1 + num2);
}
console.log(addNums(1,2));

// immediately invoked function execution
/*
    function declaration that has no name and is immediately invoked.
*/

(function () {
    console.log("IIFE");    
})();

//! challenge
/*
    create an arrow function expression named tipCalculator.
    It will take pre-tax bill, sales tax, and tip percentage.
    It will return string interpolated bill total and tip amount.
*/

let tipCalculator = (preTaxBill, salesTax, tipPercentage) => {
    billTotal = (preTaxBill * (1 + salesTax)).toFixed(2);
    tipAmount = (billTotal * tipPercentage).toFixed(2);
    return `Bill Total: $${billTotal}, Tip Amount: $${tipAmount}`;
}
console.log(tipCalculator(69.99, .09, .25));

//! challenge
/*
    create a function of your choice, declaration or expression, name capitalizeName.
    It take one parameter
    It capatalizes the first letter of the name and returns the full name to you.
*/

let capitalizeName = (badCaseName) => {
    lowerCaseName = badCaseName.toLowerCase()
    firstLetter = lowerCaseName.charAt(0)
    bigFirstLetter = firstLetter.toUpperCase()
    lowerCases = lowerCaseName.slice(1)
    upperCaseName = bigFirstLetter + lowerCases
    return `${upperCaseName}`
}
console.log(capitalizeName("sAm"));
console.log(capitalizeName("sUpErCaliFragiListicExPialiDociOus"));

let capitalizeName = (badCaseName) => {
    lowerCase = badCaseName.toLowerCase();
    goodCaseName = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    return `${goodCaseName}`
};

console.log(capitalizeName("sAm"));
console.log(capitalizeName("sUpErCaliFragiListicExPialiDociOus"));

let capitalizeName = (badCaseName) => {
    goodCaseName = badCaseName.charAt(0).toUpperCase() + badCaseName.slice(1).toLowerCase();
    return `${goodCaseName}`
}

console.log(capitalizeName("sAm"));
console.log(capitalizeName("sUpErCaliFragiListicExPialiDociOus"));

let capitalizeName = (badCaseName) => {
    return badCaseName.charAt(0).toUpperCase() + badCaseName.slice(1).toLowerCase();
}

console.log(capitalizeName("sAm"));
console.log(capitalizeName("sUpErCaliFragiListicExPialiDociOus"));

let capitalizeName = (badCaseName) => {return badCaseName.charAt(0).toUpperCase() + badCaseName.slice(1).toLowerCase();}

console.log(capitalizeName("sAm"));
console.log(capitalizeName("sUpErCaliFragiListicExPialiDociOus"));

let capName = (badName) => {return badName.charAt(0).toUpperCase() + badName.slice(1).toLowerCase();}
console.log(capName("sUpErCaliFragiListicExPialiDociOus"));

let capName = (badName) => {return badName[0].toUpperCase() + badName.slice(1).toLowerCase();}
console.log(capName("sUpErCaliFragiListicExPialiDociOus"));