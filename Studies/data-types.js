/**
 * DATA TYPES:
 * 
 * 0. Data types are different types of values that can be used in Javascript. 
 * 
 * 
 * 1. JavaScript data types: 
 *    - Number: numeric values 
 *    - String: words, characters, letters
 *    - Boolean: truthy/falsey values
 *    - Array: collection of elements
 *    - Object: key value pairs in collection of data
 *    - Function: blocks of code created to do something
 *    - undefined: a variable that has not been assigned a value
 *    - null: represents the intential absence of any value
 *    - NaN: error condition when code should return a number but doesn't
 *    - Infinity: a numeric value that represents positive numeric values
 *    - -Infinity: a numeric value that represents negative numeric values
 * 
 * 2. Complex Data Types:
 *    Complex data types can store multiple values and can grow in size dynamically.
 *      - Includes
 *          - Objects, Arrays, Function, & Date
 * 
 * 3. Simple Data Types
 *    Represent single values and are immutable (can't be changed).
 *      - Includes
 *          - Number, String, Boolean, Undefined, & Null
 * 
 * 
 * 4. By Copy:
 *    Simple data types are assigned by copy. When you assign a variable to another variable using these data types,
 *    the value is copied directly.
 * 
 *    let a = 10;
 *    let b = a; // copy value of a into b
 *    b = 20; // changing b doesn't affect a
 *    console.log(a); // 10
 *    console.log(b); // 20
 * 
 * 
 * 5. BY REFERENCE
 *    Complex data types are assigned by reference. When assigning a variable to another variable, the reference is copied, not the actual value.
 *    Both variables then refer to the same object. Modifications to the object through one variable are visible through the other variable.
 *    
 *    let obj1 = {value: 10};
 *    let obj2 = obj1; // copy reference of obj1 into obj2
 *    obj2.value = 20; // changing obj2's property also affects obj1
 *    console.log(obj1.value); // 20
 *    console.log(obj2.value); // 20
 * 
 * 
 * 6. Examples of using data types:
 */

// Number
var age = 26;
console.log(age); // prints => 26

// String
var name = 'Colton';
console.log(name); // prints => Colton

// Boolean
var isStudent = true;
console.log(isStudent); // prints => true

// Null
var emptyValue = null;
console.log(emptyValue); // prints => null

// Undefined
var notAssigned;
console.log(notAssigned); // prints => undefined

// Object
var person = { name: "John", age: 30 };
console.log(person); // prints => { name: "John", age: 30 }

// Array
var colors = ['Red', 'Green', 'Blue'];
console.log(colors); // prints => ['Red', 'Green', 'Blue']

// Function
function greet() {
  console.log("Hello");
}
greet(); // prints => Hello
