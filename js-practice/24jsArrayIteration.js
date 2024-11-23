// const number = [1, 2, 3, 4, 56, 98, 76];
// function myFunction(value, index, array){
//     console.log(value);
//     console.log(index);
//     console.log(array);
//     console.log("--------------");
// }
// number.forEach(myFunction);
// No1 js forEach

// No1 js forEach
// const number = [1, 2, 3, 4, 56, 98, 76];

// function myFunction(value, index, array){
//     return value * 2;
// }

// const newNumbers = number.map(myFunction);
// console.log(newNumbers);


//mai array theke niye kichu array dekhabe. array akta notun array return

// const number = [1, 2, 3, 4, 56, 98, 76];

// function myFunction(value, index, array){
//     return value > 10;
// }

// const newNumbers = number.filter(myFunction);
// console.log(newNumbers);



// reduce array return kor na akta single value te reduce kore ane. reduce mane chuto kora
// ai jaygay sobgulake jug kora hoyeche
// No1 js forEach
// const number = [17, 3, 4, 56, 98, 76];

// function myFunction(total, value, index, array){
//     return total + value;
// }

// const newNumbers = number.reduce(myFunction);
// console.log(newNumbers);



// total ager value theke current value ta jug korce
// No1 js forEach
// const number = [17, 3, 4, 56, 98, 76];

// function myFunction(total, value, index, array){
//     console.log(total);
//     return total + value;
// }

// const newNumbers = number.reduce(myFunction);
// console.log(newNumbers);



// tokhon sa initial valu dhorbe 10  mane 17 + 10  tarpor hobe 27 + 3 hobe.
// const number = [17, 3, 4, 56, 98, 76];

// function myFunction(total, value, index, array){
//     return total + value;
// }

// const newNumbers = number.reduce(myFunction, 10);
// console.log(newNumbers);


//reduce right
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduceRight(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// console.log(sum);




//every kicuta filter moto  filter akta array dibe ar every  prothekta value diye jave boro hole true return korbe ta na hole false return korbe
// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value, index, array) {
//   return value > 18;
// }
// const newNumbers = numbers.every(myFunction);
// console.log(newNumbers);

// akta value jodi 18 thika bashi holai sa true return korbe
// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value, index, array) {
//   return value > 18;
// }
// const newNumbers = numbers.some(myFunction);
// console.log(newNumbers);

// console.log(Array.from("ABCDEFG"));


// notun akta const korle kaj korbe na aber vitore change kora jabe
const car = ["kola", "bashi", "hola"];

car[0]= "ABCDEFG";
car.push("gilbat")
console.log(car);
