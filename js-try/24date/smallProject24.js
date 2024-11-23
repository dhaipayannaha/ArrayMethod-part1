//NO 1 Largest number
// const age = [54, 67,85, 98, 89, 46];

// function largest (number) {
//     let largest = [0];
//     let l =number.length;
//     for (let i = 0; i < l; i++) {
//         const element = number[i];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const num = largest(age);
// console.log(num);


//NO 2 sum all number
// const sum = [54, 67,85, 98, 89, 46];

// function sumArray (number) {
//     let sum = 0;
//     for (let i = 0; i < number.length; i++){
//         const element = number[i];
//         sum = sum + element;
//     }
//     return sum;
// }

// const num = sumArray(sum);
// console.log(num);


// NO 3 reverse array
// new task sort this assending  then reverse array/    like desceinding
// const rev = [54, 67,85, 98, 89, 46];

// function reverseArray (number) {
//     const reverse = [];
//     for (let i = number.length - 1; i >= 0; i--){
//         const element = number[i];
//         reverse.push(element);
//     }
//     return reverse;
// }

// const num = reverseArray(rev);
// console.log(num);

// NO 5 return true/fale when array and vale same
// function duplicate (array, value){
    
//     for (let i = 0; i < array.length; i++){
//         if(array[i] === value){
//             return true;
//         }
//     }return false;
// }

// const num =  duplicate([54, 67,85, 98, 89, 46], 98);
// console.log(num);



// NO 6 return duplicate number from array
// function duplicate (array, value){
//     const add = [];
//     for (let i = 0; i < array.length; i++){
//         if(array[i] === value){
//             add.push(array[i]);
//         }
//     }return add;
// }
// const num = duplicate([54, 67,85, 98, 89, 46], 98);
// console.log(num);


//NO 7 return fresh number 
// function duplicate (array, value){
//     const add = [];
//     for (let i = 0; i < array.length; i++){
//         if(array[i] !== value){
//             add.push(array[i]);
//         }
//     }return add;
// }
// const num = duplicate([54, 67,85, 98, 89, 46], 98);
// console.log(num);


//No 8 event number
// const num = [54, 67,85, 98, 89, 46];

// function evenNumber (number) {
//     const even = [];
//     for (let i = 0; i < number.length; i++){
//         const element = number[i];
//         if(element % 2 === 0){
//             even.push(element);
//         }
//     }return even;
// }

// const even = evenNumber(num);
// console.log(even);


//No 8 odd number
// const num = [54, 67,85, 98, 89, 46];

// function oddNumber (number) {
//     const odd = [];
//     for (let i = 0; i < number.length; i++){
//         const element = number[i];
//         if(element % 2 !== 0){
//             odd.push(element);
//         }
//     }return odd;
// }

// const odd = oddNumber(num);
// console.log(odd);




//NO 9

// function findIndex (array, value) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === value){
//             return i;
//         }
//     } return -1;
// }

// const num = findIndex([54, 67, 85, 98, 89, 46], 67);
// console.log(num);



//NO 10
// function uniqueArray (number) {
//     let unique = [];
//     for (let i = 0; i < number.length; i++) {
//         const element = number[i];
//         if (!unique.includes(element)){
//             unique.push(element);
//         }
//     }return unique;
// }

// const num = [54, 67, 85, 98, 89, 46, 98];
// const unique = uniqueArray(num);
// console.log(unique);


//NO 11 concate 2 array 
// function concateArray (num1, num2, num3){
//     const concate = num1.concat(num2, num3);
//     return concate;
// }

// const first = [1, 2, 3, 4, 5];
// const second = [6, 7, 8, 9, 10];
// const third = [11, 12, 13, 14, 15];
//  console.log(concateArray (first, second, third));


//NO 12 lodo game
// function lodo (first, last) {
//    return  Math.floor(Math.random() * last) + first;
// }
// console.log(lodo(1, 6));


//No13
// const number = [56, 78, 45, 34, 89, 90, 97, 56, 78];

// const num = number.sort (function(a, b){
//     return a - b;
// });
// console.log(num);


//NO 14 

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function checkVowel (sentence) {
//     let count = 0;
//     let word = Array.from(sentence);

//     word.forEach(function(value){
//         if (vowels.includes(value)){
//             count++;
//         }
//     });
//     return count;
// }
// console.log(checkVowel("i love bangladesh"));


//no 14   find out duplicate number from array
// const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 10, 4];
// const duplicates = numbers.filter(function(value, index, array){
//     return array.indexOf(value) !== index;
// });
// console.log(duplicates);


//no 15   find out unique number from array
// const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 10, 4];
// const duplicates = numbers.filter(function(value, index, array){
//     return array.indexOf(value) === index
// });
// console.log(duplicates);