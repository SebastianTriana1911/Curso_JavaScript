// Create a modal windows for the user enter their name
let name = prompt("Please, enter your name and later press the button OK for continue.")

/* A condition is established:
* If the user write the name, the welcome menssage is displayed
* If the user write not his name and presses at the button OK the displayed other modal window
*/
if(name){
    // The "alert" metod works like a modal windows
    alert(name + ", Welcome to the modern JavaScript course")
}else if(name == ""){
    alert("A stranger, Welcome to the modern JavaScript course")
}

// This conde modifies the text of the <h1> element of HTML document
document.querySelector("h1").innerHTML = "Hola mundo 2"