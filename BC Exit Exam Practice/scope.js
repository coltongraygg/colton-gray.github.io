

// var => global OR function scoped variables (never block scoped)

var age = 37; // global scope

function doSomething() {
    var firstName = 'Alex'; // function scoped variable
}

// let => global, function, OR block scoped
// const => global, function, OR block scoped


// this is the only situation where let and const differentiate themselves from var
if (1 < 2) {
    const statement = 'block messaged';
    let statement2 = 'block messaged';
}
console.log(statement); // statement is not defined
console.log(statement2); // statement2 is not defined


function doSomething2() {
    const firstName = 'alex';

    if (firstName === 'alex') {
        let response = 'Hello, ' + firstName; // block scope
    }
}

console.log(doSomething2);