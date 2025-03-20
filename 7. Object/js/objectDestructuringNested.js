// DESTRUCTURING OF OBJECT NESTED

const characteristics = {
    weight: "3.9 pounds",
    color: "black",
    dimensions: {
        width: "10 inches",
        height: "200 inches",
    }
};

// Destructuring properties of object nested 
const {weight, color, dimensions:{width, height}} = characteristics;
console.log(weight);
console.log(color);
console.log(width);
console.log(height);
console.log(characteristics); // Object
console.log(characteristics.dimensions) // Object nested