// EVALUATE BOOLEANS DATA

// through controle structure
const login = true;
if(login){
	console.log("The session has been started");
}else{
	console.log("The session could not be started ");
};

// through the operator ternary
const registerUser = true;
console.log(registerUser ? "This user is registered" : "This user not exist in base data");
