// NESTED OBJECT

// The nested object are object that are inside of other, as if was a property more
const laptop = {
    windows: "15 inches",
    hardDrive: "1TB",
    CPU: "3.1 GHz",
    measures: {
        weight: "2.8 pounds",
        width: "11.98 inches",
        height: "0.16 - 0.63 inches",
    }
};

// Accesse to all the properties of object "laptop"
console.log(laptop);

// Accesse to all the properties of object "measures"
console.log(laptop.measures);

// Accesse to the property "height" of object "measures"
console.log(laptop.measures.height);

// Modify property "height" of the object "measures"
laptop.measures.height = "000 - 0.11 inches";
console.log(laptop.measures.height); // Show property modified

// Add property to a object nested
laptop.measures.color = "Red";
