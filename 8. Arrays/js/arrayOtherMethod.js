// OTHER METHOD OF THE ARRAYS

// Method toString(): Return a text string represented the array an their elements
const numbers = [1, 2, 3, 4, 5, 6,];
console.log(numbers);
console.log(numbers.toString()); // Convert each element in text string

// Method concat(): It is used to join two or more arrays and return with result new one
const letter = ["a", "b", "c", "d",];
const letter2 = ["e", "f", "g",];
const letter3 = ["h", "i", "j",];
const concat = letter.concat(letter2, letter3)
console.log(concat);

// Concatenate values to in array
const members = ["Ernie", "Tiffany", "Laettisia", "Marcos", ];
console.log(members.concat("Peter"));

// Concatenate arrays joined
const product = ["Tablet", "Laptop", ];
const product2 = ["Desktop", ["Motherboard", "Memory"]];
console.log(product.concat(product2));

// Method join(): Joins all the elements of an array using a separator and return a text string
const sports = ["Basketball", "Soccer", "Voleyball", "cicles", ];
console.log(sports.join()); // Return the elements separator by commas
console.log(sports.join(" "));
console.log(sports.join("."));