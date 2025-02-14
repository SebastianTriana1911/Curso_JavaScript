// METHOD TO GET THE POSITION OR INDEX OF A STRING
let text = "Our galaxy, the Milky Way, belongs to a local group of 46 galaxies which in turn belongs to a supercluster of 5000 galaxies."

// Method charAt(): Return the position of a character in a string. (Syntax: string.charAt(index))
console.log(`The character than is finds in the index three is ${text.charAt(4)}`)
console.log(text.charAt()) // Return the element finds in the position first "0"
console.log(text.charAt(text.length-1)) // Return last element of string
console.log(text.charAt(200))

// Method indexOf(): Return the position of the first time than appears a word or character