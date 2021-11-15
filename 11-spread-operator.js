//! spread operator
/*
    essentially pulls out all the elements of an array and gives them to you as a standalone list of items.

    denoted ...
*/

//! incorrect syntax
const fullName = ["Gary", "Weston"];
// ...fullName // SyntaxError: Unexpected token '...'

//const elements = ...fullName; // SyntaxError: Unexpected token '...'
//const elements = "Gary", "Weston"; // above is trying to return this..

//! correct syntax
const copiedFullName = [...fullName];
console.log(copiedFullName); // [ 'Gary', 'Weston' ]

//? if we inserted fullName variable inside of the array without using the spread syntax, we would just be instering the array as a whole, as the first index of the new array. Since the spread syntax actaully pulls out all of the elements of an array and gives them back to us as a standalone list of elements, we will actually have a new array with those standalone elements inserted.
//? one of the advantages of the spread operator is that, down the line, if we decide that we need to add (or push) another value to our original array, we can do that without altering our copied array. keep in mind, this depends on what data types we're actually working with. Here, we are pushing a primitive data type, so we don't run into any issues.

fullName.push("Mr.");
console.log(fullName, copiedFullName); //[ 'Gary', 'Weston', 'Mr.' ] [ 'Gary', 'Weston' ]

//! spread operator & numbers
/*
    JS has a global Math object that has its own built in methods, like the min method, that looks at a list of integers and returns the smallest value.
*/

console.log(Math.min(1, 5, -3)); // -3

//min will not work on an array, as it is expecting a number

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices));; // NaN because prices is an array, not a list of numbers
console.log(Math.min(...prices)); // 3.99 because ... is pulling out the elements of the array as a standalone list

//! spread operator & objects

const persons = [{name: "Gary", age: 37}, {name: "Bob", age: 12}]
const copiedPersons = [...persons]
console.log(...persons); // { name: 'Gary', age: 37 } { name: 'Bob', age: 12 }
console.log(copiedPersons); // [ { name: 'Gary', age: 37 }, { name: 'Bob', age: 12 } ]
console.log(...copiedPersons); // { name: 'Gary', age: 37 } { name: 'Bob', age: 12 }

persons.push({name:"Ginger", age:29})
console.log(copiedPersons, persons);    // [ { name: 'Gary', age: 37 }, { name: 'Bob', age: 12 } ] [
                                        //     { name: 'Gary', age: 37 },
                                        //     { name: 'Bob', age: 12 },
                                        //     { name: 'Ginger', age: 29 }
                                        // ]

//? this is where it can get a bit tricky behind the scenes
/*
    JS has 5 data types that are passed by value:
        - boolean
        - null
        - undefined
        - string
        - number
    If a primitive data type is assigned to a variable, we can think of that variable as containing the primitive variable
*/

let x = 10;
let y = "abc";
let z = null;

let a = x;
let b = y;

console.log(x, a, y, b); // 10 10 abc abc


x = 10;
y = "abc";
a = x;
b = y;
a = 5;
b = "def"
console.log(x, a, y, b); // 10 5 abc def

//! JS also has 3 data types that are passed by reference: array, function, and object. These are all technically objects, se we'll refer to them collectively as objects.
//? Variables that are assigned to a non primitive value are given a reference to that value. The reference points to that object location in memory. The variables don't actually contain the value.
//! Objects are created at a location on your computer's memory. When we write arr = [], we've created an array in memory. What the variable arr receives is the address (the location) of the array.

// let's pretend the address is a new data type passed by value, just like a pimitive data type would be. An address points to the location, in memory, of a value that is passed by reference.
// address is denoted by <>

// when we assign and use a reference type variable, what we write and see is:

let arr = [];
arr.push(1)
console.log(arr); // [ 1 ]

/*
    a representation of what the above looks like in memory would be:

        variable    value   address object
        arr         <#001>  #001    []
        arr         <#001>  #001    [1]

    ? when a reference type value (array, function oject) is copied to another variable using =, the address of that value is actually copied over as if it were primitive. Arrays, functions, and objects are copied by reference instead of by value.
*/

let reference = [1];
let refCopy = reference;
console.log(reference); // [ 1 ]
console.log(refCopy); // [ 1 ]

/*
    a representation of what the above looks like in memory would be:

        variable    value   address object
        reference   <#001>  #001    [1]
        refCopy     <#001>
*/

reference.push(2);
console.log(reference, refCopy); // [ 1, 2 ] [ 1, 2 ]

/*
    a representation of what the above looks like in memory would be:

        variable    value   address object
        reference   <#001>  #001    [1,2]
        refCopy     <#001>
*/

const persons2 = [{name: "Gary", age: 37}, {name: "Bob", age: 12}]
const copiedPersons2 = [...persons2]
// persons.push({name: "Ginger", age: 29})
//? hence, if we did change one of the values in one of the objects in our persons array, that change will also be reflected in copiedPersons. This happens because we copied the address to the place in memory with the copiedPersons variable, and then we changed the value of our name key in the memory itself. So any changes we make in persons or copiedPersons will also be reflected in its counterpart.

copiedPersons2[0].name = "Paul";
persons2[0].name = "Mike";
console.log(persons2, copiedPersons2);// [ { name: 'Mike', age: 37 }, { name: 'Bob', age: 12 } ] [ { name: 'Mike', age: 37 }, { name: 'Bob', age: 12 } ]

//! spread operator and avoiding changing both the original and copied array

const persons3 = [{name: "Gary", age: 37}, {name: "Bob", age: 12}]
    //? if you want to avoid changing both the original array and the copied array, you would have to copy every object

const copiedPersons3 = persons3.map(person => ({
    name: person.name,
    age: person.age
})) // since we're returning something in curly braces, we have to enclose it in parantheses so that JS doesn't think it is the arrow functions body

persons3.push({name: "Ginger", age: 29});
copiedPersons3[0].name = "Paul"
console.log(persons3, copiedPersons3);  // [
                                        //     { name: 'Gary', age: 37 },
                                        //     { name: 'Bob', age: 12 },
                                        //     { name: 'Ginger', age: 29 }
                                        // ] [ { name: 'Paul', age: 37 }, { name: 'Bob', age: 12 } ]


//! challenge
/*
    without modifying the original two arrays, combine them into one new array with the spread operator
*/

const aThroughM = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
const nThroughZ = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const aThroughZ = [...aThroughM, ...nThroughZ]
console.log(aThroughZ);
