//NO 1 
// const number = [5, 6, 11, 12, 98, 5];
// const match = 5;

// function count(num, match) {
//     let value = 0;
//     for (const item of num) {
//         if (item === match) {
//             value++;
//         }
//     }
//     return value;
// }

// const array = count(number, match);
// console.log(array); 

//NO 2
// const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
// const sentence = 'i love you bangladesh';

// function check (vow, sen) {
//     let count = 0;
//     for (const item of vow) {
//         if (sen.includes(item)) {
//             count++;
//         }

//     }
//     return count;
// }
// console.log(check(sentence, vowel)); 

//NO 3 marketing
// function totalCast (shirtQuantity, pantQuantity, showQuantity){
//     const shirt = 500;
//     const pant = 500;
//     const show = 500;

//     const totalShirt = shirtQuantity * shirt;
//     const totalPant = pantQuantity * pant;
//     const totalShow = showQuantity * show;

//     let totalCast = totalShirt + totalPant + totalShow;

//     return totalCast;
// } 

// const cast = totalCast(1, 2, 1);
// console.log(cast);


// no 5 expansive phone
// const phones = [
//     {name: 'oppo', price: 50000, camera: '12mp', color: 'black'},
//     {name: 'oneplus', price: 60000, camera: '20mp', color: 'blue'},
//     {name: 'samsung', price: 70000, camera: '48mp', color: 'red'},
//     {name: 'vivo', price: 40000, camera: '76mp', color: 'green'},
//     {name: 'apple', price: 90000, camera: '99mp', color: 'pink'},
//     {name: 'zte', price: 95000, camera: '19mp', color: 'yellow'},
// ]

// function expansivePhone(phones) {
//     let max = phones[0];
//     for (const phone of phones){
//         if (phone.price < max.price){
//             max = phone;
//         }
//     }
//     return max;
// }
// console.log(expansivePhone(phones));




//6 discount
// function layeredDiscountedTotal (quantity) {
//     const first100Price = 100;
//     const second100Price = 90;
//     const above200Price = 70;

//     if (quantity <= 100){
//         const total = quantity - first100Price;
//         return total;
//     } else if (quantity <= 200){
//         const first100Total = 100 * first100Price;
//         const remainingQuantity = quantity - 100;
//         const remainingTotal = remainingQuantity * second100Price;
//         const total = first100Total + remainingTotal;
//         return total;
//     }
//     else {
//         const first100Total = 100 * first100Price;
//         const second100Total = 100 * second100Price;
//         const remainingQuantity = quantity - 200;
//         const remainingTotal = remainingQuantity * above200Price;
//         const total = first100Total + second100Total + remainingTotal;
//         return total;
//     }
// }
// console.log(layeredDiscountedTotal(145));







//NO 8
// function multiply (num1, num2){
//     if (typeof num1 !== 'number'){
//         return 'Invalid input! Please enter a number.';
//     }else {
//         const mult = num1 * num2;
//     return mult;
//     }
// }

// const result = multiply(5, 10);
// console.log(result);


//NO 9
// function getSecond(numbers){
//     if (Array.isArray(numbers) === false){
//         return 'please provide an array';
//     }
//     else{
//         const second = numbers[1];
//         return second
//     }
// }
// const second = getSecond([234, 56, 78, 43, 78]);
// console.log(second);


//No 10
// function getPrice (product){
//     if(typeof product !== 'object'){
//         return 'please object'
//     }
//     else {
//         const price = product.price;
//         return price;
//     }
// }

// const price = getPrice(({name: 'minote', price: 35, color: 'blue'}));
// console.log(price);


/// problem 1 
// const heights2 = [167, 190, 120, 165, 137];

// function higestArray (num){
//     let max = num[0];
//     for(const i of num){
//         if (i > max){
//             max = i;
//         }
//     }
//     return max;
// }

// console.log(higestArray(heights2));


// problem 2
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// function stringLength (num){
//     let height = num[0];
//     for (const i of num){
//         if (i.length > height.length){
//             height = i;
//         }
//     }
//     return height;
// }
// console.log(stringLength(heights2));



//problem 3
// function total (tablet, laptop, mobile){
//     return `all price is ${tablet + laptop + mobile} tk`;
// }
// const laptop = 35000;
// const tablet = 15000;
// const mobile = 20000;
// console.log(total(tablet, laptop, mobile));



// problem 4
// function findAveragePhonePrice (phones){
//     let allPrice = 0
//     for(const phone of phones){
//         const price = phone.price
//         allPrice = allPrice + price;
        
//     }
//     const avaragePrice = allPrice / phones.length;
//     return parseInt(avaragePrice);

// }

// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// console.log(findAveragePhonePrice(phones));



//problem 5 
// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

// function companyCast (array){
//     let totalAmount = 0;
//     for(const name of array){
//         const total = name.starting + (name.increment * name.experience);
//         totalAmount = totalAmount + total;
//     }
//     return totalAmount;
// } 

// console.log(companyCast(employees));
