// OBJECT SEAL IN JAVASCRIPT
/* All objects in JavaScript can be assigned new properties, to prevent this from happening it is important to seal the objects. With the objct is sealed, it can only be modify, it cannot be added or deleteed */

const product = {
    property1: "value1",
    property2: "value2",
    property3: "value3",
};

const {property1, property2, property3} = product;
console.log(property1);
console.log(property2);
console.log(property3);

// Method Object.seal(): Object seal, prevent new properties for added to the object same
Object.seal(product); // Sealing of object

// Modidy a property
product.property1 = 1;

// Addes a new property
product.property4 = "value4";
console.log(product.property4);

// Delete a property
delete product.property4;
console.log(product);

// Method Object.isSealed(): Check if the object this seal, return True or False
console.log(Object.isSealed(product));
