const numbers = [45, 46, 47,];

const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
    },
    movies:['king', 'dim', 'lim'],
    
};

// 1. template string
const about = `My name is ${person.name} age of ${person.age}  has number ${numbers[2]} also movies ${person.movies[2]}`;
// console.log(about);

// 2. arrow function
const getFiftyfive = () => 55;
const getSixtyfive = num => num + 65;
const addThree = (x, y, z) => x + y + z;
const doMath = (sum1, sum2) => {
    const sum = sum1 + sum2;
    return sum;
};

//3 spread Operator
const newNumbers = [...numbers];
//  create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(98);


console.log(newNumbers);
console.log(numbers);
console.log(currentNumbers);