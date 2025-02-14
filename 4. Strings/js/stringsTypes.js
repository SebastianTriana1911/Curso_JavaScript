// STRINGS

// Single quotres
let single = 'Example of string with single quotes';

// Double quotes
let double = "Example of string with double quotes";

// Backticks
let backticks = `Example of string with Backticks`; // ALT + 96

// Escape Character for carry out jumps of line
let text = "Escape \nCharacter"
console.log(text)

// STRING TEMPLATE
let listOfCountries = `Countries:
- Argentina
- Colombia
- Canada
- Peru`
console.log(listOfCountries);

// Concatenate strings (clasic JS)
let phrase1 = "phrase";
let phrase2 = "concatenate";
console.log("This" + " " + phrase1 + " " + phrase2) 

let text2 = "My name is";
text2 += "Sebastian";
console.log(text2);

// Interpolation of expressions 
let phrase3 = "phrase";
let phrase4 = "concatenate";
console.log(`This ${phrase3} is also ${phrase4}`)