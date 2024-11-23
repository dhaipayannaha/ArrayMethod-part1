// 0-9 prjonto 100 dile 99 porjonto
// const number = Math.floor(Math.random()* 10);
// console.log(number);


// const num = Math.floor(Math.random() * 6) + 1;
// console.log(num);


// function cokka (min, max){

//     const num = Math.floor(Math.random() * max) + min;
//     return num;
// }

// console.log (cokka(1, 6));


// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
//   }

//   console.log(getRndInteger(1, 6));

// const num = Math.floor(Math.random() * 5 + 1) + 1;
// console.log (num);

// const student = ["kolim", "jolim", "dalim", "akbor", "hussion"];
// student.sort();
// console.log (student);


// const roll = [67, 89, 34, 67, 87, 57, 34];

// roll.sort(function(a, b){
//     return a-b;
// });
// console.log(roll);


// function leapyear(year){
//     if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
//         console.log(`${year} is a leap year` );
//     }else {
//         console.log(`${year}  is not a leap year`);
//     }
// }
// leapyear(2026);
// leapyear(2027);
// leapyear(2028);
// leapyear(2029);
// leapyear(2030);
// leapyear(2031);
// leapyear(2032);


// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowels(sentence) {
//     let count = 0;
//     const letter = Array.from(sentence);
//     letter.forEach(function(value){
//         if(vowels.includes(value)){
//             count++;
//         }
//     });
//     return count;

// }
// console.log(countVowels("i lovw bangladesh"));

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// function countVowels(sentence){
// let count = 0;
// const letter = Array.from(sentence);

// letter.forEach(function(value){
//     if(vowels.includes(value)){
//         count++;
//     }
// });
// return count;

// }

// console.log(countVowels("i love bangladeshi people"));

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowels(sentence){
//     let count = 0;
//     const letter  = Array.from(sentence);
//     letter.forEach(function(value){
//         if(vowels.includes(value)){
//             count++;
//         }
//     });
//     return count++;

// }

// console.log(countVowels("i love travale"));



// function countVowels (sentence){
//     let count = 0;
//     const letter = Array.from(sentence);

//     letter.forEach(function(value){
//         if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(value)){
//             count++;
//         }
//     });
//     return count;

// }

// console.log(countVowels("i love travels from bangladesh"));



// const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 10, 4];
// const duplicates = numbers.filter(function(value, index, array){
//     return array.indexOf(value) === index;
// });
// console.log(duplicates);