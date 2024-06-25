

// REDUCE IS A NATIVE ARRAY METHOD THAT ITERATES OVER EVERY ELEMENT AND COMBINES THEM INTO A SINGLE VALUE
    // ITERATES OVER ARRAY, INVOKES CALLBACK FUNCTION ON EACH ITEM TO ACCUMULATE 
    // CAN RETURN ANY DATA TYPE, UNLIKE .MAP OR .FILTER WHICH RETURNS AN ARRAY
// REDUCE TAKES THREE ARGUMENTS
    // ARRAY, CALLLBACK FUNCTION, SEED (OPTIONAL)

// EXAMPLE

const students = [
    { name: 'Stephanie', age: 37, course: 'Bootcamp'},
    { name: 'Bethany', age: 35, course: 'Bootcamp'},
    { name: 'Nathan', age: 34, course: 'Precourse'}
];



// REDUCE
    // ACTS ON AN ARRAY
    // ITERATES OVER EVERY ITEM OF THE ARRAY
    // INVOKES A CALLBACK FUNCTION IN ORDER TO 'ACCUMULATE' A RETURN VALUE

    // SEED VALUE IS TO 'SEED' THE ACCUMULATOR
        // THE ACT OF PROVIDING A SEED VALUE ENSURES THAT THE ACCUMULATOR WILL ALWAYS BEGIN AT THAT POINT

// PROCESS
    // INVOKE REDUCE
    // LET RESULT;
    // IF ([] === UNDEFINED) // IF SEED VALUE WAS NOT PROVIDED
    // ELSE
        // RESULT = []
        // FOR LOOP
            // I = 0
                // RESULT = FUNC([], {STEPHANIE})
                    // REDUCE WILL PASS IN THE CURRENT VALUE OF RESULT INTO FUNC

let reduceBootcamp = students.reduce(function(acc, current) {
    if (current.course === 'Bootcamp') {
        acc.push(current);
    }
    return acc;
}, [])

console.log(reduceBootcamp); // Returns an array of objects for those that are in Bootcamp

// FILTER
    // ACTS ON AN ARRAY
    // ITERATES OVER EVERY ITEM IN THE ARRAY
    // INVOKES A CALLBACK ON EACH ITEM, AND IF THE RESULT IS TRUTHY THE ITEM IS PUSEHD TO THE OUTPUT ARRAY

    let bootcamp = students.filter(function(e) {
        return e.course === 'Bootcamp'
    });
    
    console.log(bootcamp); // Returns an array of objects of students that course === 'Bootcamp'


    let names = students.map(function(e) {
        return e.name;
    });
    
    console.log(names); // Returns an array of names


let bootcampNum = students.reduce(function(acc, current) {
    if (current.course === 'Bootcamp') {
        acc += 1;        
    }
        return acc;
    }, 0);

    console.log(bootcampNum);


// SEED CONCEP
    // INITIAL VALUE PASSED TO THE CALLBACK FUNCTION 


    // if you are using reduce to create a new piece of data you will almost always use a seed
    // if you are using reduce to search fo ran existing piece of data in the array, you may not need a seed

let names1 = ['alex', 'francis', 'aaron'];

let longestName  = names1.reduce(function(acc, current) {
    // acc = 'alex' | current = 'francis'
    if (acc.length > current.length) {
        return acc;
    } else {
        return current;
    }

}, '');

console.log(longestName); // francis