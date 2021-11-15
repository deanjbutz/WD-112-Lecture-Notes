//! array destructuring
/*
    allows you to unpack values from arrays, or even properties from objects into distinct variables

    ? destructuring uses very similar syntax as array literals, but is instead on the left hand side of the assignment operator, which is where we define what values to unpack from the source's variable (arry/object)

    great for pulling info our of an array/object and assigning that data to its own variable
*/

const fullName1 = ["Gary", "Weston"];
const firstName1 = fullName1[0];
const lastName1 = fullName1[1];
console.log(firstName1, lastName1); // Gary Weston

const [firstName2, lastName2] = fullName1; //! here were are declaring firstName and lastName, then initializing using the fullName array
console.log("destructured", firstName2, lastName2); // destructured Gary Weston

//? what JS will do: pull out the values stored in the fullName variable and assign them based on their postion in the original array to the variables we declared using destructuring. This is very powerful syntax for splitting an array into variables we can then work with.

//! rest operator
/*
    syntax looks exactly like spread operator.

    in a way, rest syntax is the opposite of the spread syntax, collecting multiple elements and condensing them into a single element
*/

const fullName2 = ["Gary", "Weston", "Mr.", {
    month: 12,
    day: 18,
    year: 1985
}]

const [firstName3, lastName3, ...otherInfo] = fullName2;
console.log(firstName3); // Gary
console.log(lastName3); // Weston
console.log(otherInfo); // [ 'Mr.', { month: 12, day: 18, year: 1985 } ]

//? any other values that are now added to our fullName array, will be packaged up with the REST of our data falling under the umbrella of the rest operator declared as otherInfo

const fullName3 = ["Gary", "Weston", "Mr.", {
    month: 12,
    day: 18,
    year: 1985
}, "testOne", 5, null, true, "Happy"]

const [firstName4, lastName4, ...otherInfo2] = fullName3;
console.log(firstName4); // Gary
console.log(lastName4); // Weston
console.log(otherInfo2);    // [
                            //     'Mr.',
                            //     { month: 12, day: 18, year: 1985 },
                            //     'testOne',
                            //     5,
                            //     null,
                            //     true,
                            //     'Happy'
                            // ]

//? values can also be skipped or moitted if we don't want to assign them to a variable while using array destructuring

const fullName4 = ["Gary", "Weston", "Mr.", {
    month: 12,
    day: 18,
    year: 1985
}, "testOne", 5, null, true, "Happy"]

const [firstName5, lastName5, , , , ...otherInfo3] = fullName4; //! use commas to "skip" indexes of fullName4 array
console.log(firstName5); // Gary
console.log(lastName5); // Weston
console.log(otherInfo3);    // [ 5, null, true, 'Happy' ] //! notice how it skips indexes 2 thru 4