// METHODS OF A OBJECT
// The differences between a method and a function are that a method is linked to an object, while a function is an independent block of code that can be executed from any part of the code.

const user = {
    nameUser: "Sebas",
    country: "Colombia",
    destacateUser: true,
    greeting: function(){ // Create a property as function with word reserved "function"
        console.log(`Hello, the setion in start as: ${user.nameUser.toUpperCase()}`) // This code is execute each than is call this property
    }
};

// Call to the property (Function) greeting
user.greeting(); // Return the code than this inside of the keys

// Add a new method in a object
user.age = 19;
user.ageMy = function(){
    console.log(`Hello ${user.nameUser}, have ${user.age}`);
};
user.ageMy();

// Used THIS for references a object
// The word reserved THIS make reference to the object same, for write doesn't the name of object, is becomes or write the word THIS than make references a it same. This works for when creating default objects
const manager = {
    nameManager: "Anna",
    position: "Manager finances",
    welcomeMessage: function(){
        console.log(`Hello my name is ${this.nameManager}`);
    }
}
manager.welcomeMessage();
