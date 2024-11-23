// const person = { first: "dippo", last: "naha"};

// for (let i in person) {
//     console.log(person[i]);
// }

//no 1
// let number = [65, 78, 45, 89, 54, 66, 78];

// for (let i = 0; i < number.length; i++) {
//     let element = number[i];
//     console.log(element);
// }


//NO 2
// let name = ['kolim', 'jolim', 'polash', 'komol','borkot'];
//  for (let i =0; i < name.length; i++){
//     const element = name[i];
//     console.log(element);
//  }

//NO 3
// const number = [78, 90, 78, 90, 99, 89, 76, 67, 97, 34, 67, 76];

// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
    
//     if (element >= 90) {
//         continue; 
//     }
    
//     console.log(element);
// }


//NO 4
// const number = [78, 90, 78, 90, 99, 89, 76, 67, 97, 34, 67, 76];
// function smallestNumber (numbers) {
//     let smallest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if(element < smallest){
//             smallest = element;
//         }
//     }
//     return smallest;
// }
// const age = smallestNumber(number);
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

// for (let product of products) {
//     if(product.price <= 90000){
//         console.log(product);
//     }
// }

// function findPhone(products, searchText) {
//     let results = [];
//     for (let product of products) {
//         if(product.name.includes(searchText)){
//             results.push(product);
//         }
//     }
//     return results;
// }

// console.log(findPhone(products, "pro"))



// const num = [45, 87, 89, 78];
// num.push(100);
// const number = [...num, 200];
// console.log(number);



//NO 9
// const products = [
//     {name: 'laptop', price: 2343, brand: 'lenovo', color: 'silver'},
//     {name: 'phone', price: 89556, brand: 'iphone', color: 'golden'},
//     {name: 'watch', price: 37894, brand: 'casio', color: 'black'},
//     {name: 'sunglass', price: 89645, brand: 'ribon', color: 'pink'},
//     {name: 'camera', price: 56798, brand: 'cannon', color: 'gray'}
// ];

// function get(product){
//     return product.brand;
// }

// const getProducts = products.map(get);
// console.log(getProducts);




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

