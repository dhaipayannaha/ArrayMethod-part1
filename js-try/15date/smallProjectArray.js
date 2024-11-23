//NO 1 largest element
// function largestElement(numbers) {
//     let largest = [0]
//     for (let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const age = [54, 67,85, 98, 89, 46];
// const num = largestElement(age);
// console.log(num);


//NO 2 sum
// function sum (numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//          const element = numbers[i];
//          sum = sum + element;
//     }
//     return sum;
// }
// const age = [54, 67,85, 98, 89, 46];
// const num = sum(age);
// console.log(num);



//NO 3
// function reverseArray (numbers) {
//     const reverse = [];
//     for(let i = numbers.length - 1; i >= 0; i--){
//         const element = numbers[i];
//         reverse.push(element);
//     }
//     return reverse;
// }

// const age = [54, 67,85, 98, 89, 46];
// const rev = reverseArray (age);
// console.log(rev);



//NO 3 (another reverse);
// const number = [1, 2, 3, 4, 5, 6, 7];

// const reverse = [];
// for(const num of number) {
//     reverse.unshift(num);
// }
// console.log(reverse);




//NO4
// function checkArray (array, value) {
//     for(let i = 0; i < array.length; i++){
//         if(array[i]  === value){
//             return true;
//         }
//     }
//     return false;
// }

// const number = checkArray ([54, 67,85, 98, 89, 46], 98);
// console.log(number);

//NO 4  show number duplicate
// function checkArray (array, value) {
//     let add = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i]  === value){
//            add.push(array[i]);
//         }
//     }
//     return add;
// }

// const number = checkArray ([54, 67,85, 98, 89, 46], 98);
// console.log(number);


//NO 5  show number unique
// function checkArray (array, value) {
//     let add = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i]  !== value){
//            add.push(array[i]);
//         }
//     }
//     return add;
// }

// const number = checkArray ([54, 67,85, 98, 89, 46], 98);
// console.log(number);


//No5  filter even numbers
// function eventNumber (number) {
//     const even = [];
//     for(let i = 0; i < number.length; i++){
//         if(number[i] % 2 === 0){
//             even.push(number[i]);
//         }
//     }
//     return even;
// }
// const number = eventNumber([54, 67,85, 98, 89, 46]);
// console.log(number);



//NO6 Find the Index of a Value in an Array
// function findIndex (number, value){
//     for(let i = 0; i < number.length; i++){
//         if(number[i] === value){
//             return i
//         }
//     }
//     return -1;
// }
// const number = findIndex([54, 67,85, 98, 89, 46], 67);
// console.log(number);


//NO7 Remove Duplicates from an Array
// function removeDuplicates (number){
//     const unique = [];
//     for(let i = 0; i < number.length; i++){
//         if(!unique.includes(number[i])){
//             unique.push(number[i]);
//         }
//     }
//     return unique;
// }
// const number = removeDuplicates([54, 67,85, 98, 89, 46, 98]);
// console.log(number);


//NO8 concate two array
// function concateArray (number1, number2){
//     return number1.concat(number2);
// }

// const first = [1, 2, 3, 4, 5];
// const second = [6, 7, 8, 9, 10];
// const add = concateArray(first, second);
// console.log(add);

// no9  it is a loodo game for 1 to 6
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }

//   console.log(getRndInteger(1, 6));

//NO10
//কিভাবে আমরা আমাদের শ্রেনি কখের সকলের নাম  alphabetically sajate pari
// const student = ["kolim", "borkot", "ankon", "dipkor"];
// console.log(student.sort());



//NO 11
//কিভাবে আমরা আমাদের শ্রেনি কখের সকলের number sajate pari
// const student = [56, 78, 45, 34, 89, 90, 97, 56, 78];
// student.sort (function(a, b){
//     return a-b;
// });
// console.log(student);



//NO 12 leap year or not
// function isLeapYear(year){
//     if ( year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
//         console.log(`${year} is a leap year`);
//     }else{
//         console.log(`${year} is not a leap year`);
//     }
// }

// isLeapYear(2028);


// NO 13 kuno sentence Vowel koyta
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowels(sentence){
//     let count = 0;
//     const letters = Array.from(sentence);

//     letters.forEach(function(value){
//         if (vowels.includes(value)){
//             count++;
//         }
//     });
//     return count;
// }
// console.log (countVowels("i love bangladesh"));


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