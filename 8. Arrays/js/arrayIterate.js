// ITERATION OF ARRAY IN JS

// Loop for
const marineAnimals = ["starfish", "octopus", "dolphin", "manatee",];
for(let i = 0; i < marineAnimals.length; i++){
    console.log(`The marine animal found in the index ${i} is: ${marineAnimals[i]}`);
};

// ForEach
const element = ["One", "Two", "Three", "Four", "Five", "Six", ];
element.forEach(function(elements, indice){
    console.log(`${indice}: ${elements}`);
});