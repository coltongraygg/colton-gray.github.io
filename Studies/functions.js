/**
 * 
 * FUNCTIONS
 * 
 * 
 * Functions are a set of statements that performs a task or calculates a value in JS. 
 * A function must be defined before it can be used (invoked). The definition includes the function's name,
 * parameters, and the code block that it executes. Once ddefined, a function can be invoked by using
 * it's name followed by paranthesis, optionally including arguments. 
 */

// Named Function

function functionName(parameters) {
    // code to be executed

}

// Parameters VS Arguments
    // Parameters are the names listed in the function's definition
    // Arguments are the real values passed to the function when it is invoked


// Assigning a function to a variable
let myFunction = function(parameters) {
    // code to be executed

}

// Inputs are specified as parameters in the function definition
// Outputs are specified using the return statement

function myFunction2(param1, param2) {
    let result = param1 + param2;
    return result; // Specifying output with return statement
}

// Without a return statement, the function will return undefined.

// Function Scope
    // Variables declared within a function are in the local scope of that function and can only be accessed within that function.

function localFunction(p1, p2) {
    let localVar = 'local';
    console.log(localVar); // accessible in the function
}

console.log(localVar) // NOT accessible out of the function - ReferenceError: localVar is not defined


// Closures
    // Functions form closures around the data they house. 
    // A function can remember and access variables from its lexical scope even when the function is executed outside that scope.
    // If an object returned from the function is referenced, that closure stays alive and data can continue to exist in these closures.

function outerFunc() {
    let outerVar = 100;
    function innerFunc() {
        // innerFunc is a closure that has access to outerVar
        return outerVar;
    }
    return innerFunc;
}
let myClosure = outerFunc(); // The closure around outerVar stays alive
console.log(myClosure()); // 100
