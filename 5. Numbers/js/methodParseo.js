// METHOD OF THE NUMBERS IN JAVASCRIPT (III)

// parseInt(): Convert a string to a integer number (Syntax: parseInt(string, [radix]))
console.log(parseInt("10")); // Return 10
console.log(parseInt(" 10")); // The method parseInt() detects not whitespace
console.log(parseInt("-20")); // Return -20
console.log(parseInt("55.3")); // Return the amound of number, before of sign
console.log(parseInt("5 años")); // Return 5
console.log(parseInt("6,563")); // Return 6, take the number before of sign
console.log(parseInt("")); // Return NaN

// Convert base numberic (Radix)
console.log(parseInt("1111", 2))
console.log(parseInt("010", 8))
console.log(parseInt("0xff", 16))

// parseFloat(): Convert a string to a decimal number (Syntax: parseFloat(string))
console.log(parseFloat("20.5"));
console.log(parseFloat(" 3.1415 "));
console.log(parseFloat("543e-5"));
console.log(parseFloat("num.12")); // Return NaN because the first element is not a number 
console.log(parseFloat("1.4 3.5")); // Take the first decimal number
console.log(parseFloat(Infinity));
