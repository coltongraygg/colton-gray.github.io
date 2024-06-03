// higher order functions allow us to 
    // decrease the amount of time writing code
    // have less errors of any sort in your code
    // have an easier time understanding your code
    // re-use more code
        // "composability"


    // HIGHER ORDER FUNCTIONS
        // 1) a function that takes in another function as an argument
        // 2) a function that returns another function



// FUNCTIONS
    //  block of code that can "do things"
    // can take in functions and return functions
    // can be reused



// template for how to take in two values and return them added

function add(x, y) {
    return x + y;
};
// end

// ASK YOURSELF THIS
    // what are my non-function inputs?
    // what is the purpose of my input function in relation to the non-function

function calculate(x, y, operation) {
    let result = operation(x, y);
    return result;
}


// calculate is taking two inputs (x, y) and it's taking in a function called operation
// x and y are passed as arguments to the operation function
// calculate returns the result of invoking the operation function

// just one example
const output = calculate(1, 2, function(a, b) {
    return a + b;
});

console.log(output);

// another example

const example2 = calculate(5, 10, function(a, b) {
    return a * b;
});

console.log(example2);