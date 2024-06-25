
/**
 * 
 *  MAP METHOD
 *  The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
 * 
 *  HOW IT WORKS
 *  1. The map method starts by creating an empty array. This new array will be populated with the results of applying the function to each element in the original array.
 *  2. The method iterates over each element in the original array. For each element, the map method executes the provided function.
 *  3. During each iteration, the function is called with the current element as its argument. The function can also optionally receive the current element's index and the entire array as additional arguments. The result of this is then stored.
 *  4. The result obtained from calling the function on an element is added to the new array. This is repeated for each element in the original array.
 *  5. Once every element has been processed, the iteration ends. 
 *  6. The new array is then returned. The original array remains unchanged. 
 */

function _map(array, callback) {
    // initialize resultArray to store new array values
    let resultArray = [];
    // iterate through the original array
    for (let i = 0; i < array.length; i++) {
        // push the result of invoking callback function on each element
        resultArray.push(callback(array[i], i, array));
    }
    // return new array
    return resultArray;
}



const students = [
    {name: 'Stephanie', course: 'Bootcamp'},
    {name: 'Bethany', course: 'Bootcamp'},
    {name: 'Nathan', course: 'Precourse'},
];


let example = students.map(function(students) {
    return students.name;
});

console.log(example); // [ 'Stephanie', 'Bethany', 'Nathan' ]

// don't use the map method if you're only doing something to a few items 
// map is taking an array of students and returning a new students array that has been transformed with this function

// create an array of the names of bootcamp students

var bootcamp = students.filter(students => students.course === 'Bootcamp');

console.log(bootcamp);// [{ name: 'Stephanie', course: 'Bootcamp' }, {name: 'Bethany', course: 'Bootcamp' }]

var bootcampNames = bootcamp.map(students => students.name);
// console.log(bootcampNames); // [ 'Stephanie', 'Bethany' ]

// METHOD CHAINING

var bootcampNamesMethod = students.filter(students => students.course === 'Bootcamp').map(students => students.name);
console.log(bootcampNamesMethod) // [ 'Stephanie', 'Bethany' ]


// FIX THE PHONENUMBER DATA USING METHOD CHAIN
var phoneNumber = '111*222*3333'; 

var correct = phoneNumber.split('*').join('-');
console.log(correct); // 111-222-3333

// Use replace method to change 1's to 4's
var correct2 = phoneNumber.split('*').join('-').replaceAll('1', '4');
console.log(correct2); // 444-222-333



capitalizeNames = ['colton', 'jerry', 'jacqui'];

var firstChar = capitalizeNames.map(capitalizeNames => capitalizeNames.charAt(0).toUpperCase() + capitalizeNames.slice(1));

console.log(firstChar);