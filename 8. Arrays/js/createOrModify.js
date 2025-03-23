// CREATE OR MODIFY SUBARRAYS

const nameArray = ["Sebastian", "Alexa", "Bob", "Briana", "Thomas", "Andres", "Daniel", "David",];
console.log(nameArray);

// Method splice(): Change the content of the array, remove existing elements and/or add new ones
// NOTE: The syntax starts by accessing the array followed by the splice method, as a parameter it is a number or position in which the array will begin to be modified, the second parameter is optional and is an integer that determines the number to be eliminated from the array. If this parameter is equal to zero, no element is eliminated. The next parameter is the elements that will be added to the array.
console.log(nameArray.splice(5)); // Remove all the elements of the array from index 3
console.log(nameArray.splice(3,1)); // The second parameter determines the number of elements to remove, in the case "1"
console.log(nameArray.splice(1,1,"Triana")); // Parameter three, replace past value as parameter, for the remove values of the array 

// Method slice(): Return a copy of a portion of the array inside of a new array new from start to end
console.log(nameArray.slice(1, 4)) // Create a copy of the array from index "1" until the index "4" without count the last index

// Method fill(): Change all the elements of an array for static value, from the index start (default 0) to the index end
const color = ["blue", "red", "white", "yellow"];
console.log(color);
console.log(color.fill("orange")); // Change all the elements of the array for "orange"
console.log(color.fill("green", 2)); // The second parameter, determine the index stating for change all the elements
console.log(color.fill("red", 1, 3)); // With the third parameter, we will know until that parameter change 