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
//     const ticketPrice = 120;
//     const gardCast = 500;
//     const staff = 8;
//     const staffCast = 50;

// function calculateMoney (ticket, ticketcast, gard, staff, staffCast) {

//     if (ticket <= 0 ){
//         return 'dik dik';
//     }else if (typeof ticket === 'number'){
//         const cast = (ticket * ticketcast) - (gard + (staffCast * staff));
//         return cast;
//     }
// }
// console.log(calculateMoney (93, ticketPrice, gardCast, staff, staffCast));



// problem 4 kuno sentence Vowel koyta
// const vowels = ["a", "y", "i", "e", "o", "u", "w", "A", "Y", "I", "E", "O", "U", "W"];

// function countVowels(sentence){
//     const lastChar = sentence[sentence.length - 1];
//     if(vowels.includes(lastChar)){
//         return 'goodName'
//     }
//     return 'badName'
// }
// console.log (countVowels("dippot"));



// problem 5 
// function deleteInvalids (array){
//     if (!Array.isArray(array)){
//         return 'Invalid input! Please provide an array.';
//     }else{
//         const add = [];
//     for(const i of array){
//         if (typeof i === 'number'){
//             add.push(i);
//         }
//     }
//     return add;
//     }

// }
// const number = {num: [ 1 , 2 , 3 ]};
// console.log(deleteInvalids(number));



//problem 6
// function password(obj){
//     if(Object.entries(obj).length !== 3 || obj.birthYear.toString().length !== 4){
//         return 'invalid';
//     }else{
//         for (const i in obj){
//             const siteNames = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
//             return `${siteNames}#${obj.name}@${obj.birthYear}`;
//         }
//     }

// }
// console.log(password({ name: "kolimuddin" , birthYear: 199, siteName: "google"}));


//problem 7
function monthlySaving(arr, livingCast) {
    let total = [];  // [1000, 2000, 2800];
    let sum = 0;
    if (Array.isArray(arr) && !isNaN(livingCast)) {
        for (const i of arr) {
            if (i < 3000) {
                total.push(i);
            } else if (i >= 3000) {
                let tax = i * (20 / 100);
                let net = i - tax;
                total.push(net);
            }
        }

        for (const i of total) {
            sum += i;
        }
        sum -= livingCast;

        if (sum < 0) {
            return 'Not enough money for saving';
        }


        return 'Saving' + " " + sum;
    }else{
        return 'Invalid';
    }




}
console.log(monthlySaving([900, 2700, 2400], 5000));