//NO 1 largest element from an array
// const number = [54, 67,85, 98, 89, 46];

// function largestElement(num) {
//     let largest = [0];
//     for(const item of num){
//         if(item > largest){
//             largest = item;
//         }
//     }
//     return largest;
// }
// const age = largestElement(number);
// console.log(age);


//NO 2 sum of an array 
// const array = [54, 67,85, 98, 89, 46];

// function sumArray(num){
//     let sum = 0;
//     for(const element of num){
//         sum += element;
//     }
//     return sum;
// }
// const number = sumArray(array);
// console.log(number);



//NO 3 reverse array
// const array = [54, 67,85, 98, 89, 46];

// function reverseArray(num){
//     let array = [];
//     for(const element of num){
//         array.unshift(element);
//     }
//     return array;
// }

// const reversedArray = reverseArray(array);
// console.log(reversedArray);



//NO 4 another way to reverse
// const array = [54, 67,85, 98, 89, 46];

// function reverseArray(num){
//     let array = [];
//     for(let i = num.length - 1; i >= 0; i--){
//         const element = num[i];
//         array.push(element);
//     }
//     return array;
// }

// const reversedArray = reverseArray(array);
// console.log(reversedArray);


//NO 5  value present or not in number
// function checkValue (number, value){
//     for (const i of number){
//         if(i === value){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(checkValue([54, 67,85, 98, 89, 46], 98))


//NO6 show number duplicate
// function checkArray (array, value) {
//     let add = []
//     for(let i = 0; i < array.length; i++){
//         if(array[i]  === value){
//             add.push(array[i]);
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


//N0 6 find the even number
// const number = [54, 67,85, 98, 89, 46, 99, 98];

// function evenNumber (num){
//     let even = [];
//     for(let i of number){
//         if(i % 2 === 0){
//             even.push(i);
//         }
//     }
//     return even;
// }

// console.log(evenNumber(number));


//N0 6 find the even number
// const number = [54, 67,85, 98, 89, 46, 99, 98];

// function evenNumber (num){
//     let odd = [];
//     for(let i of number){
//         if(i % 2 !== 0){
//             odd.push(i);
//         }
//     }
//     return odd;
// }

// console.log(evenNumber(number));


//NO 7 Find the Index of a Value in an Array
// function findIndex (num, value){

//     for(let i = 0; i < num.length; i++){
//         if (num[i] === value){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(findIndex([54, 67,85, 98, 89, 46], 67));



// NO 8 remove duplicate from array
// function removeDuplicates (num){
//     let unique = []
//     for (let i = 0; i < num.length; i++){
//         const element = num[i];
//         if (!unique.includes(element)){
//             unique.push(element);
//         }
//     }
//     return unique;
// }

// const number = removeDuplicates([54, 67,85, 98, 89, 46, 98]);
// console.log(number);


//No 9 concat two array 
// function concateArray (num1, num2, num3){
//     return num1.concat(num2, num3)
// }

// const first = [1, 2, 3, 4, 5];
// const second = [6, 7, 8, 9, 10];
// const third = [11, 12, 13, 14, 15];

// console.log(concateArray(first, second, third));


//NO 10
// const names = ['kolim', 'borket', 'joshim', 'andoir', 'nandor'];
// console.log(names.sort());

//No 11 sort number
// const student = [56, 78, 45, 34, 89, 90, 97, 56, 78];
// student.sort(function(a, b){
//     return a - b;
// })
// console.log(student);


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