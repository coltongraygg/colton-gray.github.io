
// regex => looking for a PATTERN of characters in a string

// replace, replaceAll methods

const phoneNumber = '111*222*3333';
const replaced = phoneNumber.replace('*', '-');
console.log(replaced); // 111-222*3333

const replacedAll = phoneNumber.replaceAll('*', '-');
console.log(replacedAll); // 111-222-3333

const serialNumbers = '111*222%3333#44@';
// i need to find *%#@
    // anything that isn't a digit
    // rebular.com for help

const replacedRegex = serialNumbers.replaceAll(/\D/g, '-');
console.log(replacedRegex);

const balance = '$4,567.89'; 
const modified = balance.replaceAll(/[$, ,]/g, '');
console.log(modified); // 4567.89


// string.match()
    // => []
    // => null


let example = 'a*l#e(x';

let containsLetters = example.match(/\w/g);
console.log(containsLetters); // ['a', 'l', 'e', 'x']

let example1 = '*(#*#';
let containsLetters1 = example1.match(/\w/g);
console.log(containsLetters1); // null