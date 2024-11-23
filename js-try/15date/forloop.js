// const person = {fName: 'John', lName: 'Smith', age: 34};

// for (let i in person){
//     console.log(person[i]);  
// }


//NO 1
// let number = [65, 78, 45, 89, 54, 66, 78];
// for(let i = 0; i <number.length; i++){
//     let element = number[i];
//     console.log(element);
// }


//NO 2
// const name = ['jomir', 'komir', 'borkot', 'ebrahim', 'jim'];
// for (let i = 0; i<name.length; i++){
//     const element = name[i];
//     console.log(element);
// }


//NO 4
// const number = [78, 90, 78, 90, 99, 89, 76, 67, 97, 34, 67, 76];
// for(let i = 0; i < number.length; i++){
//     let element = number[i];
//     if (element >= 90){
//         continue;
//     }
//     console.log(element);
// }



//NO 5
// const num = numbers([78, 90, 78, 90, 99, 89, 76, 67, 97, 34, 67, 76])
// function numbers(num){
//     let largest = num[0];
//     for(let i = 0; i < num.length; i++){
//         const element = num[i];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }
// console.log(num);


//NO6 
// const number = [78, 90, 78, 90, 99, 89, 76, 67, 97, 34, 67, 76];

// function smallestElement (numbers) {
//     let smallest = numbers[0];
//     for (let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if(element < smallest){
//             smallest = element;
//         }
//     }
//     return smallest;
// }

// const age = smallestElement(number);
// console.log(age);



//NO 7   Array of object
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

// for (const product of products) {
//     if(product.price < 90000){
//         continue;
//     }
//     console.log(product);
// }


// function findPhone (products, searchText) {
//     const result = [];
//     for (const product of products){
    
//         if(product.name.includes(searchText)){
//             result.push(product);
//         }
//     }
//     return result;
// }

// console.log(findPhone(products, "pro"));



// function highPrice(products, searchText) {
//     const result = [];
//     for(const product of products){
//         if(product.price >= 90000){
//             result.push(product);
//         }
//     }
//     return result;
// }
// const input = highPrice(products);
// console.log(input);


//NO8
// const number = [45, 56, 89];
// number.push(99);
// const newNumber = [...number, 88];
// console.log(newNumber);


//NO 9
// const products = [
//     {name: 'laptop', price: 2343, brand: 'lenovo', color: 'silver'},
//     {name: 'phone', price: 89556, brand: 'iphone', color: 'golden'},
//     {name: 'watch', price: 37894, brand: 'casio', color: 'black'},
//     {name: 'sunglass', price: 89645, brand: 'ribon', color: 'pink'},
//     {name: 'camera', price: 56798, brand: 'cannon', color: 'gray'}
// ];

// function get(product) {
//     return product.brand; 
// }

// const getProducts = products.map(get);
// console.log(getProducts);



//NO 10
// const products = [
//     {name: 'laptop', price: 2343, brand: 'lenovo', color: 'silver'},
//     {name: 'phone', price: 89556, brand: 'iphone', color: 'golden'},
//     {name: 'watch', price: 37894, brand: 'casio', color: 'black'},
//     {name: 'sunglass', price: 89645, brand: 'ribon', color: 'pink'},
//     {name: 'camera', price: 56798, brand: 'cannon', color: 'gray'}
// ];

// function get(productShow) {
//     for (const product of product)
//     return product.brand; 
// }

// const getProducts = products.map(get);
// console.log(getProducts);



//NO 11 decrement loop

// for (let i = 10; i >= 0; i--){
//     console.log(i);
// }


// for (let i = 10; i >= 0; i -= 2){
//     console.log(i);
// }

//NO 12 odd number
// for(let i = 0; i <= 20; i++) {
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }