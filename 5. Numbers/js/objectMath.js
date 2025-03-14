// PROPERTIES MATH OBJET

// Math.E: Number or contant of Euler, base of the logarithms neperianos
console.log(Math.E);

// Math.PI: Number PI, than relates the circumferences to its diameter
console.log(Math.PI);

// Math.SQRT2: square root of two
console.log(Math.SQRT2);

// Math.SQRT1_2: Square root of a medium
console.log(Math.SQRT1_2);

// Math.LN2: Logarithms neperiano of 2
console.log(Math.LN2);

// Math.LN10: Logarithms neperiano of 10
console.log(Math.LN10);

// Math.LOG2E: Logarithms in base 2 of e
console.log(Math.LOG2E);

// Math.LOG10E: Logarithms in base 10 of e
console.log(Math.LOG10E);

// METHOD MATH OBJECT
// Math.pow(): Return n raised to the power (Syntax: Math.pow(n,power))
console.log(Math.pow(8,4)); // Return 4096

// Math.sqrt(): Get square root of the number passed as argument (Syntax: Math.sqrt(num))
console.log(Math.sqrt(144)); // Return 12

const squareRoot = 200;
console.log(Math.sqrt(squareRoot)); // Return 14.142135623730951

// Math.abs(): Absolute value, ignore the sign of number and transforming it always in positive (Syntax: Math.abs(num))
console.log(Math.abs(-349)) // Return of number positive

// Math.round(): Return the value of the given round the integer more nearby
console.log(Math.round(49.34)); // Return 49
console.log(Math.round(49.56)); // Return 50

// Math.ceil(): Return the integer greater or equal to the more nearest to given number. (Syntax: Math.ceil(x))
console.log(Math.ceil(1.4)); // Return 2
console.log(Math.ceil(1.6)); // Return 2
console.log(Math.ceil(5.1)); // Return 6

// Math.floor(): Return the integer immediately below to a given number (Syntax: Math.floor(x))
console.log(Math.floor(1.4)) // Return 1
console.log(Math.floor(1.6)) // Return 1
console.log(Math.floor(5.1)) // Return 5
console.log(Math.floor(-5.9)) // Return -6

// Math.max(): Return the number greater of between an arbitrary number of arguments (Syntax: Math.max(x))
console.log(Math.max(3,8,12,-9,5,0.5,0)); // Return the number greater between one series of number

// Math.min(): Return the number minor of between an arbitrary number of arguments (Syntax: Math.min(x))
console.log(Math.min(3,8,12,-9,5,0.5,0)); // Return the number minor between one series of number

// Math.random(): Return in number random between 0 and 1
console.log(Math.random()); // Return number random greater than 0 and minor than 1
console.log(Math.random() * 100); // Return number random of 0 to 100
console.log(Math.floor(Math.random() * 100) + 1); // Return number random of 0 to 100, except than it converts an integer

// Math.log(): Return the logarithm natura in base e of x (Syntax: Math.log(x))
console.log(Math.log(4)); // Return 1.3862943611198906
