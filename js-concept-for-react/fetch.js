// amra object ke stringify korte pari aber stringify ke object a rupantor korte pari.
// 1, JSON => stringify, parse

const student = {
    name: 'John Doe',
    age: 20,
    grade: 95,
    subject: 'Math',
    movies: ['John', 'Doe']
};


const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// normal JS ke JSON a convert korte JSON.stringify  aber JSON take JS convert korar jonno JSON.parse


// 2. fatch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));
// ai jaygay data ta ki hisabe pass hoche ta khail rakhte hobe. aber object ar property hisabeo array thakte pare

const keys = Object.keys(student); // array pathabe
const valus = Object.values(student); // array
console.log(keys,valus);
// for

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(number => console.log(number)); // array loop korte foreach use korbo

numbers.map(num => num * 2); // array loop korte foreach use korbo jokhon aita theke return proyojon hobe



// 3. add  or remove from array

const products = [
    {name: 'laptop', price: 2345, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 2545, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 5345, brand: 'casio', color: 'black'},
    {name: 'sunglass', price: 8345, brand: 'ribon', color: 'pink'},
    {name: 'camera', price: 9345, brand: 'cannon', color: 'gray'}
];

const newProduct = {new: 'webcam', price: 100, brand: 'lal'};


// copy products array and then add new product
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter(p => p.name !== 'phone');
// console.log(remaining);