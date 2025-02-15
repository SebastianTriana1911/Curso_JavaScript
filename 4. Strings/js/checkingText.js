// CHECKING TEXT

let = checking = "To be or not to be, that is the question"

// Method startsWith(): Checking text start with one word or character. (Syntax: str.startsWith(stringSearch[, position]))
console.log(checking.startsWith("To be")); // Return True
console.log(checking.startsWith("to be")); // Return Fals, start not with 
console.log(checking.startsWith("that", 20));

// Method endsWith(): Checking text ends with one word or character. (Syntax: str.endsWith(stringSearch[, length]))
console.log(checking.endsWith("question"));
console.log(checking.endsWith("e", 17));

// Method includes(): Checking text contains other text. (Syntax: str.includes(stringSearch[,position]))
console.log(checking.includes("that")) // Return true
console.log(checking.includes("Than", 7)) // Return false