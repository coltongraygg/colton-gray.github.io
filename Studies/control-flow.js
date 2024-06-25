/** 
 * Control Flow:
 * 
 * 0. Control flow is the order in which statements are executed. 
 * Control flow is managed using conditional statements like if, else if, else and switch statements.
 * These conditional statements allow our code to execute different code blocks based on those conditions.
 */

// 1. If Statement - Executes a block of code if a specified condition is true
let age = 21;
if (age >= 21) {
    console.log('Drink responsibly');
}

// 2. Else If Statement - Specifies a new condition if the first condition is false
let grade = 90;
if (grade > 95) {
    console.log('Nice');
} else if (grade < 95) {
    console.log('Okay');
}
console.log(grade);