// no1  it is a loodo game for 1 to 6
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }

//   console.log(getRndInteger(1, 6));


//কিভাবে আমরা আমাদের শ্রেনি কখের সকলের নাম  alphabetically sajate pari
// const student = ["kolim", "borkot", "ankon", "dipkor"];
// console.log(student.sort());


//কিভাবে আমরা আমাদের শ্রেনি কখের সকলের number sajate pari
// const student = [56, 78, 45, 34, 89, 90, 97, 56, 78];
// student.sort (function(a, b){
//     return a-b;
// });
// console.log(student);



// leap year or not
// function isLeapYear(year){
//     if ( year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
//         console.log(`${year} is a leap year`);
//     }else{
//         console.log(`${year} is not a leap year`);
//     }
// }

// isLeapYear(2028);




// kuno sentence Vowel koyta

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




//no 5   find out duplicate number from array
// const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 10, 4];
// const duplicates = numbers.filter(function(value, index, array){
//     return array.indexOf(value) !== index;
// });
// console.log(duplicates);



//no 5   find out unique number from array
// const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 10, 4];
// const duplicates = numbers.filter(function(value, index, array){
//     return array.indexOf(value) === index
// });
// console.log(duplicates);