
// function myFunction (value, index, array) {
//     // console.log(value);
//     // console.log(index);
//     // console.log(array);
// }
// const number = [1, 2, 3, 4,78,89, 56];
// number.forEach( myFunction );


// const number = [1, 2, 3, 4,5, 6, 7, 8, 9, 10, 11, 12, 13];
// function myFunction (value, index, array) {
//     return value * 1;
// }
// const newNumber = number.map(myFunction);
// console.log(newNumber);

// const number = [1, 2, 3, 4, 5, 6, 7,]
// function myMap (value, index, array) {
//     return value * 2;
// }
// const newNumber = number.map(myMap);
// console.log(newNumber);

// function myfunction (value, index, array) {
//   return typeof value === 'string';
// }
// const number = [1, 2, 3, 4, 5, 6, 7, "kuddus", "bilkis"];
// const collect = number.filter(myfunction);
// console.log(collect);

// function myReduce (total, value, index, array){
//     // console.log(total);
//     console.log(value);
//     return total + value;
// }

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const modify = number.reduce(myReduce);
// console.log(modify);

// const number = [1, 2, 3, 4, 5, 6, 7];
//  function  myEvery(value, array, index){
//     return value > 5;
//  }
//  const newNumber = number.every(myEvery);
//  console.log(newNumber);

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// function mySome(value, index, array){
//     return index === 3;
// }

// const newNumbers = numbers.some(mySome);
// console.log(newNumbers);


// const number = [67, 78, 98, 67,63, 78, 98, 67, 63, 78];
// number[0] = 99;
// number.sort();
// console.log(number);


// const numbers = [67,68,56,89,90,45, 58];
// numbers.sort();
// numbers.reverse();
// console.log(numbers);

// const points = [56, 89, 45, 76, 56, 83];
// points.sort(function(a,b){
//     return b - a;
// });
// console.log(points);

const cars =[
    
    {name: "toyota", Model: "2020"},
    {name: "lambo", Model: "2016"}
];

cars.sort(function(a, b){
    return a.Model - b.Model;
})
console.log(cars);