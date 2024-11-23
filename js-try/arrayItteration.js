
const firstNumber = [1, 2, 3, 4, 56, 78, 89];

firstNumber.forEach(function (value, index, array){
    // console.log(value);
    console.log(index);
});






const numbers = [1, 2, 3, 4, 56, 78, 89];

const test = numbers.map(function(value, index, array){
    // console.log(value);
    const check = array.indexOf(value);
    return check;
});

console.log(test);