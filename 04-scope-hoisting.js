// scope & hoisting

/*
    scope determines how different blocks of code can be accessed.
        - global scope
        - block scope
        - function scope
        - module scope
        - lexical scope
*/

//! global scope
/*
    window object in terms of the client (browser)
    JS file when using runtime environment, such as Node.js
    Accessible from every other scope
*/

let x;
console.log(x);

function addOne() {
    x = 1;
};

addOne();
console.log(x);

//! block scope

if (x == 1) {
    x += 1
}

console.log(x);

//! function scope
// can be accessd only inside the function

function carName() {
    make = "Maserati"
    console.log(make);
    model = "GranTurismo"
    var year = 15           // var does not allow the variable to be accessed outside of the function, at all, even if the function has been called
}

// console.log(model); // ReferenceError: model is not defined

carName(); // console.logs the make of carName

console.log(model); // works after you've called the function because the variable is not a "var"

// console.log(year); // ReferenceError: year is not defined - still does not work after function is called becase year has been assigned "var"

//! block scope

function house() {
    let bedrooms = 2
    var bathrooms = 3

    if (true) {
        console.log(bedrooms);
        console.log(bathrooms);
        let address = "5422 Meadowood Dr."
        var forSale = false
    }

    // console.log(address); // ReferenceError: address is not defined - because "let" variables are "blocked" variables or inside {...}
    console.log(forSale); // false - because forSale is a "var" variable (var is hoisted)
}

house();

let count = 0;
for ( ;count <9;++count ) {
    console.log(count);
}

/*
    let is scoped to the immediate enclosing block of code
    var is scoped to the immediate function block
*/

//! module scope (blue badge material)

/*
    module scope encapsulates variable that are created inside of a module that is being imported    
    it protects the variables from being accessed outside
*/

let pi = Math.PI
console.log(pi); //i can access pi, but I cannot modify it. keeps it safe

//! lexical scope
/*
    variables are accessible by the position of them nested within the function scopes. inner function scope can access outer function scope
*/

function outerFunction() {
    // outer scope
    let outerFxVar = "Hello from the outer side!"

    function innerFunction() {
        // inner scope
        console.log(outerFxVar);
    }

    return innerFunction
}

let inner = outerFunction()
inner(); //Hello from the outer side!
//innerFunction(); //! ReferenceError: innerFunction is not defined


//! hoisting
/*
    JS as an interpreted language is being read top to bottom and left to right.
    The parser which reads the code goes over it twice.
    first, to hoist or assign memory location to all:
        - VARiables
        - Function declaration
    During second pass, the interpreter reads initialization values and expressions and executes the code.
*/

let y;
console.log(y);
// 1. y gets declared and automatically assigned value of undefined
// 2. console.log reads the undefined value above

console.log(z);
//let z; // ReferenceError: Cannot access 'z' before initialization
var z; // Undefined because "var" hoists the variable

console.log(a); //undefined because a is declared below
var a;

console.log(b); //undefined because b is declared below, however, initializtion (b = "test sting") still happens top to bottom
var b = "test string"

//! hoisting & fx declaration vs fx initialization

helloWorld();
function helloWorld() {
    console.log("Hello World from the Hoisting Side! - Adele");
}

helloWorld2();
function helloWorld2() {
    let adele = "Adele"
    console.log(`Hello World from the Hoisting Side! ${adele}`);
}

// helloWorld3();
// function helloWorld3() {
//     if (true) {
//         let adele = "Adele"                                         //causes ReferenceError: adele is not defined becuase let is scoped to block, not fx
//     }
    
//     console.log(`Hello World from the Hoisting Side! ${adele}`);
// }

helloWorld4();
function helloWorld4() {
    if (true) {
        var adele = "Adele"                                         //successful because var hoists the variable within the function
    }
    
    console.log(`Hello World from the Hoisting Side! ${adele}`);
}

// function expression

let addNums = (x, y) => console.log(x + y);
addNums(5, 6)                               // works -> fx expression created, THEN invoked

// subNums(5, 1)                               // ReferenceError: Cannot access 'subNums' before initialization
// let subNums = (x, y) => console.log(x - y);

// subNums2(5, 1)                              // TypeError: subNums2 is not a function becuase subNums2 declaration is hoisted with a default value of undefined
// var subNums2 = (x, y) => console.log(x - y);// subNums2 becomes fx expression ONLY after being assigned a value of a function

// Above is same as:
// var subNums2 = function(x, y) {
//     console.log(x - y)
// }

subNums3(5, 1)                              // 4 because subNums3 is declared, rather than expressed
function subNums3(x, y) {
    console.log(x - y);
}

//! if let, var, and const are NOT used, let is assumed

