//! error handling
/*
    error handling allows the application to continue to run even if an outside resource causes an error in our app
    error handling is done using:
        - try
            - holds the code that will be tested
        - catch
            - holds the code to be executed when an error occurs
        - throw
            - allows generating custom errors
        - finally
            - holds the code to be executed regardless of the result
*/

//! example 1
// try {
//     console.log("The code begins.");
// } finally {
//     console.log("Finally always runs.");
// }

//! example 2
// let myName = "Paul"
// try {
//     if (myName == "Paul") {
//         console.log(myName);
//     }
// } finally {
//     console.log("Finally always runs.");
// }

//! example 3
// try {
//     if (myName) {
//         console.log(myName);
//     }
//     // try fails; catch takes over and returns an error
// } catch(err) {                                          //! we are simply assigning the returned error to the variable "err"
//     console.log("Error has occured: " + err);
//     // err.name returns just error name
//     // err.stack returns trace of the error
//     // must be used in browser console
// }
// rest of application continues to run

//! example 4       this is to show a syntax error causes the application to break, unlike a runtime error like the examples above
// try {
//     {                                           //! this extra curly bracket causes a syntax error
//     if (myName) {
//         console.log(myName);
//     }
// } catch(err) {
//     console.log("Error: " + err);
// } finally {
//     console.log("This always runs.");
// }

let json = '{ "age": 30}'           //! creating json as a string just as a real response would be retrieved

try {
    let user = JSON.parse(json)
    if (!user.name) {
        throw new SyntaxError("Incomplete Data: No Name")
    }
    console.log(user.name);
} catch(err) {                      //! catch will catch and return first error received
    console.log("Json Error: " + err.message); // Json Error: Incomplete Data: No Name
}

console.log("Global scope execution continues.");