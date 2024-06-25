// Exit Exam


// Be prepared to use filter, map, reduce, and forEach methods
// Be prepared to use recursion on an array
// Be prepared to create your own versions of map, filter, and reduce
// Looping, conditional logic, object, and array access


/////////////////////////////////////
/////////// FILTER METHOD ///////////
/////////////////////////////////////


/*
HOW IT WORKS
    1. Requires a callback function as an argument. This function is called once for each element in the array.
    2. Must return true to include the element in the new array or false to exclude it.
    3. Returns a new array containing all the elements for which the callback function returned true is returned.
    4. The original array is not modified. 
*/

// FILTER FUNCTION

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

// EXAMPLE #1

let numbers = [1, 2, 3, 4, 5];

let oddNumbers = numbers.filter(function(number) {
    return number % 2 !== 0;
});

console.log(oddNumbers); // [1, 3, 5]

// EXAMPLE #2

let products = [
    { name: "Laptop", price: 1000, category: "Electronics", rating: 4.5 },
    { name: "Keyboard", price: 50, category: "Electronics", rating: 4.7 },
    { name: "Book", price: 20, category: "Literature", rating: 4.9 },
    { name: "Pen", price: 3, category: "Stationery", rating: 4.2 },
    { name: "Mouse", price: 25, category: "Electronics", rating: 4.8 }
];

let filteredProducts = products.filter(function(product) {
    return product.price > 20 && product.rating > 4.5;
})

console.log(filteredProducts);



/////////////////////////////////////
//////////// MAP METHOD /////////////
/////////////////////////////////////


/*
HOW IT WORKS
    1. Starts by creating an empty array
    2. Iterates over each element in original array
    3. Executes the function on each element in original array
    4. Result obtained from calling function on each element is added to new array
    5. Once every element has been processed, the iteration ends.
    6. The new array is returned. The original array remains unchanged.
*/

// MAP FUNCTION

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

// EXAMPLE #1

let mapNumbers = [1, 2, 3, 4];
let doubled = mapNumbers.map(function(number) {
    return number * 2;
});

console.log(doubled); // [2, 4, 6, 8]

// EXAMPLE #2

let mapProducts = [
    { name: "Laptop", price: 1000 },
    { name: "Keyboard", price: 50 },
    { name: "Mouse", price: 25 }
];

let productNames = products.map(function(product) {
    return product.name;
});

console.log(productNames); // ['Laptop', 'Keyboard', 'Mouse']


/////////////////////////////////////
/////////// REDUCE METHOD ///////////
/////////////////////////////////////

/*
HOW IT WORKS
    1. Executes a reducer function on each element of the array, resulting in a single output value.
    2. The reducer function takes four arguments:
        - Accumulator (acc): accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
        - Current Value (cur): the current element being processed in the array.
        - Current Index (index): the index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.
        - Source Array (src): the array reduce was called upon.
    3. An optional initialValue can be passed to reduce. If no initialValue is provided, the first element in the array will be used as the initial accumulator value, and skipped as the current value.
    4. The original array is not modified.
*/

// REDUCE FUNCTION

function _reduce(array, reducer, initialValue) {
    let acc;
    let startIndex;

    // check if initialValue is provided
    if (initialValue !== undefined) {
        // if so, use it as the value of acc  and start the iteration from first element of array
        acc = initialValue;
        startIndex = 0;
    } else {
        acc = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        acc = reducer(acc, array[i], i, array);
    }
    return acc;
}