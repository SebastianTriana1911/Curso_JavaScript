// ADD OR DELETE ELEMENTS

const marineAnimals = ["starfish", "octopus", "dolphin", "manatee",];
console.log(marineAnimals);

// Method push(): add one or more elements the last of the array. (Syntax: array.push(element1[, ...[, element2]))
console.log(marineAnimals.push("crab"));
console.log(marineAnimals.push("Calamer", "fish blue"));

// Method unshift(): add one or more elements the begging of the array (Syntax: array.unshift(element1[, ...[, element2]))
console.log(marineAnimals.unshift("shark white")); // Indexes the value in the first position of the array
console.log(marineAnimals.unshift("first element"));

// Method pop(): delete the last element of the array (Syntax: array.pop())
console.log(marineAnimals.pop());

// Method shift(): delete the first element of a array (Syntax: array.shift()) 
console.log(marineAnimals.shift());