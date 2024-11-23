// 1. how to declare a variable using let and const
const fatherName = 'kolim';
let season = 'rainy';

// 2. conditions
// 6 basic condition:  >,<,===,!==, <=, >=
// multipule condition: &&, ||

if (season === 'rainy' && season!== 'winter') {
    console.log('It is a rainy season!');
} else if (season === 'winter') {
    console.log('It is a winter season!');
} else {
    console.log('It is not a rainy nor a winter season!');
}

// 3. array
// index
// length, push
const numbers = [45, 46, 47,];
numbers[0] = 56;

// 4. for loop
for (let i = 1; i<=numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. function

function multiplyNumbers(a, b) {
    return a * b;
}

console.log(multiplyNumbers(5, 6));

// 6.object
// 3 way to access property by name

const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
    },
    
};
const myVariable = 'age';

console.log(person.name);  // direct by property
console.log(person['name']);    // access via property string
console.log(person[myVariable]);    // access via property name in a variable