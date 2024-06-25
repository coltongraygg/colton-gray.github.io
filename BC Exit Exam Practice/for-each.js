
// this is the forEach method, it invokes, but does not return anything

function forEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i], i, array);
    }
}

const students = [
    {name: 'Stephanie', course: 'Bootcamp'},
    {name: 'Bethany', course: 'Bootcamp'},
    {name: 'Nathan', course: 'Precourse'},
];

// if you want to iterate over the students and log each student name to the console

students.forEach(students => console.log(students.name)); // Logs each students name

students.forEach(students => students.tuitionStatus = 'Paid'); // adds tuitionStatus: 'Paid' to each student

console.log(students);