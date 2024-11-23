// 1. array destructuring

const numbers = [10, 20];

// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [10, 20];
// const [x, y] = numbers;
// console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(90, 56));

const [first, second] = boxify(34, 67);

// console.log(boxify(90, 56));


const person = {
    name: 'John Doe',
    age: 30,
    movies: ['John', 'Doe']
};

const [firstMovies, secondMovies] = person.movies;


// 2 object destructuring
// arry te seriyal waise thakte hoy , object khtre ak jaygay thaklai hoy  value hisabe dhore niye asber
const {name, age}= {name: 'John Doe', age:14}

const employee = {
    name: 'John Doe',
    age: 30,
    department: 'IT',
    salary: 5000,
    languages: ['html', 'css', 'js'],
    spacifications: {
        height: 66,
        width: 120,
        address: 'kurmitola',
    }
}

const {machine, ide} = employee;
const {address, height} = employee.spacifications;
console.log({address, height});

// dan side jodi object thake ba side object create korte HTMLObjectElement.  array thakle array 