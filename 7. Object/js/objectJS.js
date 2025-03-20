// OBJECT IN JAVASCRIPT
// Literal Object, using key pairs {...}
const object = {}; // First object in JS

// Constructor object using the reserved word new (Not recommended)
const  object2 = new Object(); 

// Properties object
const user = {
	name : "Sebastian",
	age : 20,
	featuredUser : true,
	["user registered"] : true,
}

// Properties object using the reserved word new
const user2 = new Object();
// assignment properties
user2.name = "Sebastian";
user2.age = 20;
user2.featuredUser = true;


// ACCESS PROPERTIES
// Notation with point (recommended)
// Accessing an object's property with the notation of point
console.log(user.name);
console.log (user.age);
console.log(user.featuredUser);

// Accessing an object's with popertis Notation with corchetas
console.log(user["name"]);
console.log(user["age"]);
console.log(user["featuredUser"]);
console.log(user["user registered"])

//Accessing objects with bracket notation is because our key to be called is divided into two words, therefore it cannot be done with the dot notation because it would generate the error "user.word space" instead if we keep the key enclosed in the braces with the quotation marks it will not generate the error "user["word space"]"

// NOTE: When creating the object so that the key can be a word with a space, it must be created in the same way "with brackets and quotation marks"

// The name of a object and the their propertis are sensitive to upper case
const person = {
	name: "mike",
};

const PERSON = {
	NAME: "MIKE",
}

console.log(person.name);
console.log(PERSON.NAME);

// NOTE: The object and its property are not the same in uppercase as in lowercase.

// Can be used word reserved like name of the properties
const object3 = {
	let : 1,
	NaN : 2,
	infinity: "Hello",
}
console.log(object3.let);
console.log(object3.NaN);
console.log(object3.infinity);

// NOTE: It is considered a good practice write the comma sign the last of each propertice of the object. This with the ability to maintain a scalable code