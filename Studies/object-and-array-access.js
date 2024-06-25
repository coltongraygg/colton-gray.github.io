// DIFERENCES BETWEEN OBJECTS AND ARRAYS

// ARRAYS ARE ORDERED COLLECTIONS OF VALUES, TYPICALLY USED FOR LISTS

// EACH VALUE IN AN ARRAY HAS A NUMBERED INDEX, STARTING AT 0

// OBJECTS ARE COLLECTIONS OF KEY VALUE PAIRS, BEST USED FOR COMPLEX DATA

// OBJECTS REPRESENT VALUES WITH NAMED PROPERTIES

// HOW TO IMPLEMENT

// ARRAYS

// PUSH AND UNSHIFT

let array = [0, 1, 2, 3];
array.push(4); // [0, 1, 2, 3, 4];
array.unshift(-1); // [-1, 0, 1, 2, 3, 4];


// OBJECTS

// JUST ASSIGN A NEW VALUE
let object = {firstName: 'Colton', lastName: 'Gray'};
object.age = 27;
object['hobbies'] = ['Sailing', 'Video Games'];
console.log(object);



// REMOVE VALUES

// ARRAYS

// POP() TO REMOVE THE LAST ELEMENT
// SHIFT() TO REMOVE THE FIRST ELEMENT

let newArray = [1, 2, 3];
newArray.pop(); // [1, 2]
newArray.shift(); // [2]
console.log(newArray);


// OBJECTS

// USE DELETE OPERATOR
let newObject = {firstName: 'Colton', lastName: 'Gray'};
delete newObject.lastName;
console.log(newObject);


// ACCESSING VALUES

// ARRAYS
// USE THE INDEX
let arr = [1, 2, 3];
console.log(arr[0]); // 1
console.log(arr.length); // 3


// OBJECTS
// USE THE KEY BY DOT NOTATION OR BRACKET NOTATION
let obj = {a: 1, b: 2};
console.log(obj.a);
console.log(object['c']);

// USE ARRAYS WHEN YOU NEED AN ORDERED LIST
    // TO-DO LISTS
// USE OBJECTS WHEN YOU NEED A COLLECTION OF NAMED PROPERTIES WITH KEY VALUE PAIRS
    // USER PROFILES
    // COMPLEX GROCERY LISTS

    















    