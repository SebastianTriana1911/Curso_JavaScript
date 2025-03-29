// SEARCH FOR ELEMENT IN AN ARRAY

// Method includes(): Determine if an array includes a element determine, return true or false as approprites
const product = ["dishwasher", "washing machine", "stove", "fridge"];
console.log(product);
console.log(product.includes("Horno de wall")); // Return false, given that is not finds
console.log(product.includes("stove")); // Return true, given that the find

console.log(product.includes("dishwasher", 0)); // Return true given that did the search from the index 0
console.log(product.includes("dishwasher", 1)); // Return false given that the element to search is find in index 0 and we are doing the search from index 1

// Method indexOf(): Return the first index in the that is find in element give in the array, or return -1 if the element is not present
const numbers = [0, 1, 1, 3, 4, 4, 5,];
console.log(numbers);
console.log(numbers.indexOf(1)); // Return index "1" given that in is the index that finds the first occurrence to search
console.log(numbers.indexOf(20)); // Return -1 given that not finds none occurrence
console.log(numbers.indexOf(1, 2)); // Start from the index 2 and return "2" to different of the first console.log

// Method lastIndexOf(): Return the last index in the that in element can meet in the array, or -1 if the element is not present. The array is route in WRONG WAY, begining by the index fromIndex.
const animals = ["elephant", "lyon", "tiger", "lyon", "tiger", "elephant",];
console.log(animals);
console.log(animals.lastIndexOf("elephant")); // Return the last appearance to search "5". 
console.log(animals.lastIndexOf("tiger")); // Return of index "4".
console.log(animals.lastIndexOf("TIGER")); // Return -1, given that is not finds.
