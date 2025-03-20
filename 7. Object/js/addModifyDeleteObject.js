// ADD, MODIFY OR DELETE PROPERTIES

const directory = {
    nameDirectory : "Stive",
    lastName : "McMiller",
    ["number Employe"] : 980,
    profetion : "Data Scientist",
};

// Modyfy the value of a property 
directory["number Employe"] = 101; // The property is accessed for modify their value

// Delete a properties of in object
delete directory.profetion; // With word reserved "delete" is delete any property

// Add a new property
directory.country = "EEUU";

// Add property the objet after having created it
directory.addProperty = 1;

console.log(directory.nameDirectory);
console.log(directory.lastName);
console.log(directory["number Employe"]);
console.log(directory.profetion);
console.log(directory.country);
console.log(directory.addProperty);
console.log(directory)