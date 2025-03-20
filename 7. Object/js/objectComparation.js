// OBJECT COMPARATION

// Two variables, two object different with the same properties
const fruit = {
    nameFruit: "apple",
};

const fruit2 = {
    nameFruit: "apple",
};

console.log(fruit == fruit2);
console.log(fruit === fruit2);

// Two variables, a single object
const hortalizas = {
    nameHortalizas: "carrot",
}

const hortalizas2 = hortalizas;
console.log(hortalizas == hortalizas2) // Return true since it points to the same memory address of the same object
console.log(hortalizas === hortalizas2)