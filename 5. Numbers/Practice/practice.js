/* 🟢 Level 1: Basic (Understanding Number Methods)
1️⃣ Check if a number is an integer
Write a function isInteger(num) that returns true if num is an integer, otherwise false. */
function isInteger(num){
    return Number.isInteger(num); // The method than the Number class has "isInteger" determine if value or variables are integer
};
console.log(isInteger("1")); // Return False
console.log(isInteger(1)); // Return True

/* 2️⃣ Round a decimal number
Create a function roundNumber(num) that rounds a number to the nearest integer. */
function roundNumber(decimalNum, decimalCount){
    return decimalNum.toPrecision(decimalCount); // The method "to.Precision" allows get a count of decimals
};
console.log(roundNumber(12.99, 2)); // Return 13

/* 3️⃣ Convert a number to a string
Write a function numberToString(num) that converts a number to a string. */
function numberToString(number){
    return number.toString(); // Convert a number in string
};
console.log(numberToString(10)) // Return "10"


/* 🟡 Level 2: Intermediate (Combining Number and String Methods)
4️⃣ Fix decimal places
Write a function formatDecimal(num, decimals) that rounds num to a given number of decimal places. */
function formatDecimal(num, decimal){
    return num.toFixed(decimal);
};
console.log(formatDecimal(3.14159, 2)); // Return "3.14"

/* 5️⃣ Extract digits from a number
Write a function extractDigits(num) that takes a number and returns an array with its individual digits. */
function extractDigits(num){
    return num.toString().split("").map(Number);
};
console.log(extractDigits(123456));

/* 6️⃣ Find the maximum and minimum number in an array
Write a function findMinMax(arr) that returns an object with the smallest and largest number in an array. */
function findMinMax(array){
    return {min: Math.min(...array), max: Math.max(...array)}
};
console.log(findMinMax([1,2,3,4,5]));


/* 🔴 Level 3: Advanced (Applying Logic and Multiple Methods)
7️⃣ Generate a random integer within a range
Write a function randomInRange(min, max) that returns a random integer between min and max (inclusive). */
function randomInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomInRange(1, 10));

/* 8️⃣ Count the occurrences of a digit in a number
Write a function countDigitOccurrences(num, digit) that counts how many times digit appears in num. */
function countDigitOcurrences(num, digit){
    return num.toString().split(digit).length - 1;
};
console.log(countDigitOcurrences(1112423, 1));