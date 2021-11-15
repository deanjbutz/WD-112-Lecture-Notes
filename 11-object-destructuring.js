//! Object Destructuring Example:
const user = {
    username: 'testuser',
    is_verified: true
};
const { username, is_verified } = user;
console.log(username); // 'testuser'
console.log(is_verified); // true
const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};
let {
    title: englishTitle, // rename
    translations: [
        {
            title: localeTitle, // rename
        },
    ],
} = metadata;
console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // JavaScript-Umgebung
const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 25
    }
];
for (const { name: n, family: { father: f } } of people) {
    console.log('Name: ' + n + ', Father: ' + f);   // Name: Mike Smith, Father: Harry Smith
                                                    // Name: Tom Jones, Father: Richard Jones
}


//! Destructuring Challenge:
// Challenge:
const instruments = {
    guitars: {
        type: [{
            brand: 'Schecter',
            model: 'Demon 8'
        },
        {
            brand: 'Gibson',
            model: 'Les Paul'
        }
    ]
    },
    drums: {
        type: [{
            brand: 'Pearl',
            model: 'Session Studio'
        },
        {
            brand: 'Gretsch',
            model: 'Catalina Maple'
        },
    ]
    }
}
// ! Bronze
// Declare a variable that contains the guitar and drums object from the instruments object
// in ONE line of code using destructuring.
// console.log it. You should see something like this: [Object, Object][Object, Object]
// ! Silver
// console.log the brand and model of the FIRST INDEX in type array in the guitar object. You will need to use bracket notation and
// dot notation in combination. Separate them with a space
// ! Gold
// Create a function the returns true if the brand of the drum object is Pearl and the model is Session Studio,
// if not, return false. console.log it
// Extra credit: write another function without object destructuring that gives the same result!

const {guitars, drums} = instruments;
console.log(guitars, drums);    // {
                                //     type: [
                                //         { brand: 'Schecter', model: 'Demon 8' },
                                //         { brand: 'Gibson', model: 'Les Paul' }
                                //     ]
                                // }   {
                                //     type: [
                                //         { brand: 'Pearl', model: 'Session Studio' },
                                //         { brand: 'Gretsch', model: 'Catalina Maple' }
                                //     ]
                                // }

console.log(`${guitars.type[0].brand} ${guitars.type[0].model}`); //Schecter Demon 8

function isPearl(i) {
    if (drums.type[i].brand == "Pearl" && drums.type[i].model) {
        return true
    } else {
        return false
    }
}

console.log(isPearl(0)); // true
console.log(isPearl(1)); // false