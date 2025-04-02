// DESTRUCTURING OF ARRAYS IN JAVASCRIPT

// Classic JS
const product = ["Tablet", "Laptop", "Desktop", "mouse"];
const tablet = product[0];
const laptop = product[1];
const desktop = product[2];

console.log(tablet);
console.log(laptop);
console.log(desktop);

// Modern JS (Desestructuring)
const product2 = ["Tablet", "Laptop", "Desktop", "mouse"];
const [first, seconds, third] = product2; // Desestructuring

console.log(product2)
console.log(first);
console.log(seconds);
console.log(third);

// Separate assigment of the declaration
// Classic JS
let fruit, fruit2;
fruit = "kiwi";
fruit2 = "mango";

console.log(fruit);
console.log(fruit2);

// Modern JS (Desestructuring)
let fruit3, fruit4;
[fruit3, fruit4] = ["Kiwi", "Mango"]
console.log(fruit3);
console.log(fruit4);

// Default values
let nameLet, lastname;
[nameLet, lastname = "Smith"] = ["Meghan"]
console.log(nameLet);
console.log(lastname);

// Exchange of variables
// Classic JS
let a = 10;
let b = 30;
let assistant = a;
a = b;
b = assistant;
console.log(a);
console.log(b);

// Modern JS (Desestructuring)
let c = 10;
let d = 30;
[c, d] = [d, c];
console.log(c);
console.log(d);

// OPERATOR SPREAD Y SINTAX OF REST

// Operator Spread en JS
const menu = ["Croquetas de salmon", "Pulpo a la brasa", "Cazuela",];
console.log(menu);

const cloneMenu = [...menu];
console.log(cloneMenu);

// Expand argument list
const colors = ["Blue", "Red",];
const colors2 = ["White", "Green", "Yellow", "Greey", ...colors];
console.log(colors2);

// Sintax REST
const properties = ["homes", "offices", "departaments", ];
const [properti1, ...other] = properties;
console.log(properti1); // Contains the first element from array
console.log(other); // Contains the rest of elements

// Jump the value in an array
const ortalice = ["Calabaza", "brocoli", "espinaca", "zanahoria", ];
const [calabaza,,,zanahoria] = ortalice;
console.log(calabaza);
console.log(zanahoria);

// DESESTRUCTURING NESTED ARRAY
const shoppingCart = ["Monitore", "Laptop", "Desktop", ["Procesator", "Motherboard", "Memory"], ];
const [,,,[,,memory]] = shoppingCart;
console.log(memory);