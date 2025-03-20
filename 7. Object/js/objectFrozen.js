// FROZEN OBJECT IN JAVASCRIPT
/* All objects in JavaScript can be assigned new properties, to prevent this from happening it is important frozen the objects. With the object frozen, cannot be modified, added, deleted */
const product = {
    property1: "value1",
    property2: "value2",
    property3: "value3",
};

const {property1, property2, property3} = product;
console.log(property1);
console.log(property2);
console.log(property3);

// Method Object.freeze(): Frozen a object, prevent than can added property new to the same
Object.freeze(product); // Object frozen

// Modidy a property
product.property1 = 1;

// Addes a new property
product.property4 = "value4";
console.log(product.property4);

// Delete a property
delete product.property4;
console.log(product);

// The method Object.isFrozen(): Determines if a object this frozen
console.log(Object.isFrozen(product));