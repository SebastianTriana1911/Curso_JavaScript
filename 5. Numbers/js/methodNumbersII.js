// METHOD OF THE NUMBERS IN JAVASCRIPT (II)

// isFinite(): Determines if the velue is a number finite (Syntax: Number.isFinite(value))
const num = 123456789;
console.log(Number.isFinite(num)); // Return true
console.log(Number.isFinite(123456789)); // Return true
console.log(Number.isFinite(5 * 8)); // Return true ("40" number finite)
console.log(Number.isFinite(20 / 0));
console.log(Number.isFinite("300")); // Return false, because is a string
console.log(Number.isFinite(+"300")); // Adding the sign before the string converts it to a number
console.log(Number.isFinite(Infinity)); // Return false
console.log(Number.isFinite(NaN)); // Return false

// isInteger(): Determines if the value is a number integer (Syntax: Number.isInteger(value))
console.log(Number.isInteger(455)); // Return true
console.log(Number.isInteger(-9)); // Return true, is a number integer negative
console.log(Number.isInteger(5 / 2)); // Return false, The result is a number decimal "2.5"

// isSafeInteger(): Determine if the value past is a number integer (Syntax: Number.isSafeInteger(value))
console.log(Number.isSafeInteger(8)); // Return true
console.log(Number.isSafeInteger(123456789874561230)) // Return false

// isNaN(): Determine is the value is a NaN (Syntax: Number.isNaN(value))
console.log(Number.isNaN(NaN)); // Return true
console.log(Number.isNaN(0 / 0)); // Return true
console.log(Number.isNaN("Hello")) // Return false