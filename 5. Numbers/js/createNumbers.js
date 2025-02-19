// FORM OF CREATE NUMBER

// Literal notation
let integer = 5;
console.log(integer); // 5

let decimal = 15.86;
console.log(decimal); // 15.86

// Notation with objec (Not recommended)
let integerObjec = new Number(5); 
console.log(integerObjec); // 5

let decimalObject = new Number(15.86);
console.log(decimalObject); // 15.86

// HEXADECIMAL NUMBER, BINARIES AND OCTALES
// Hexadecimal number
let hexadecimal = 0xff;
console.log(hexadecimal); // It convert in natural number 225

// Octal number
let octal = 0o10;
console.log(octal); // Return number 8

// Binarie number
let binarie = 0b11111111;
console.log(binarie); // Return number 225 in binarie


// FORM OF WRITE NUMBER IN JS
// Simplify large values unsig underscores
let milMillon = 1_000_000_000;
console.log(milMillon); // 1000000000

// Simplify by notation scientific
let twoMilMillon = 2e9; // The "e" means how many "0" will go on the right side
console.log(twoMilMillon); //2000000000

let microseg = 1e-6; // Represent how many "0" will go left side of main number
console.log(microseg); // 0.000001

// WORK WITH NUMBER AND STRING
let a = 5;
let b = 10;
console.log(a+b) // 15

let c = "10";
let d = "20";
console.log(c+d); // 1020

let e = 30;
let f = "40";
console.log(e+f); // 3040

// When strings are used for operations different than "add", return as result the number of the operation assigned 
let g = "10";
let h = "2";
console.log(g / h); // 5
console.log(g * h); // 20
console.log(g - h); // 8
console.log(g ** h); // 100