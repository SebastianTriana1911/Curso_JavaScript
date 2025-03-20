// FIND OUT IF EXISTS A PROPERTY IN A OBJECT

// Operator In (Syntax: PropertyName in objectName)
const employe = {
    nameEmploye: "Sebastian",
    age: "19",
    numberEmploye: 12,
    profetion: "Programmer",
};

// Find out / comprobación
console.log("nameEmploye" in employe); // Return true, since it exists inside of object that is referencing
console.log("aaa" in employe);

// NOTE: All property comparation must be enclosed in quotation, because otherwise it would take as another variable or object