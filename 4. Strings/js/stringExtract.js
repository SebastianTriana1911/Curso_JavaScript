// EXTRACT STRINGS FRAGMENT 

let extract = "William Shakespeare is known as the greatest writer of all time.";

// Method substring(): Extract character from indexA until indexB not including to. (Syntax: string.substring(indexA[, indexB]))
console.log(extract.substring(7));
console.log(extract.substring(0, 8)); // Indicates that it extracts the content from index 0 to 8, not counting the latter.
console.log(extract.substring(0, 0));
console.log(extract.substring(0, 1)); // Extract the first character
console.log(extract.substring(extract.length-1));
console.log("Hello world".substring(-2)); // Return string complet 
console.log("Hello world".substring(3, -5));
console.log("Hello world".substring(-4, -2));

// Method slice(): Retunr the string part from the begginning until the end (not include to). (Syntax: )
console.log(extract.slice(8));
console.log("Hello world".slice(-10));
console.log("Hello world".slice(-1, -1));
console.log("Hello world".slice(0, -1));

// Method split(): Divide a text into parts. (Syntax: string([space][, limit]))
console.log("JavaScript".split("")); // Divide for letter
console.log("learn web development".split(" ")); // Divide for word
console.log("Good morning, welcome the course of JavaScript".split(" ", 2)) // Extract the word of number indicated with seconds parameter  
