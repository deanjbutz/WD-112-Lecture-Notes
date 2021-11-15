//! classes

/*
    templates for creating objects. they encapsulate data with code. JS is a heavily prototype-based OOP language

    classes are considered special functions and therefore can be defined as:
        - class declaration
        - class expression
*/

//! class declaration

class Identifier {
    // constructor - a class method for creation and initilization of a class object.
    constructor(param1, param2, param3, param4) {
        this.param1 = param1
        this.param2 = param2
        this.param3 = param3
        this.param4 = param4
    }
}

// class name should always be PascalCase
class Teacher {
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name
        this.subject = subject
        this.tenure = tenure
        this.isPolyglot = isPolyglot
    }

    // class body
}

//creating new instance of Teacher Class Declaration

let pNiemczyk = new Teacher("Paul", "web dev", 2020, true)
pNiemczyk.subject = "Math"

console.log(pNiemczyk);

// creating objects for every teacher is laborious
// class provides us an easy template to reuse over and over again.

//!
// let teacher = {
//     name: undefined,
//     subject: undefined,
//     tenure: undefined,
//     isPolyglot: undefined
// }

// let teacher2 = teacher
// console.log(teacher);
// console.log(teacher2);

// teacher.name = "Paul"       //! here we are updating both teacher and teacher2
// teacher.subject = "Math"    //! THIS IS WHY WE HAVE CLASSES, SO WE CAN HAVE MULTIPLE OBJECTS WITH DIFFERENT PROPERTIES

// console.log(teacher);
// console.log(teacher2);
//!


//! class expression

let Identifier2 = class {
    constructor(param1, param2, param3, param4) {
        this.param1 = param1
        this.param2 = param2
        this.param3 = param3
        this.param4 = param4
    }
}

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }
}

let $5422MeadowoodDr = new House("5422 Meadowood Dr.", 3, 1.5)
console.log($5422MeadowoodDr);
let $1742LincolnRd = new House("1742 Lincoln Road", 3, 2)
console.log($1742LincolnRd);


//! class methods
/*
    method is a function that lives within a class that can be reused on any class instance
*/

class Car {
    constructor(make, model, year, transmission) {
        this.make = make
        this.model = model
        this.year = year
        this.transmission = transmission
    }

    greetCar() {
        console.log(`Welcome to your ${this.year} ${this.make} ${this.model}!`);
    }

    greetDriver(driver) {
        console.log(`Hello ${driver}, your ${this.make} is ready to go.`);
    }

    age(currentYear) {
        let result = currentYear - this.year
        return `Your car is ${result} years old.`
    }
}

let jeep = new Car("Jeep", "Wrangler", 2019, "Manual")
console.log(jeep);  // Car {
                    //     make: 'Jeep',
                    //     model: 'Wrangler',
                    //     year: 2019,
                    //     transmission: 'Manual'
                    // }
jeep.greetCar(); // Welcome to your 2019 Jeep Wrangler!
jeep.greetDriver("Dean"); // Hello Dean, your Jeep is ready to go.
console.log(jeep.age(2021)); // Your car is 2 years old.

//! challenge
/*
    create a class object called Avengers. Avengers will have properties of name, superpower, age, isDead, keyMovie.

    Create an instance of that object with the superhero name and its properties

    ? create a method that console logs the name and keyMovie together

    ! spicey mode
    ! create a method that takes the name of the superhero and checks it against two arrays. One with team cap and one with team stark and returns which team the superhero as a part of during civil war
*/

class Avengers {
    constructor(name, superpower, age, isDead, keyMovie) {
        this.name = name
        this.superpower = superpower
        this.age = age
        this.isDead = isDead
        this.keyMovie = keyMovie
    }

    movie() {
        console.log(`${this.name}'s key movie is ${this.keyMovie}.`);
    }

    team(extraAvenger) {
        const teamCap = ["Captain America", "Hulk"]
        const teamStark = ["Iron Man", "Star-Lord"]
        if (teamCap.includes(this.name)) {
            console.log("Team Cap");
        } else if (teamStark.includes(this.name)) {
            console.log("Team Stark");
        } else if (teamCap.includes(extraAvenger)) {
            console.log("Team Cap");
        } else if (teamStark.includes(extraAvenger)) {
            console.log("Team Stark");
        } else {
            console.log("Team not found.");
        }
    }
}

let starlord = new Avengers("Star-Lord", "Star-Power", 45, false, "Guardians of the Galaxy")
let captAmerica = new Avengers("Captain America", "super strength", 72, false, "Captain America")
let antMan = new Avengers("Ant Man", "Shrink", 37, false, "Ant Man")
console.log(starlord);  // Avengers {
                        //     name: 'Star-Lord',
                        //     superpower: 'Star-Power',
                        //     age: 45,
                        //     isDead: false,
                        //     keyMovie: 'Guardians of the Galaxy'
                        // }
starlord.movie() // Star-Lord's key movie is Guardians of the Galaxy.
starlord.team() // Team Stark
captAmerica.team() // Team Cap
antMan.team() // Team not found.
antMan.team("Star-Lord"); // Team Stark
antMan.team(" "); // Team not found.


//! inheritance
//! extends
/*
    "extends" creates a class that is a child of another (parent) class
*/

//? copied from above \/ \/ \/ 
// class Car {
//     constructor(make, model, year, transmission) {
//         this.make = make
//         this.model = model
//         this.year = year
//         this.transmission = transmission
//     }

//     greetCar() {
//         console.log(`Welcome to your ${this.year} ${this.make} ${this.model}!`);
//     }

//     greetDriver(driver) {
//         console.log(`Hello ${driver}, your ${this.make} is ready to go.`);
//     }

//     age(currentYear) {
//         let result = currentYear - this.year
//         return `Your car is ${result} years old.`
//     }
// }

class Options extends Car {
    constructor(
        make,
        model,
        year,
        transmission,
        hasLeather,
        hasComfortAccess,
        hasSportPackage
    ) {
        //super method inherits parent class' properties & methods
        super(make, model, year, transmission)
        this.hasLeather = hasLeather
        this.hasComfortAccess = hasComfortAccess
        this.hasSportPackage = hasSportPackage
    }

    isCPO(currentYear) {
        let result = currentYear - this.year
        return result >= 6
            ? `Your ${this.model} is out of warranty.`
            : `Your warranty is still active.`
    }
}

let maseratiGTS = new Options("Maserati", "GranTurismo S", 2015, "auto", true, false, true);
console.log(jeep);  // Car {
                    //     make: 'Jeep',
                    //     model: 'Wrangler',
                    //     year: 2019,
                    //     transmission: 'Manual'
                    // }
console.log(maseratiGTS);   // Options {
                            //     make: 'Maserati',
                            //     model: 'GranTurismo S',
                            //     year: 2015,
                            //     transmission: 'auto',
                            //     hasLeather: true,
                            //     hasComfortAccess: false,
                            //     hasSportPackage: true
                            // }

console.log(maseratiGTS.isCPO(2021)); // Your GranTurismo S is out of warranty.
//console.log(jeep.isCPO(2021)); // TypeError: jeep.isCPO is not a function //! jeep was not created using Options class (child), but Car class (parent)


class DateFormatter extends Date {
    getFormattedDate() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        return `${this.getDate()} - ${months[this.getMonth()]} - ${this.getFullYear()}`
    }
}
console.log(new DateFormatter("June 29, 2021 12:15:00").getFormattedDate()); // 29 - Jun - 2021


//! challenge
/*
    extend the House class with one called Sale.
    Sale should have properties appraisalValue (int), listPrice (int), agent (str), and isListed (bool).
    Create a method which calculates the difference between appraisalValue and the listPrice.
    Add a conditional that will check if listPrice is 20% higher than appraisal.
    If it is >20, not worth it. Otherwise, a good deal.
    The return should also include the dfference between the two values.

    let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }
}


*/

class Sale extends House {
    constructor(
        address,
        bedrooms,
        bathrooms,
        appraisalValue,
        listPrice,
        agent,
        isListed
    ) {
        super(address, bedrooms, bathrooms)
        this.appraisalValue = appraisalValue
        this.listPrice = listPrice
        this.agent = agent
        this.isListed = isListed
    }

    calculateDifference() {
        let difference = (this.listPrice - this.appraisalValue)
        if (this.listPrice > (this.appraisalValue*1.2)) {
            return `This is not worth it. The list price is ${difference} more than the appraisal value of ${this.appraisalValue}.`
        } else {
            return `This is a good deal. The list price is only ${difference} more or less than the appraisal value of ${this.appraisalValue}.`
        }
    }
}

let $123TestAve = new Sale("123 Test Ave.", 4, 3.5, 100000, 120001, "Homer Sales", true);
let $456TestRd = new Sale("456 Test Road", 3, 2, 100000, 119999, "Marge Sales", true);
console.log($123TestAve.calculateDifference());
console.log($456TestRd.calculateDifference());

