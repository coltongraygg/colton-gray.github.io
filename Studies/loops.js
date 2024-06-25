/**
 * Loops:
 * 
 * Loops are used to execute a block of code a number of times, as long as a specified condition is true.
 */

// 1. While Loop - Loops through a block of code as long as the specified condition is true

// Looping forward 
let i = 0;
while (i < 5) {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
}
// Looping backward down to zero
let j = 5;
while (j > 0) {
    j--;
    console.log(j); // 4, 3, 2, 1, 0
}

// 2. For Loop - Loops through a block of code a number of times

// Looping forward
for (let a = 0; a < 5; a++) {
    console.log(a); // 0, 1, 2, 3, 4
}

// Looping backward down to zero
for (let b = 5; b > 0; b--) {
    console.log(b); // 5, 4, 3, 2, 1
}

// Looping over array
let array = [1, 2, 3, 4];
for (let k = 0; k < array.length; k++) {
    console.log(array[k]); // 1, 2, 3, 4
}

// Looping over an array backwards
for (let l = array.length - 1; l >= 0; l--) {
    console.log(array[l]); // 4, 3, 2, 1
}

// 3. For In Loop - Loops through the properties of an object
let person = {firstName: 'Colton', lastName: 'Gray', age: 26};
for (let key in person) {
    console.log(key + ': ' + person[key]);
}

// firstName: Colton
// lastName: Gray
// age: 26