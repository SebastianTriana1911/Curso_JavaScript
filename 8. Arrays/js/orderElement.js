// ORDER ELEMENTS OF AN ARRAY

// Method reverse(): Reverse the order of the elements of an array. (Sintax: array.reverse())
const elements = ["A", "B", "C", "D", "E", "F",];
elements.reverse(); // Applies the method to the array "elements"
console.log(elements);

// Method sort(): Order the element of an array. The order of default classification is ascending
const nameArray = ["Sebastian", "Alexa", "Bob", "Briana", "Thomas", "Andres", "Daniel", "David",];
nameArray.sort();
console.log(nameArray);
// NOTE: The sort() method order the elements of an array alphabetically and converts each element into a string. Keep in mind that string that start with capital Letters will allways come first than those with lowercase letter, since these will be found at the end of the array

// Order numerical values in ascending order
const numbers = [20, 10, 100, 16, 9, 12, 23, 99,];
numbers.sort(function(a, b,){
    return a - b;
});
console.log(numbers);

// Order numerical values in falling order
const numbers2 = [20, 10, 100, 16, 9, 12, 23, 99,];
numbers.sort(function(a, b,){
    return b - a;
});
console.log(numbers);

// Order object inside of an array
const objectArrays = [
    {namePropertis: "Edward", age:30},
    {namePropertis: "Nathalie", age:20},
    {namePropertis: "Chirs", age:45},
    {namePropertis: "Martha", age:32},
    {namePropertis: "Ernie", age:35},
    {namePropertis: "Jessica", age:38},
];
objectArrays.sort(function(a, b,){
    return a.age - b.age
});
console.log(objectArrays);