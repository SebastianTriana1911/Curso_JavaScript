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


// Logical operator and (&&)
let f = true;
let g = false;
console.log(f && f); // Return True
console.log(f && g); // Return False 
console.log(g && f); // Return False 
console.log(g && g); // Return False 

// AND operator with data types different of the boolean
console.log(0 && undefined); // If both operator are false, return the value of first: 0
console.log(null && 55); // Return first operator: null 
console.log(12 && -1); // Return second operator: -1
console.log(20 && 25); // If both operator are true, return the first value: 25

// Multiple values applied to the AND operator
console.log(1 && 2 && null); // Return the first value false: null
console.log(0 && -1 && undefined); // Return the first value false: 0
console.log(1 && 2 && 3); // Return the last value true: 3

// Logical operator not (!)
// The not operator works when you want to deny something, if you have a variable with a true value when you deny it its value becomes false
let h = 100;
let i = 50;
console.log(!(h == i)); // True


// Logical operator Ternario
// Sintaxis: condicionEvaluar ? expresion1(Si es verdadero):expresion2(Si es falso)
let age = 18;
let assess = (age >= 18) ? "You are of legal age" : "You are not legal age";
console.log(assess)


// Operator optional chaining (Encadenamiento opcional)
// This operator works with the syntax "?.", it is used to call properties of an object, in order to not break the code when calling an attribute which has a null or undefined value, otherwise it will show that the value of that attribute was either null or undefined.

const person = {
    namePerson : "Sebas",
    agePerson : null,
    address : "Soacha"
};
const agePerson = person?.agePerson;
console.log(agePerson);