// OBJECT DESTRUCTURING (SYNTAX: const{var1, var2} = {var1: ..., var2...})
/* It consists of a simplification of data, separating all the properties of an object into variables, meaning that we can extract properties from an object and assign them to different variables. */

// Syntax clasic of JS
const tablet = {
    reference: 12345,
    dimensions: "10.2 inches",
    memory: "64GB",
    price: 300, 
}

// Extracted data of object
const references = tablet.reference;
const dimensions = tablet.dimensions;
const memory = tablet.memory;
const price = tablet.price;

console.log(references);
console.log(dimensions);
console.log(memory);
console.log(price);

// Syntax modern of JS
/* Data destructuring is based on being able to extract all the properties of an object, with the reserved word "const" between keys the properties that you want to extract are called and if we want there properties to be saved in a variable with different name, we assign it as if were the value of a property */

const {reference: r/*variable name*/, dimensions: d, memory: m, price:p} = tablet; // Data destructuring
console.log(r);
console.log(d);
console.log(m);
console.log(p);

// Extract only the properties than need
const directory = {
    nameDirectory : "Stive",
    lastName : "McMiller",
    ["number Employe"] : 980,
    profetion : "Data Scientist",
};

const {nameDirectory:n, profetion:pr} = directory;
console.log(n);
console.log(pr);

// Declared variables before of assing
const user = {
    nameUser: "Sebas",
    profile: "User outstanding",
}
let nameUser, profile; // Variables created without assigning any value
({nameUser, profile} = user) // Assign a value to variables, obtaining properties of object "user"

console.log(nameUser);
console.log(profile);

// Assign value by defaults
const user2 = {
    sessionStarted: true,
    email: "email@email.com",
};

const {sessionStarted, email, accoutType = "premium"} = user2; // Data Destructuring
console.log(sessionStarted);
console.log(email);
console.log(accoutType);

// Syntax of the rest (...)
/* The remainder syntax works when you want to destructure the remainder of the properties that you don't need from an object. Essentially, it "unpacks" the properties of one object and places them in another. This is done to maintain the immutability of the original object and allow you to add new properties to the new object. DESESTRUCTURING THE PROPERTIES OF A OBJECT INSIDE OF A NEW OBJECT */ 
const pet = {
    type: "dog",
    race: "Golden retriever",
    height: "61 cm",
    weight: "32 kg",
    age: 4,
};

const{type, race, ...other} = pet;
console.log(type);
console.log(race);
console.log(other); // New object with the properties rest

// Create new object ussing the sintax of rest (...)
const {...newObjectPet} = pet;
newObjectPet.newPropery = 123;
console.log(newObjectPet);