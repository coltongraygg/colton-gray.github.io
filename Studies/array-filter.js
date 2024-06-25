/**
 * 
 *  .filter() method
 *  
 *  Creates a new array with all elements that pass the test implemented by the provided function. 
 *  Used for filtering elements within an array based on a condition defined in the callback function.
 * 
 * 
 *  HOW IT WORKS
 *      1. Requires a callback function as an argument. This function is called once for each element in the array.
 *      2. Must return true to include the element in the new array or false to exclude it.
 *      3. Returns a new array containing all the elements for which the callback function returned true is returned.
 *      4. The original array is not modified. 
 * 
 */

function _filter(array, callback) {
    // initialize empty result array
    let filteredArray = [];
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
        // invoke callback function on the element, index, and array
        if (callback(array[i], i, array)) {
            // push truthy values to filteredArray
            filteredArray.push(arr[i]);
        }
    }
    // return filteredArray
    return filteredArray;
}

let nums = [1, 2, 3, 4, 5];

let example = nums.filter(function(num) {
    return num % 2 === 0;
});

console.log(example); // [2, 4]


const animals = [
{name: 'Ben', species: 'dog'},
{name: 'Jacob', species: 'spider'},
{name: 'Maddy', species: 'cat'},
{name: 'Selina', species: 'cat'},
];

// Return a filtered array of only cats
animals.filter(function(animal) {
    return animal.species === 'cat';
});



const students = [
    {name: 'Stephanie', course: 'Bootcamp'},
    {name: 'Bethany', course: 'Bootcamp'},
    {name: 'Nathan', course: 'Precourse'},
];

// Return an object with only students who are in Bootcamp, you can use .map to return an array of only names.

var bootcampNames = students.filter(function(students) {
    if (students.course === 'Bootcamp') {
        return students.name;
    }
});
