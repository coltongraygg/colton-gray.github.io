/**
 * String Manipulation: 
 * 
 * Strings can be manipulated using both operators and string methods.
 */

// Using Operators for String Manipulation

// Concatenation 

let fullName = 'Colton ' + 'Gray';
console.log(fullName); // 'Colton Gray'

// Assignment Operator 
let fName = 'Colton ';
fName += 'Gray';
console.log(fName); // 'Colton Gray'

// Using String Methods for String Manipulation

// charAt() - Returns the character at the specified index
let firstLetter = fullName.charAt(0);
console.log(firstLetter); // 'C'

// toUpperCase() - Converts a string to uppercase letters
let upperCaseName = fullName.toUpperCase();
console.log(upperCaseName); // 'COLTON GRAY'

// toLowerCase() - Converts a string to lowercase letters
let lowerCaseName = fullName.toLowerCase();
console.log(lowerCaseName); // 'colton gray'

// slice() - Extracts a part of a string and returns a new string
let firstName = fullName.slice(0, 6);
console.log(firstName); // 'Colton'

// indexOf() - Returns the index of the first occurence of a specified value in a string
let indexOfName = fullName.indexOf('o');
console.log(indexOfName); // 1

// replace() - Replaces a specified value with another value in a string
let replacedName = fullName.replace('Gray', 'No Last Name');
console.log(replacedName); // 'Colton No Last Name'

// trim() - Removes whitespace from both ends of a string
let space = '   hi   '
let trimSpace = space.trim();
console.log(trimSpace);