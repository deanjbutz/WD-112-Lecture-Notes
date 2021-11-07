/*//! Challenge 1
    Create a function expression called myName, which take first and last name as parameters and returns a string interpolated result.
    Call the function with arguments of your choice and console.log it.
    For ex: pushing "Ryan" and "Reynolds" into the function will result with a return of "Ryan Reynolds"
*/

let myName = function(fName, lName) {
    return `${fName} ${lName}`
}
console.log(myName("Ryan", "Reynolds"));


/*//! Challenge 2
    Loop over numbers from 0 to 100.
    If the number is divisible by 2, interpolate "The number __ is divisible by 2."
    If the number is divisible by 5, interpolate "The number __ is divisible by 5."
    If the number is divisible by both 2 and 5, interpolate "The number __ is divisible by 2 & 5."
    If the number is neither, interpolate "The number __ doesn't meet any criteria."
*/

for (i = 0; i <= 100; i++) {
    if (i % 5 == 0 && i % 2 == 0) {
        console.log(`The number ${i} is divisible by 2 & 5.`);
    } else if (i % 5 == 0) {
        console.log(`The number ${i} is divisible by 5.`);
    } else if (i % 2 == 0) {
        console.log(`The number ${i} is divisible by 2.`);
    } else {
        console.log(`The number ${i} doesn't meet any criteria.`);
    }
};


/*//! Challenge 3
    Create a function declaration called circleCircumference which takes a parameter of radius and returns the circumference.
    Call the function and console.log its result.
    HINTS:
        - mathematical formula to find circumference of a circle is C = 2*pi*r
        - hardcode pi using 3.14 or utilize Math.PI property
*/

function circleCircumference(radius) {
    return 2 * Math.PI * radius
};
console.log(circleCircumference(35));

/*//! Challenge 4
    Create an object literal named school with properties of teacher (str), subject (str), and isTenured (bool.)
    Create a property of student that is an object which will hold two arrays: name with strings of student names (two or more,) and grade integers (two or more.)
    Console.log the first student grade.
    Reassign that grade to 100 and console.log it.
*/

let school = {
    teacher: "teacher",
    subject: "subject",
    isTenured: true,
    student: {
        name: ["Dean", "Cole", "Bryson"],
        grade: [87, 94, 82]
    }
};
console.log(school.student.grade[0]);
school.student.grade[0] = 100;
console.log(school.student.grade[0]);