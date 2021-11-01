//! arrays

/*
    an array is a list-like object whose prototype has methods to perform traversal and mutation operations. (MDN Web Docs)
        - denoted by []
        - hold multiple data types
        - mutable (can be modified)
        - can be accessed by their index
*/

let make = ["BMW", "Porsche", "Masarati", "Lamborghini"];

console.log(make); // [ 'BMW', 'Porsche', 'Masarati', 'Lamborghini' ]

console.log(typeof make); // object

// accessing by index

console.log(make[1]); // Porsche because index starts at 0

console.log(typeof make[1]); // string

console.log(make instanceof Array); // true because 'make' object is an instance of 'array' constructor

console.log(make[0]); // BMW

let arr = []; // array literal
console.log(Boolean(arr)); // returns true //! empty array, unlike empty string, returns true

// creating an array with a constructor

let countries = new Array("England", "Germany", "USA", "France")

console.log(countries);

// array reassignment
let arr = ["Summer", "Paul", "Adam"];
console.log(arr); // [ 'Summer', 'Paul', 'Adam' ]
arr[1] = "Zach";
console.log(arr); // [ 'Summer', 'Zach', 'Adam' ]

//! challenge
let students = ["Andrew", "Bryson", "Cole", "Dean", ["Jessica", "Steven", "Jonathan"], "Quinton"]
/*
    Dive into a nested array and pull the name Jonathan. Cosole log it, saying 'Hello Jonathan' using string interpolation.
*/
console.log(`Hello ${students[4][2]}`); // 'Hello Jonathan' - accessing index 2 of index 4
console.log(`Hello ${students[3][2]}`); // 'Hello a' - accessing index 2 of index 3 //! accesses the character within the string


//! methods
/*
    in Object Orientied Programming language (OOP) is a procedure that is associated with an object. It's a function that lives inside of a class.
        - denoted by a . at the end of object being worked on.
            -for example, array.map()
*/

let carList = ["BMW M5", "BMW Z4M", "Mercedes 300E", "Masarati GranTurismo S", "Audi S8", "Mercedes E63s"]

// .length method -> returns the length of an array

console.log(carList.length); // 6 //! remember there are 6 items but indexed 0 to 5

console.log(carList[carList.length]); // undefined because there is no index of 6
console.log(carList[carList.length-1]); //Mercedes E63s

// .shift() method -> removes first element from an array
//      - returns removed element
//      - if array empty -> returns undefined

console.log(carList);   //[
                        //     'BMW M5',
                        //     'BMW Z4M',
                        //     'Mercedes 300E',
                        //     'Masarati GranTurismo S',
                        //     'Audi S8',
                        //     'Mercedes E63s'
                        // ]
carList.shift(); // removes first element of array
console.log(carList);   //[
                        //     'BMW Z4M',               //! BMW M5 is gone
                        //     'Mercedes 300E',
                        //     'Masarati GranTurismo S',
                        //     'Audi S8',
                        //     'Mercedes E63s'
                        // ]

//what if you need the element? assign it to a variable

console.log(carList);   //[
                        //     'BMW Z4M',
                        //     'Mercedes 300E',
                        //     'Masarati GranTurismo S',
                        //     'Audi S8',
                        //     'Mercedes E63s'
                        // ]
let removedItem = carList.shift(); // removes first element of array and assigns it to removedItem variable
console.log(carList);   //[
                        //     'Mercedes 300E',         //! BMW Z4M is gone
                        //     'Masarati GranTurismo S',
                        //     'Audi S8',
                        //     'Mercedes E63s'
                        // ]
console.log(removedItem);   //BMW Z4M

// .unshift() method -> adds element to beginning of an array
//      - returns the length of the new array

let newArrayLength = carList.unshift("Porsche 911 GT3");
console.log(carList);   //[
                        //     'Porsche 911 GT3',
                        //     'Mercedes 300E',
                        //     'Masarati GranTurismo S',
                        //     'Audi S8',
                        //     'Mercedes E63s'
                        //   ]
console.log(newArrayLength); // 5 //! but indexed 0 to 4

// .pop() method -> removes last element and returns it

let lastItem = carList.pop();
console.log(carList);   //[
                        //     'Porsche 911 GT3',
                        //     'Mercedes 300E',
                        //     'Masarati GranTurismo S',
                        //     'Audi S8'                //! Mercedes E63s is gone
                        //   ]
console.log(lastItem); // Mercedes E63s

// say we want to take all Mercedes removed from this list and add them to a new array for tracking

let newArr = [];

if (lastItem.includes("Mercedes")) {
    newArr.unshift(lastItem);
    console.log(newArr);            //[ 'Mercedes E63s' ]
}

// .push() method -> adds element to the end of an array
//      - returns new lenght of the array

console.log(carList);                   //[
                                        //     'Porsche 911 GT3',
                                        //     'Mercedes 300E',
                                        //     'Masarati GranTurismo S',
                                        //     'Audi S8'
                                        //   ]
console.log(carList.push("BMW M6"));    // 5 
console.log(carList);                   //[
                                        //     'Porsche 911 GT3',
                                        //     'Mercedes 300E',
                                        //     'Masarati GranTurismo S',
                                        //     'Audi S8',
                                        //     'BMW M6'
                                        //   ]

// .reverse() method -> returns reversed array elements
//      - original array modified

console.log(carList);   //[
                        //     'Porsche 911 GT3',
                        //     'Mercedes 300E',
                        //     'Masarati GranTurismo S',
                        //     'Audi S8',
                        //     'BMW M6'
                        //   ]
console.log(carList.reverse()); //[ 
                                //     'BMW M6',
                                //     'Audi S8',
                                //     'Masarati GranTurismo S',
                                //     'Mercedes 300E',
                                //     'Porsche 911 GT3'
                                //   ] //! this both returns the reverse AND modifies the array (sae next console.log)
console.log(carList);   //[
                        //     'BMW M6',
                        //     'Audi S8',
                        //     'Masarati GranTurismo S',
                        //     'Mercedes 300E',
                        //     'Porsche 911 GT3'
                        //   ]

let myStr = "potato";       //myStr is potato
let myStr2 = myStr;         //myStr2 is potato
myStr2 = "rice";            //myStr2 is reassigned to rice
console.log(myStr, myStr2); //potato rice

myStr = "potato";           //myStr is potato
myStr2 = myStr;             //myStr2 is potato
myStr = "chicken";          //myStr is now chicken, but myStr2 is not reassigned so it is still potato
console.log(myStr, myStr2); //chicken potato

//! variables are primitive
let item1 = "item 1";
let item2 = item1;
console.log(item1, item2); //item 1 item 1
item1 = "item changed";
console.log(item1, item2); //item changed item 1

//! arrays are not primitive
console.log(carList);   //[
                        //     'BMW M6',
                        //     'Audi S8',
                        //     'Masarati GranTurismo S',
                        //     'Mercedes 300E',
                        //     'Porsche 911 GT3'
                        //   ]
let carList2 = carList;
console.log(carList.reverse()); //[                                 //! here we are reversing carList, but ALSO reversing carList2
                                //     'Porsche 911 GT3',
                                //     'Mercedes 300E',
                                //     'Masarati GranTurismo S',
                                //     'Audi S8',
                                //     'BMW M6'
                                //   ] 
console.log(carList2);  //[                                         //! see how carList2 was reversed by line 201
                        //     'Porsche 911 GT3',
                        //     'Mercedes 300E',
                        //     'Masarati GranTurismo S',
                        //     'Audi S8',
                        //     'BMW M6'
                        //   ]

// .slice() method -> returns copy of an array from start to end (non-inclusive)
//      - original array NOT modified
//      - parameters are (start, stop(non-inclusive))

let slicedCarList = carList.slice(0, 3);
console.log(slicedCarList); //[ 'Porsche 911 GT3', 'Mercedes 300E', 'Masarati GranTurismo S' ]
slicedCarList.unshift("Honda"); //! here we are only modifying slicedCarList array, and not the original carList array
console.log(slicedCarList); //[
                            //     'Honda',
                            //     'Porsche 911 GT3',
                            //     'Mercedes 300E',
                            //     'Masarati GranTurismo S'
                            //   ]
console.log(carList);   //[
                        //     'Porsche 911 GT3',
                        //     'Mercedes 300E',
                        //     'Masarati GranTurismo S',
                        //     'Audi S8',
                        //     'BMW M6'
                        //   ]

// .splice() method -> changes contents of an array by removing array item and replacing it with something else
//      - parameters are (start, deleteCount, itemToBeAdded)

let months = ["January", "March", "April", "June"];
months.splice(1, 0, "February");
console.log(months); // [ 'January', 'February', 'March', 'April', 'June' ]
// convert January to Jan
months.splice(0, 1, "Jan");
console.log(months); // [ 'Jan', 'February', 'March', 'April', 'June' ]
months.splice(0, 1, "January"); // changes Jan back to January
months.splice(4, 0, "May"); // adds May in index 4
console.log(months); // [ 'January', 'February', 'March', 'April', 'May', 'June' ]

// .join() method -> creates and returns new string by concatenating all items in an array
//      - parameter is separator (default is ,)

let greetings = ["Hi", "Hello", "Welcome", "Guten tag"];
let nakedJoin = greetings.join();
console.log(nakedJoin); // Hi,Hello,Welcome,Guten tag

let concatJoin = greetings.join("");
console.log(concatJoin); // HiHelloWelcomeGuten tag

let dashJoin = greetings.join("-");
console.log(dashJoin); // Hi-Hello-Welcome-Guten tag

// .includes() -> checks if a value exists and returns true or false

let bulldogs = ["Old English Bulldog", "English Bulldog", "French Bulldog", "Bullmastiff", "Victorian Bulldog"]
let includesFrenchie = bulldogs.includes("French Bulldog")
console.log(includesFrenchie);

// .sort() -> sorts elements as strings in ascending (default) or descending order

console.log(bulldogs.sort());

let cost = [3, 2, 13, 4];
console.log(cost.sort((a,b) => b - a));

//! .forEach() -> executes a fx for each element in an array

let grades = [56, 78, 96, 98, 100, 65];
grades.forEach((element, index) => console.log(element, index));    //56 0
                                                                    // 78 1
                                                                    // 96 2
                                                                    // 98 3
                                                                    // 100 4
                                                                    // 65 5
grades.forEach((item, index, newGrades) => newGrades[index] = item + 15);
console.log(grades); // [ 71, 93, 111, 113, 115, 80 ]

//! .map() -> creates a new array with results from the callback function

let marvelCharacters = ["Captain America", "Black Widow", "Doctor Strange", "Ant Man", "Spider Man", "Angelina Jolie in Eternals say whaaaa?!"]
let marvelCharsCap = marvelCharacters.map((character => character.toUpperCase()));
console.log(marvelCharsCap);    //[
                                //     'CAPTAIN AMERICA',
                                //     'BLACK WIDOW',
                                //     'DOCTOR STRANGE',
                                //     'ANT MAN',
                                //     'SPIDER MAN',
                                //     'ANGELINA JOLIE IN ETERNALS SAY WHAAAA?!'
                                //]

//? THIS CODE DOES NOT WORK YET
//? function teamTS(character) {
//?     if (character == "Black Widow" || character == "Ant Man") {
//?         marvelCharacters[character].toUpperCase();
//?     }
//? }
//? let marvelCharsCap2 = marvelCharacters.map(teamTS);
//? console.log(marvelCharsCap2);
//? THIS CODE DOES NOT WORK YET?

//! .filter() -> creates a new array with elements that pass the test in a callback function

let startsA = marvelCharacters.filter(character => character.startsWith("A"));
console.log(startsA); // [ 'Ant Man', 'Angelina Jolie in Eternals say whaaaa?!' ]

