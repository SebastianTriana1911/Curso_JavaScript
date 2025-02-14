// METHOD AND PROPERTIES OF THE STRINGS

// Properties Length: Number of characters with a strings contains (Syntax: string.length)
let character = "Welcome to modern course JavaScript";
console.log(character.length);

// METHOD TO MODIFY THE CONTENT OF A STRING 
// Method .concat(): Concatenates strings (Syntax: string.concat())
let bind1 = "Hello a all, ";
let bind2 = "Let`s start the lesson";
let bind = bind1.concat(bind2);
console.log(bind); // Return "Hello a all, Let`s start the lesson" 

// Method .repeat(): Repeat a text a centain number of times
let repeat = "Good morning ";
console.log(repeat.repeat(2)); // Return "Good morning Good morning"

// Method toUpperCase(): Change a capital letters (Syntax: string.toUpperCase())
let changeCapitalLetters = "Welcome the modern course JavaScript";
console.log(changeCapitalLetters.toUpperCase()); // Return "WELCOME THE MODERN COURSE JAVASCRIPT" 

// Method toLowerCase(): Change to lowerCase (Syntax: string.toLowerCase())
let changeLowerCase = "Welcome the modern course JavaScript";
console.log(changeLowerCase.toLowerCase()); // Return "welcome the modern couser javascript"

// Method trimStart(): Remove the white space to the beginning of the string
let trim1 = "   sebas@gmail.com    ";
console.log(trim1.trimStart()) // Trip the whitespace of beginning "sebas@gmail.com      "

// Method trimEnd(): Remove the white space to the end of the string
let trim2 = "   sebas@gmail.com    ";
console.log(trim1.trimEnd()) // Trip the whitespace of beginning "       sebas@gmail.com"

// Method trim(): Remove all the white space of the string
let trim3 = "   sebas@gmail.com    ";
console.log(trim3.trim()) // Trip all the whitespace "sebas@gmail.com"

// Method replace(): Replaces fragment of a string (Syntax: string.replace(searchValue, newValue))
let replace = "The lady Graham live in a blue house and has a blue car";
console.log(replace.replace("blue", "red")); // Return "The lady Graham live in a red house and has a blue car"

// Method replaceall():
console.log(replace.replaceAll("blue", "green"))