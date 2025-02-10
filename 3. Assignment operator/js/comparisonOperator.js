// COMPARISON OPERATOR

let a = 5;

// Equality operator
console.log(a == 18);
console.log(a == 5);
console.log(a == "5");

// Inequality operator
console.log(a != 20);
console.log(a != "5");

// Identity operator or strict equality operator
// The strict equality operator validate the value of the variable and this type
console.log(a === 5); // Identity operator
console.log(a === "5"); 

// Not identical operator o not strict equialitu operator
console.log(a !== 20); // Not identical
console.log(a !== 5);
console.log(a !== "5");

// Greater than operator
console.log(a > 10);

// Grater or equal to
console.log(a >= 10);
console.log(a >= 5);

// Less than operator
console.log(a < 10);

// Less or equal to
console.log(a <= 10);
console.log(a <= 5);

// Comparing numbers and text strings with the Greater than and Less than operaton 
console.log(5 < "18");
console.log("5" > "18");
console.log("Z" > "A");
console.log("Z" > "a ");

// Undefined
let value1;
console.log(typeof(value1));

// Null
let value2 = null;
console.log(typeof(value2));

// Compare nulls with undefined
console.log(value1 == value2);