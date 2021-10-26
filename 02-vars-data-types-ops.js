// JavaScript
/*
    JacaScript was founded in 1996 by Brandon Eich
    - client side language (runs in the browser)
    - interpreted (not compiled)
    - object oriented
    - ECMAScript which is an organization that sets language
*/

// Comments
/*
    Lines or blocks of code that are not being interpreted by the parser.
    - Denoted by // for single line
    - Or like the existing comment that allows many lines of code
    - Comments get read, but are not executed
    - Beneficial in documenting maintainable codebase
*/

// Variables

/*
    Containers that store data in memory.
    - declaration (let, var)
        - allowing the memory space to be reserved
        - declarations start with let or var
        - declarations cannot start with a number or most special characters other than $ or _
        - default value is undefined
        - loosely typed language (no need to declare data type)
    - initialization
*/

let firstName;
    firstName="Dean";
    console.log(firstName);
    firstName=2;
    console.log(2);

var lastName;
console.log(lastName);


// const age;
// SyntaxError: Missing initializer in const declaration.
// Const must alway be declated AND initialized
// console.log(age)

// Coding Practices for Variables
/*
    - be concise (ex: firstName instead of usersFirstName)
    - Be specific (ex: getValue instead of i)
    - Utilize camelCase, snake_case, PascalCase, or skewer-case
    - You can also utilize nocase or SCREAMING_CASE
*/

// Variable Initilization
/*
    The data value that is given to a variable delaration
    - can be anything (string, integer, array, function, class, etc.)
    - can be reassigned (apart from const)
*/

// declaration identifier = initializer (value)
let address = "5422 Meadowood Dr";
console.log(address);

// redeclare variables with different initializers

address = "1742 Lincoln Road";
console.log(address);

console.log(firstName, lastName);

firstName = "Dean";
lastName = "Butz";
console.log(firstName, lastName);

const ssn = 123456789;
console.log(ssn);

// ssn = 987654321
// console.log(ssn)
// ! TypeError: Assignment to constant variable.

let text = "Hey, \"Dean.\"";
console.log(text);

// Data Types
/*
    JavaScript has several data types that can be used. They are:
    - boolean
    - null
    - undefined
    - string
    - number
    - array
    - object
*/

// String
/*
    Data type used to represent text in single or double quotes
    Primitive data type
*/

let myString = "This is a string data type";
console.log(myString);
myString = 'Can be in single quotes';
console.log(myString);
myString = `${firstName} is my first name.`; //Template literal
console.log(myString);

// Numbers

let degrees = 90;
console.log(degrees);
let precise = 999999999999999; // up to 15 digits doesn't roung
console.log(precise);
let rounded = 9999999999999999; // 16+ digits rounds up
console.log(rounded);

let decimalAddition = 0.2 + 0.1;
console.log(decimalAddition);

let strToNum = Number("123");
console.log(strToNum);

// typeof
console.log(typeof myString); // string
console.log(typeof degrees);  // number
console.log(typeof strToNum); // number

// Boolean
/*
    Two possible values: true (on) or false (off)
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

// Undefined
/*
    No value is assigned and does not act as empty container.
*/

let undef = undefined;
console.log(undef);

let correct;           //creates variable, but does not define it
console.log(correct);

// Null
/*
    Null is an empty value. Container with nothing in it.
*/

let empty = null;      //declares variable, but
console.log(empty);


// null vs undefined
/*
    - null is like container with nothing in it
    - undefined means variable has never been set or created
*/

// data type literals
// when developer inserts a value into a data type

let strLiteral = "This is a sting literal";
console.log(strLiteral);

// arrays
// container holding a list of items

let students = ["Dean", "Cole", "Kiersten"];
console.log(typeof students);                   //object
console.log(typeof students[1]);                //string

// object
// stores many values

let student = {
    name: "Cole",
    age: 20,
    graduated: false,
};

console.log(typeof student);        //object
console.log(typeof student.name);   //string
console.log(typeof student.age);    //number

// Operators

// assignment operator
// assigns a value to the declaration (not "equal", but "is")

let r = 5; // r is 5

// compare operators
/* compare values on either side of the operator
    - returns either a true or false
*/

// equal to operator
console.log(3==3); //true
console.log(3==5); //false

// not equal to
console.log(3!=5); //true
console.log(3!=3); //false

// type coercion
/*
    process of converting one data type into another
    done automatically by the JS parser
*/
console.log(3 == "3");  //true
console.log(3 === "3"); //false

// strict equal or not equal operators
// tests for not only value, but data type as well
console.log(3===3);     //true because value and data type is the same
console.log(3==="3");   //false because data type is not the same
console.log(3!==3);     //false because value and data type is the same
console.log(3!=="3");   //true because data type is not the same
console.log(3!==5);     //true because value is not the same
console.log(3!=="5")    //true because value and data type is not the same

// greater, less, greater or equal, less or equal
console.log(1>0); //true
console.log(1>1); //false
console.log(1>2); //false
console.log(1<2); //true
console.log(1<1); //false
console.log(1<0); //false
console.log(1>=0); //true
console.log(1>=1); //true
console.log(1>=2); //false
console.log(1<=2); //true
console.log(1<=1); //true
console.log(1<=0); //false

console.log(1 > "0"); //true
console.log(1 > "1"); //false

// Logical Operators NOT AND OR

/*
    AND Operator (&&)
        - true if both values result in true
    OR Operator (||)
        - true if one of the other values results in true
    NOT Operator (!)
        -flips the resulting logical operation
*/

let x = 5;
let y = 7;

console.log(x<y && y>x); //true as both are true
console.log(x<y && y<x); //false as one is false

console.log(x<y || y<x); //true because at least one is true
console.log(x>y || y<x); //false because both are false

console.log(!(7==10)); //true because 7=10 is false
console.log(!(7=="7")); //false because 7=="7" is true

// add, subtract, multiply, divide

console.log(5+5); //10
console.log(5-5); //0
console.log(5*5); //25
console.log(5/5); //1
console.log(5**5); //3,125

let addNums = 5;
addNums = addNums * 2;
console.log(addNums); //10

addNums *= 2; //shorthand operator (works for all + - / * etc.)
console.log(addNums);

// Modulus Operator

console.log(12%5); //2 because 12 is divisible by 5 up to 10 with a remainder of 2

// String Concatenation

let fName = "Dean";
let lName = "Butz";

console.log(fName, lName);

let name = "Mr. "+fName+" "+lName;
console.log(name);

// Template Literal

let templateLiteralName = `Mr. ${fName} ${lName}`;
console.log(templateLiteralName);

// Multi Line Strings

let multiLine = "Once upon a time, there was a guy who taught JS \nto students and lied about his age.\nHe has a bulldog named Bentley.";
console.log(multiLine);

// Challenge

/*
    Set 7 or 8 variables;
    fName; lName; houseNumber; street; city; state; postCode; and concatentate them together to create your address stamp
*/

honorific = "Mr.";
fName = "Dean";
lName = "Butz";
let houseNumber = 5422;
let street = "Meadowood Dr";
let city = "Speedway";
let state = "IN";
let postCode = 46224;

let addressLine1 = `${honorific} ${fName} ${lName}`;
let addressLine2 = `${houseNumber} ${street}`;
let addressLine3 = `${city}, ${state} ${postCode}`;

let addressStamp = `${addressLine1}\n${addressLine2}\n${addressLine3}`;

console.log(addressStamp);


// Variables Quiz Question #14

let list = ['item1', 'item2', 'item3'];
console.log(typeof list);