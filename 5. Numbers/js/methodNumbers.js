// METHOD OF THE NUMBERS IN JAVASCRIPT

// toExponential(): Converts the number to notation exponential. (Syntax: number.toExponention(x))
let number = 5.43210;
console.log(number.toExponential());
console.log(number.toExponential(2));
console.log(number.toExponential(3));

// toFixed(): Rounds the number to "n" digits after of decimal point. (Syntax: number.toFixed(x))
let round = 10.9448659;
console.log(round.toFixed()); // Return 11 
console.log(round.toFixed(3));
console.log(round.toFixed(1));
console.log(round.toFixed(10)); // Add "0" until completed the amount of parameter
console.log(round.toFixed()); // 

// inaccurate calculations
let sum = 0.1 + 0.2;
console.log(sum); // 0.3000000000
console.log(+sum.toFixed(1)); // Change to integer data type with the sign "+" and round the result to one decimal

// toPrecision(): Define the precision of a number (Syntax: number.toPrecision(x))
let precision = 10.9448659;
console.log(precision.toPrecision());
console.log(precision.toPrecision(5));
console.log(precision.toPrecision(3));
console.log(precision.toPrecision(2));

// toPrecision(): with decimal number more small
let precisionTwo = 0.0015543;
console.log(precisionTwo.toPrecision());
console.log(precisionTwo.toPrecision(3));
console.log(precisionTwo.toPrecision(2));

// toString(): Convert a number in a string (Syntax: number.toString(x))
let text = 255;
console.log(text.toString());
console.log(text.toString(2)); // Base Binarie
console.log(text.toString(8)); // Base Octal
console.log(text.toString(16)); // Base Exadecimal