// create a funtion to remove the spaces found in a string
// and return a string with spaces removed

function removeSpaces(string) {
    newStringArray = string.split(" ");
    newString = newStringArray.join('')
    console.log(newString);
}
removeSpaces("remove the spaces test.")

function removeSpaces(string) {
    console.log(string.split(" ").join(''));
}
removeSpaces("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus elementum accumsan. Phasellus gravida risus nec placerat viverra. Suspendisse efficitur libero ut magna suscipit maximus id a justo. Nullam volutpat enim ut venenatis luctus. Mauris sed lacinia massa, eget mattis erat. Vestibulum eleifend nulla nibh, ut viverra ligula finibus at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut porta nulla. In hac habitasse platea dictumst. Suspendisse risus enim, suscipit ut dignissim quis, fringilla a felis. Sed euismod consequat pulvinar. Vivamus ac metus pulvinar, tristique sapien et, imperdiet arcu. Pellentesque congue est magna, ac egestas magna consectetur quis. Vestibulum ultrices non augue vel convallis. Donec maximus, est eu hendrerit dictum, elit lectus ullamcorper eros, sed gravida justo felis quis ex.")

//? OR

function removeSpaces(string) {
    let strRemoved;
    for (i in string) {                         // for in will return 0123456789...
        console.log(i);
        }
}
removeSpaces("Remove the spaces in this string.")

function removeSpaces(string) {
    let strRemoved;
    for (i of string) {                         // for of will return "Remove the spaces in this string.""
        console.log(i);
        }
}
removeSpaces("Remove the spaces in this string.")

function removeSpaces(string) {
    let strRemoved = "";
    for (i of string) {                         
        if (i !== " ") {
            strRemoved = strRemoved + i
        }
    }
    return strRemoved
}
console.log(removeSpaces("Remove the spaces in this string."))

function cleanupEmail(email) {
    let goodEmail = "";
    let acceptableChars = "ABCDEFGHIJKLMNOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz0123456789@.";
    for (i of email) {
        if (acceptableChars.includes(i) === true) {
            goodEmail = goodEmail + i
        }
    }
    return goodEmail
}
console.log(cleanupEmail("te$t@email!.com"));
