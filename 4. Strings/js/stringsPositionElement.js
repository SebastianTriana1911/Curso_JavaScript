// METHOD TO GET THE POSITION OR INDEX OF A STRING
let text = "Our galaxy, the Milky Way, belongs to a local group of 46 galaxies which in turn belongs to a supercluster of 5000 galaxies."

// Method charAt(): Return the position of a character in a string. (Syntax: string.charAt(index))
console.log(`The character than is finds in the index three is ${text.charAt(4)}`)
console.log(text.charAt()) // Return the element finds in the position first "0"
console.log(text.charAt(text.length-1)) // Return last element of string
console.log(text.charAt(200))

// Method indexOf(): Return the position of the first time than appears a word or character (Syntax: string.indexOf(character, position))
console.log(text.indexOf("galaxy"));
console.log(text.indexOf("a", 16));
console.log(text.indexOf("ñ"));
console.log(text.indexOf("Galaxy")); // Sensivite to Capital Letter

// Method lastIndexOf(): Retunr the position of the last time than appears a word or character (Syntax: string.lastIndexOf(character, position))
console.log(text.lastIndexOf("a"));
console.log(text.lastIndexOf("a", 50));

// Method search(): Return the position of character in one string. (Systax: string.search(character))
console.log(text.search("Milky"))