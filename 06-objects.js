//! objects
/*
    objects - containers for values in a JavaScript Object Notation format (JSON)
        - exist as a string
        - has properties and methods
            - .property
            - .method()
*/

let student = {
    // key: value pairs which are comma separated
    fName: "Dean",
    lName: "Butz",
    address: "5422 Meadowood Dr.",
    isEnrolled: true,
    balancePaid: 13500,
}

console.log(student);   //{
                        //  fName: 'Dean',
                        //  lName: 'Butz',
                        //  address: '5422 Meadowood Dr.',
                        //  isEnrolled: true,
                        //  balancePaid: 13500
                        //}
console.table(student); // ┌─────────────┬──────────────────────┐   //! .table instead of .log
                        // │   (index)   │        Values        │
                        // ├─────────────┼──────────────────────┤
                        // │    fName    │        'Dean'        │
                        // │    lName    │        'Butz'        │
                        // │   address   │ '5422 Meadowood Dr.' │
                        // │ isEnrolled  │         true         │
                        // │ balancePaid │        13500         │
                        // └─────────────┴──────────────────────┘
console.log(student.fName); // Dean
console.log(student["fName"]); // Dean
console.log(student["balancePaid"]); // 13500
console.log(student.fName, student.lName); // Dean Butz
console.log(student["fName", "lName"]); // Butz                 //! does not console.log the fName
console.log(student["fName"], student["lName"]); // Dean Buz

let returnKeys = Object.keys(student);
console.log(returnKeys); // [ 'fName', 'lName', 'address', 'isEnrolled', 'balancePaid' ]

//object property reassignment

console.log(student.balancePaid); // 13500
student.balancePaid = 0;                            //this is called property reassignment (.)
console.log(student.balancePaid); // 0

console.log(student.address); // 5422 Meadowood Dr.
student.address = "1742 Lincoln Road"               // this is also called property reassignment (.)
console.log(student.address); // 1742 Lincoln Road

console.log(student.isEnrolled); // true
student["isEnrolled"] = false;                      // this is called key reassignment ([])
console.log(student.isEnrolled); // false

let studentValues = Object.values(student);
console.log(studentValues); // [ 'Dean', 'Butz', '1742 Lincoln Road', false, 0 ]

// object constructor

let client = new Object;
console.log(client); // {}

// property assignment
client.firstName = "Dean";
client.lastName = "Butz";
client.birthYear = 1989;
console.log(client); // { firstName: 'Dean', lastName: 'Butz', birthYear: 1989 }

let manager = {
    name: "Summer Kerekes",
    position: "manager",
    isActive: true,
    department: "technology",
    reportsTo: ["Paul", "Adam", "Ing"],
    caresFor: {
        trainees: ["Corynne", "Isaiah", "Dean"],
        learnA: ["Adam", "Chelsey"]
    }
}

//! challenge
/*
    1. console.log that this manager report to Ing
    2. console.log who Summer cares for when it comes to trainees
    3. add "Jonathan" to the learning assistants array
*/

console.log(`This ${manager.position} reports to ${manager.reportsTo[2]}.`); //This manager reports to Ing.
console.log(`${manager.name} cares for ${manager.caresFor.trainees.slice(0, (manager.caresFor.trainees.length-1)).join(", ")} and ${manager.caresFor.trainees.slice(manager.caresFor.trainees.length-1)}.`); //Summer Kerekes cares for Corynne, Isaiah and Dean.
manager.caresFor.learnA.push("Jonathan");
console.log(manager.caresFor.learnA); //[ 'Adam', 'Chelsey', 'Jonathan' ]

//! challenge
/*
    utilize a filter to method to create a new array with presidents who were born after the 1900s.
*/
const presidents = [
    { first: 'George', last: 'Washington', year: 1732, passed: 1799 },
    { first: 'John', last: 'Adams', year: 1735, passed: 1826 },
    { first: 'Thomas', last: 'Jefferson', year: 1743, passed: 1826 },
    { first: 'James', last: 'Madison', year: 1751, passed: 1836 },
    { first: 'James', last: 'Monroe', year: 1758, passed: 1831 },
    { first: 'John', last: 'Adams', year: 1767, passed: 1848 },
    { first: 'Andrew', last: 'Jackson', year: 1767, passed: 1845 },
    { first: 'Martin', last: 'Van Buren', year: 1782, passed: 1862 },
    { first: 'William', last: 'Harrison', year: 1773, passed: 1841 },
    { first: 'John', last: 'Tyler', year: 1790, passed: 1862 },
    { first: 'James', last: 'Polk', year: 1795, passed: 1849 },
    { first: 'Zachary', last: 'Taylor', year: 1784, passed: 1850 },
    { first: 'Millard', last: 'Fillmore', year: 1800, passed: 1874 },
    { first: 'Franklin', last: 'Pierce', year: 1804, passed: 1869 },
    { first: 'James', last: 'Buchanan', year: 1791, passed: 1868 },
    { first: 'Abraham', last: 'Lincoln', year: 1809, passed: 1865 },
    { first: 'Andrew', last: 'Johnson', year: 1808, passed: 1875 },
    { first: 'Ulysses', last: 'Grant', year: 1822, passed: 1885 },
    { first: 'Rutherford', last: 'Hayes', year: 1822, passed: 1893 },
    { first: 'James', last: 'Garfield', year: 1831, passed: 1881 },
    { first: 'Chester', last: 'Arthur', year: 1829, passed: 1886 },
    { first: 'Grover', last: 'Cleveland', year: 1837, passed: 1908 },
    { first: 'Benjamin', last: 'Harrison', year: 1833, passed: 1901 },
    { first: 'William', last: 'McKinley', year: 1843, passed: 1901 },
    { first: 'Theodore', last: 'Roosevelt', year: 1858, passed: 1919 },
    { first: 'William', last: 'Taft', year: 1857, passed: 1930 },
    { first: 'Woodrow', last: 'Wilson', year: 1856, passed: 1924 },
    { first: 'Warren', last: 'Harding', year: 1865, passed: 1923 },
    { first: 'Calvin', last: 'Coolidge', year: 1872, passed: 1933 },
    { first: 'Herbert', last: 'Hoover', year: 1874, passed: 1964 },
    { first: 'Franklin', last: 'Roosevelt', year: 1882, passed: 1945 },
    { first: 'Harry', last: 'Truman', year: 1884, passed: 1972 },
    { first: 'Dwight', last: 'Eisenhower', year: 1890, passed: 1969 },
    { first: 'John', last: 'Kennedy', year: 1917, passed: 1963 },
    { first: 'Lyndon', last: 'Johnson', year: 1908, passed: 1973 },
    { first: 'Richard', last: 'Nixon', year: 1913, passed: 1994 },
    { first: 'Gerald', last: 'Ford', year: 1913, passed: 2006 },
    { first: 'Jimmy', last: 'Carter', year: 1924, passed: undefined },
    { first: 'Ronald', last: 'Reagan', year: 1911, passed: 2004 },
    { first: 'George', last: 'Bush', year: 1924, passed: 2018 },
    { first: 'Bill', last: 'Clinton', year: 1946, passed: undefined },
    { first: 'George', last: 'Bush', year: 1946, passed: undefined },
    { first: 'Barack', last: 'Obama', year: 1961, passed: undefined },
    { first: 'Donald', last: 'Trump', year: 1946, passed: undefined },
];

//console.log(presidents.filter(presidents.year => presidents.year >= 1900));

console.log(presidents.filter((year, i) => presidents[i].year >= 1900));

//? OR

console.log(presidents.filter(i => i.year >= 1900));

//? or assign it to a variable

let presidents1900 = presidents.filter(i => i.year >= 1900);
console.log(presidents1900);

//! challenge continued
/*
    with your brand spankin' new filtered array, utilize a forEach method and print me a string interpolated names of those presidents.
*/

// let presidents1900Names = presidents1900.forEach(i => `${i.first}, ${i.last}`);
// console.log(presidents1900Names);

presidents1900.forEach(i => console.log(`${i.first} ${i.last}`));

//? OR

let presidents1900Names = presidents1900.forEach(i => presidents1900Names = `${i.first} ${i.last}`);
console.log(presidents1900Names);