
// infinite recursion
// function doSomething() {
//     return doSomething();
// }

// doSomething(); // what is going to happen when I invoke this function?

// invoke doSomething()
    // return doSomething()
        // return doSomething()
            // return doSomething()

// recursion often offers a simpler and cleaner-looking solution at the expense of memory consumption
// we can use recursion to solve problems that we do not know the exact number of repetitions (which cannot be done with a 'for loop' but can be done with a 'while loop')

// Something to know about functions
    // there is a built in data structure that manages what happens when functions are invoked
    // it's called the CALL STACK

// function doSomething(x, y) {
//     function add(a, b) {
//         return a + b;
//     }
//     return add(x, y);
// }

// doSomething(1, 2); 

/*
CALL STACK: 

add(1, 2) // returns 3 and is removed from the callstack
doSomething(1, 2)

*/

// HOW RECURSIVE FUNCTIONS WORK
    // invoke the same function with a different input until you reach your base case
    // this base case is when the recursion process ends. This is a really important concept. We need a way to tell how function not to run forever!


    // function countdown(n) {
    //     // base - a condition that when true signals the function should stop
    //     if (n < 0) {
    //         return;
    //     }

    //     // recursion
    //     console.log(n);
    //     countdown(n - 1)
    // }


// countdown(3);

// invoke countdown(3) // recursion #1
    // BASE // FALSE
    // RECURSION
        // log => 3
        // countdown(2) // recursion #2
        // BASE // FALSE
        // RECURSION
            // log => 2
            // countdown(1) // recursion #3
                // BASE // FALSE
                // RECURSION
                    // log => 1
                    // countdown(0) // recursion #4
                    // BASE // FALSE
                    // RECURSION
                        // log => 0
                        // countdown(-1) // recursion #5
                        // BASE // TRUE  
                            // return; // FUNCTINO STOPS


/*
LOGS => 
    3
    2
    1
    0
*/

// ANOTHER EXAMPLE

function logChar(string) {
    // base
    if (string.length === 0) {
        return;
    }
    // recursion
    console.log(string[0]);

    logChar(string.slice(1));
}

logChar('Colton');

/*
LOGS =>
    c
    o
    l
    t
    o
    n
*/

// THEMES
    // some type of input
    // you need to modify that data each time you invoke your function recursivley (decrement, slice, etc.)
    // your base case will be based around what the value of the input will look like at the end
    // when using recursion on an array or a string, you only do something to the zero index each recurisve step, and then ...(watch video for rest of notes)

// invoke logChar('colton')
    // BASE // FALSE
    // RECURSION
        // log => 'c'
        // logChar('olton') // recursion #2
            // BASE // FALSE
            // RECURSION
                // log => 'o'
                // logChar('lton') // recursion #3
                    // BASE // FALSE
                    // RECURSION
                        // log => 'l'
                        // logChar('ton') // recursion #4
                            // BASE // FALSE
                            // RECURSION
                                // log => 't'
                                // logChar('on') // recursion #5
                                    // BASE // FALSE
                                    // RECURSION
                                        // log => 'o'
                                        // logChar ('n') // recursion #6
                                            // BASE // FALSE
                                            // RECURSION    
                                                // log => 'n'
                                                // logChar('') // recursion #7
                                                    // BASE
                                                    // RETURN


// ANOTHER EXAMPLE

var names = ['Colton', 'Jackson', 'Gray'];

function logItem(array) {
    // base
    if (array.length === 0) {
        return;
    }
    // recursion
    console.log(array[0]);

    logItem(array.slice(1));
}

logItem(names);

// RECURSION - RECURSIVE CALL
    // recursive call must be called with an argument that will eventually reach the base case

    // function countDown(num) {
    //     if (num <= 0) {
    //         console.log('All Done!');
    //         return;
    //     }
    //     console.log(num);
    //     num--;
    //     countDown(num);
    // };

    // countDown(5);



function addUpTo(n) {
    // base
    if (n === 0) {
        return 0;
    }

    // recursion
    return n + addUpTo(n - 1);
}

addUpTo(4); // 4 + 3 + 2 + 1 + 0 = 10

// invoke addUpTo(4)
    // BASE // FALSE
    // return 4 + addUpTo(3) // <== MASTER RETURN STATEMENT

// recursive call #1 
// addUpTo(3)
    // BASE // FALSE
    // return 3 + addUpTo(2)
// recursive call #2 
    // BASE // FALSE
    // RECURSION
        // return 2 + addUpTo(1)
// recurisve call #3
// addUpTo(1)
    // BASE // FALSE
    // RECURSION
        // return 1 + addUpTo(0) 
// recurisve call #4
// addUpTo(0)
    // BASE // TRUE
        // return 0

// ANOTHER EXAMPLE USING A DEFAULT PARAMETER

function addUpTo2(n, sum=0) {
    // base
    if (n === 0) {
        return sum;
    }
    // recursion
        // update default param
        sum += n;
            // return function invocation
            return addUpTo2(n - 1, sum);
}
addUpTo2(4);

// addUpTo2(4)
    // if (4 === 0) // false
    // RECURSION
        // sum = 4
        // return addUpTo2(3, 4) <== MASTER RETURN STATEMENT

// addUpTo2(3, 4) 
    // if 3 === 0 // false
    // sum = 4 + 3
    // sum = 7
    // return addUpTo2(2, 7)

// addUpTo2(2, 7) 
    // if (2 === 0) // false
    // RECURSION
        // sum = 9
        // return addUpTo2(1, 9)

// addUpTo2(1, 9) 
    // if (1 === 0) // false
    // RECURSION
    // sum = 10
    // return addUpTo2(0, 10)


// addUpTo2(0, 10) 
    // if (0 === 0) // TRUE
    // return 10

// ANOTHER EXAMPLE FOR WHEN YOU ABSOLUTELY WANT TO USE A DEFAULT PARAM

const customers = [
    { name: 'Stephanie Cooper', age: 37, gender: 'female'},
    { name: 'Bethany Joseph', age: 35, gender: 'female'},
    { name: 'Kai Roberts', age: 16, gender: 'non-binary' },
    { name: 'Nathan Coen', age: 34, gender: 'male' }
];

// create a function called femaleCustomers that takes an array of customers and returns a new array of only the female customers. Must use recursion!
function femaleCustomers(array, output=[]) {
    // base
    if (array.length === 0) {
        return output;
    }

    // recursion
    if (array[0].gender === 'female') {
        output.push(array[0]);
    }

    return femaleCustomers(array.slice(1), output);
}

// invoke femaleCustomers(customers, output=[])
    // BASE // FALSE
    // RECURSION
        // if ({Stephanie}.gender === 'female') // true
            // [{Stephanie}]
        // return femaleCustomers([{Bethany}, {Kai}, {Nathan}, {Stephanie}])