// ARRAYS IN JAVASCRIPT

// Literal array, using brackets [...]
const fruit = ["apples", "pears", "grapes", "peaches", "blackberries",];
console.log(fruit);

// Through the constructor, using the reserved word new (Not recommended)
const fruit2 = new Array("apples", "pears", "grapes", "peaches", "blackberries",);
console.log(fruit2);

// Access to array of elements
console.log(fruit[0]); // Return apples
console.log(fruit[1]); // Return pears
console.log(fruit[2]); // Return greapes
console.log(fruit[3]); // Return peaches
console.log(fruit[4]); // Return blackberries
console.log(fruit[5]); // Return undifined, because not exists

// Access through the method .at()
console.log(fruit.at(1)); // Return pears

// Access the last element
console.log(fruit.at(-1)); // Return blackberries
/* NOTE: Using this method allows you to pass negative signs as a parameter, to start counting indexed from the last to the first. Using notation brackets cannot be */

// Modify a element
console.log(fruit[0] = "apple");

// Added a new element
console.log(fruit[5] = "melons");

// Property length: Indicates the number of element that possesses the array. (Syntax: nameArray.length)
console.log(fruit.length);
console.log(fruit.length = 2); // The method length also allows trim by a certain number of indices

// Access the last element of array Through the property length
console.log(fruit[fruit.length -1]);

// COMPARE IF A VARIABLES IS A ARRAY
// Method Array.isArray(): Determines if the value past is a array. (Syntax: Array.isArray(value))
const exampleVariable = "";
console.log(Array.isArray(fruit)); // Return true
console.log(Array.isArray(exampleVariable)); // Return false since it is not a array

// Through the operator typeof
console.log(typeof fruit); // Return "object" since the arrays are specials object. Best practice use the method Array.isArray()