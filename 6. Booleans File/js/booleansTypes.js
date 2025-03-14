// BOOLEANS TYPES
// There are three ways to create boolean object
// Literal notation
const a = true;
const b = false;
console.log(a); // Return true
console.log(b); // Return false

// Function boolean()
const d = Boolean(true); 
const e = Boolean(false); 
console.log(d); // Return true
console.log(e); // Return false

// Object boolean new of class Boolean
const f = new Boolean(true); // Instance of class Boolean
const g = new Boolean(false);
console.log(f); // Return true
console.log(g); // Return false

// Compare booleans object
// Is not recommended to use instance variables for the “Boolean” class, response of its result is unexpected.
const h = new Boolean(true);
const i = new Boolean(false);
console.log(h == i); // Return false
console.log(h === i); // Strict identity operator

// All the next values return "false"
// 0 (cero)
// -0 (negative cero)
// "" (empty quotes)
// null
// undefined
// NaN
// false
