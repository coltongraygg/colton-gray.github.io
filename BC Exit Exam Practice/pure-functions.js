

// IGNORE
function getRandomNumber() {
    return Math.random();
}
// IGNORE

/**
 * What is a pure function?
 * - Deterministic
 *      - Given the same input, always produces same output
 * - Produces no side effects
 *      - All inputs are passed in
 *      - No use of globally scope variables
 *      - No return can indicate side effects
 */


const iAmPure = (a, b) => a + b;

iAmPure(5, 10); // 15

let x = 2;

const iAmImpure = y => {
    return x += y;
}
console.log(iAmImpure(5)); // 7
console.log(iAmImpure(5)); // 12
console.log(iAmImpure(5)); // 17

// DETERMINISTIC
    // Same input(s) => same output
    // All pure functions are deterministic
    // Not all deterministic functions are pure

const nonDeterministic = param => {
    return param + getRandomNumber()
}
nonDeterministic(10); // Different output every time because of getRandomNumber

// NO SIDE EFFECTS
    // Does not mutate passed in values
    // Does not reference variables defined outside of function



function addToArray(array, value) {
    array.push(value); // <== this code makes the function impure
    return array;
}

let example = addToArray(['a', 'b'], 'c'); // ['a', 'b', 'c']

// pure or impure checklist
    // deterministic?
    // not referencing any global variables
    // not mutating it's passed in data


function addToArray(array, value) {
    let newArray = array.concat(value); // <== now it's pure
    return newArray;
}

// PAY ATTENTION TO NATIVE METHODS
    // [].splice() vs [].slice()
    // [].push() vs [].concat()
    // [].sort()
    // [].reverse()


// MAKING COPIES OF COMPLEX DATA


function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

let example1 = updateObject({a: 1}, 'b', 2); // {a: 1, b: 2}
console.log(example1);

// pure vs impure
    // deterministic
    // not referencing any global values
    // mutating it's passed in data

function updateObject1(object, key, value) {
    let copy = Object.assign({}, object); // creates a deep copy
    copy[key] = value;
    return copy;
}

// making copies of complex data

// arrays
let fruits = ['watermelon', 'kiwi', 'another fruit'];
let copy1 = fruits.slice();
let copy2 = fruits.concat();
let copy3 = Array.from(fruits);
let copy4 = [...fruits];

const students = [
    {name: 'Stephanie', age: 37, course: 'Bootcamp'}, 
    {name: 'Alex', age: 22, course: 'Precourse'},
    {name: 'John', age: 28, course: 'Bootcamp'}
];

function updateObjectsStudents(array, key, value) {
    var copy = array.concat();
    for (var i = 0; i < copy.length; i++) {
        copy[i][key] = value;
    }
    return copy;
}
var updateStudentsExample = updateObjectsStudents(students, 'midpointCheckInStatus', null);
console.log(updateStudentsExample);




// objects
const baseCar = {
    doors: 2, 
    transmission: 'manual',
    windows: 'manual',
    seats: 'cloth', 
};


