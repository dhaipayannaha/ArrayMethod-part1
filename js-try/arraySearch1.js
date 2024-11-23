// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple") + 1;

// console.log(position);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const check = fruits.includes("Mango");
// console.log(check); // is true


const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);