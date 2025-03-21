/* 1. Counting an Object's Properties
Description: Write a function countProperties(obj) that takes an object as an argument and returns the number of properties the object contains.
Tips:
Use the Object.keys() method to get all the object's keys.
Return the length of that array to count the properties. */
const object = {nameUser:"Sebas", lastName:"Triana", age:19};
const object2 = {nameUser:"Sebastian", lastName:"Triana", age:19, country:"Colombia", number:3};

function countProperties(obj){
    return Object.keys(obj).length;
};
console.log(countProperties(object));


/* 2. Check if an object has a property
Description: Create a hasOwnProperty(obj, prop) function that checks if the object obj has the property prop. Returns true if it does and false otherwise.
Tips:
Use the in operator or the hasOwnProperty() method to check for the existence of a property. */
function hasProperty(obj, prop){
    return prop in obj;
};
console.log(hasProperty(object, "nameUser")); // Return true
console.log(hasProperty(object, "agee")); // Return false


/* 3. Combine Two Objects
Description: Write a function combineObjects(obj1, obj2) that takes two objects and returns a new object that is the combination of both. If there are properties with the same name, the second object should overwrite the values ​​of the first.
Tips:
Use the distribution operator (...) or the Object.assign() method to combine the objects. */
function combineObjects(obj1, obj2){
    return {...obj1, ...obj2};
};
console.log(combineObjects(object, object2));


/* 4. Iterate over an object's properties.
Description: Create a showProperties(obj) function that iterates over an object's properties and prints both the keys and values ​​for each property to the console.
Tips:
Use a for...in loop to iterate over the object's properties. */
function showProperties(obj){
    return Object.entries(obj);
};

function showProperties2(obj){
    for(let keys in obj){
        console.log(`${keys}: ${obj[keys]}`);
    }
};
console.log(showProperties(object));
console.log(showProperties2(object2));



/* 5. Clone an Object
Description: Write a cloneObject(obj) function that returns an exact copy of an object passed as an argument.
Tips:
Use the spread operator (...) or the Object.assign() method to clone the object. */
function cloneObject(obj){
    return {...obj};
};
const cloneVariable = cloneObject(object);
console.log(cloneVariable);


/* 6. Filtering an Object's Properties
Description: Write a function, filterProperties(obj, props), that takes an object and an array of property names and returns a new object with only the specified properties.
Tips:
Use Object.keys() to retrieve properties and a for loop to filter the desired ones. */ 
function filterProperties(obj, array){
    let newObject = {};
    for (let propArray of array){
        if (propArray in obj){
            newObject[propArray] = obj[propArray];
        };
    };
    return newObject;
};
console.log(filterProperties(object, ["nameUser", "country", "age"]));


/* 7. Adding numeric values ​​of an object.
Description: Create a function, addValues(obj), that records an object and adds all its numeric values. It returns the total sum.
Tips:
Use typeof to check if a value is numeric before adding it. */
function addValues(obj){
    let add = 0
    for (let keys in obj){
        if(typeof obj[keys] === "number"){
            add += obj[keys];
        };
    };
    return add;
};
console.log(addValues(object2));