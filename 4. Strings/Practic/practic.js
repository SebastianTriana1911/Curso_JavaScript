/* Level 1: Basics (Method Familiarization)
1️⃣ Get the length of a string
Create a countCharacters(text) function that receives a string and returns the number of characters it has using .length.*/
function countCharacter(text){
    return text.length;
};
console.log(countCharacter("Hello")); // Return 4

/* 2️⃣ Concatenate Two Strings
Create a function joinString(text1, text2) that joins two strings using .concat(). */
function joinString(text, textConcat){
    return text.concat(textConcat);
};
console.log("Hello", "Wold"); // Return Hello Wold

/* 3️⃣ Repeat a word multiple times
Create a function repeatText(text, times) that repeats a text n times using .repeat(). */
function repeatText(text, times){
    return text.repeat(times);
};
console.log(repeatText("Hello", 2)) // Return HelloHello

/* 4️⃣ Convert to uppercase or lowercase
Create a function changeCase(text, type) that converts the text to uppercase (toUpperCase()) or lowercase (toLowerCase()) based on the type parameter. */
function changeCase(text, type){
    return type === "upperCase" ? text.toUpperCase() : text.toLowerCase();  // Comprovation of the type, depending on the type used a method or other
}
console.log(changeCase("Change of type for this string", "upperCase")); // Return CHANGE OF TYPE FOR THIS STRING
console.log(changeCase("Change of type for this string", "min")); // Return change of type for this string


/* Level 2: Intermediate (Combining Methods and Logic)
5️⃣ Remove Unnecessary Whitespace
Create a cleanText(text) function that removes unnecessary spaces at the beginning and end with .trim(). */
function cleanText(text){
    return text.trim();
};
console.log(cleanText("  Hello I am learnd English  ")) // Hello I am learnd English

/* 6️⃣ Replace words in a string
Create a replaceWord(phrase, old, new) function that replaces only the first occurrence of a word in a phrase with .replace(). */
function replaceWord(text, phraseOld, phraseNew){
    return text.replace(phraseOld, phraseNew);
};
console.log(replaceWord("I like pizza", "pizza", "hotdog")); // I like hotdog

/* 7️⃣ Replace all occurrences of a word
Create a replaceAll(phrase, old, new) function that replaces all occurrences of a word in a string with .replaceAll(). */
function replaceAll(text, phraseOld, phraseNew){
    return text.replaceAll(phraseOld, phraseNew);
};
console.log(replaceAll("The dog and cat are friends. The dog is good", "dog", "rabbit"));

/* 8️⃣ Check if a string begins or ends with a certain word
Create a function checkText(text, word, position) that returns true if the text begins with a word (startWith()) or ends with a word (endsWith()). */
function checkText(text, word, position){
    return position === "start" ? text.startsWith(word) : text.endsWith(word);
};
console.log(checkText("Hello wold", "Hello", "start"));
console.log(checkText("Hello wold", "wold", "end"));

/* Level 3: Advanced (More complex exercises)
9️⃣ Find a word within a phrase
Create a function findWord(phrase, word) that returns true if the word is in the phrase, using .includes(). */
function findWord(text, phraseSearch){
    return text.includes(phraseSearch);
};
console.log(findWord("I am learning JavaScript", "learning")); // True
console.log(findWord("I am learning JavaScript", "Python")); // False

/* 🔟 Extract part of a string
Create a function extractText(text, start, end) that returns a part of the string using .substring(). */
function extractText(text, start, end){
    return text.substring(start, end);
};
console.log(extractText("JavaScript is great", 0, 9)); // JavaScipt

/* 1️⃣1️⃣ Split a string into words
Create a splitText(text, separator) function that splits the string into an array of words using .split(). */
function splitText(text, separator){
    return text.split(separator);
};
console.log(splitText("Hello wold JavaScript", " "));

/* 1️⃣2️⃣ Find the position of a word in a text
Create a function searchPosition(text, word) that returns the position where the word is located using .search(). */
function searchPosition(text, word){
    return text.search(word);
}; 
console.log(searchPosition("Learn JavaScript is good", "JavaScript"));
console.log(searchPosition("Learn JavaScript is good", "Hello"));

/* Final Exercise: Complete Challenge 🎯
🔴 Clean, transform, and search for information in a sentence

Create a processText(text, keyword) function that does the following:

Remove unnecessary spaces at the beginning and end.

Convert the sentence to lowercase.

Replace all commas with spaces.

Hyphenate the text into words.

Find if the keyword is present in the text and return true or false.*/

function processText(text, keyword){
    let clearWord = text.trim().toLowerCase().replace(","," ");
    let splitWord = clearWord.split(" ");
    return splitWord.includes(keyword.toLowerCase());
};
console.log(processText("  Hello, wold, I am learn JavaScript", "JavaScript")) //