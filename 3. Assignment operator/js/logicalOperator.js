// LOGICAL OPERATOR

// Logical operator or (||)
let value1 = true;
let value2 = false;
console.log(value1 || value1); // True
console.log(value1 || value2); // True
console.log(value2 || value1); // True
console.log(value2 || value2); // False

// Or operator with types of data different of the booleans (clasic logic)
let a = 8;
let b = 6;
console.log(a == 8 || b == 6); // True
console.log(a == 8 || b == 12); // True
console.log(a == 10 || b == 6); // True
console.log(a == 20 || b == 30); // False 

// Or operator with types of data different of the booleans (Modern JS logic)
console.log(8 || 6); // Returns the first value true: 8
console.log(8 || undefined); // Returns 8
console.log(null || 6); // Returns 6
console.log(0 || -1); // Returns -1, the second value false

// Multiple values applied to the operator or
let name; 
let lastName;
let nameUser = "admin";
console.log(name || lastName || nameUser);

let value3;
let value4 = null;
let value5 = 0;
console.log(value3 || value4 || value5); // Return the last value false 

let c = 1;
let d = 10;
let e = 20;
console.log(c || d || e); // If all are true, return the first value
