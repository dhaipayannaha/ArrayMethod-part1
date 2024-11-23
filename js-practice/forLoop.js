// const person = { fname: 'John', lname: "Doe", age:25};
// for (let x in person){
//     console.log(person[x]);
// } 


// loop/ brak continue

// var numbers = [24, 86, 34, 87, 12, 98, 82];

// for (let i = 0; i <numbers.length; i++){
//     var element = numbers[i];
//     console.log(element);
// }


// const cars = ["jhon", "david", "mike", "laksana", "ujbakista", "divdb"];
// for (let i = 0; i < cars.length; i++){
//     const allCars = cars[i];
//     console.log(allCars);
// }



// const numbers = [56, 78, 45, 34, 67, 89, 80, 98, 95, 93, 99];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     if (element > 90){
//         continue;
//     }
//     console.log(element);
// }



// const number = [56, 78, 45, 34, 67, 89, 80, 98, 95, 93, 99];


// function largestElemnt (numbers) {
//     largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if (element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const oldest = largestElemnt(number);
// console.log(oldest);


// const number = [56, 78, 45, 34, 67, 89, 80, 98, 95, 93, 99];

// function smallestElement (numbers){
//     smallest = numbers[0];

//     for(let i = 0; i <numbers.length; i++){
//         const element = numbers[i];
//         if (element < smallest){
//             smallest = element;
//         }
//     }
//     return smallest;

// }
// const age = smallestElement(number);
// console.log(age);

// const products = [
//     { name: 'iphone 15 pro', price: 95000},
//     { name: 'xiam 14 pro', price: 85000},
//     { name: 's24 ultra', price: 90000},
//     { name: 'google pixel', price: 95000},
//     { name: 'ZTE pro', price: 91000},
//     { name: 'Huawai p 50 pro', price: 75000},
//     { name: 'one plus 14 ultra', price: 70000},
//     { name: 'ROG 8 Pro', price: 99000}
// ]

// for (const product of products){
//     if (product.price < 80000){
//         continue;
//     }
//     console.log(product)
// }

// function findPhone (products, searchText){

//     const result = [];
//     for (const product of products){
//         if(product.name.includes(searchText)){
//             result.push( product);
//         }
//     }
//     return result;
// }

// const matched = findPhone (products, "pro");
// console.log(matched);


// function highPrice (products, searchText){
//     const result = [];

//     for (const product of products){
//         if(product.price >= 90000){
//             result.push(product);
//         }
//     }
//     return result;
// }

// const high = highPrice (products, "pro");
// console.log(high);