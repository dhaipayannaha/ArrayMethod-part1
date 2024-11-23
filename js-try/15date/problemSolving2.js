//NO 1 string spacific word found and find its length
const sentence = "ipsum dolor Lorem amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem, quis nostrud Lorem ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in Lorem velit esse cillum dolore eu Lorem nulla pariatur. Excepteur sint occaecat cupidatat";

// const matches = sentence.match(/loremr/gi);
// // const lengthMatch = matches.length 
// const fix = matches ? matches.length : "Not found";

// // console.log(lengthMatch);
// // console.log(matches);
// console.log(fix);


//No 2 find first index from sentence/ string 
// let position = sentence.search(/lorem/i);
// position = position >= 0 ? position :  "not found";
// console.log(position);


//NO 3 find value index in array
// function linerSearch (array, value){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === value){
//             return i;
//         }
//     }
//     return "not found";

// }
// console.log(linerSearch(['a', 'b', 'c', 'd', 'c'], 'c'));



//NO 4 largest string & showing largest element index number
// function largestString (names){
//     let largest = '';
//     for(let i = 0; i <=names.length; i++){
//         let element = names[i];
//         if(element.length > largest.length){
//             largest = element;
//         }
//         return [largest, names.indexOf(largest)];
//     }
// }
// console.log(largestString(['dhaipayan', 'digant', 'ridom', 'partho', 'kormoker', 'bosak']));



// NO4  using for of loop  number 4
// function longestString(names) {
//     let store = '';
//     for (name of names){
//         if (name.length > store.length){
//             store = name;
//         }
        
//         // console.log(check);
//         // console.log(element);
//     }
//     return [store, names.indexOf(store)];

// }
// console.log(longestString(['dhaipayan', 'digant', 'ridom', 'partho', 'kormoker', 'bosak']));


// NO 5 3 is fezz, 5 is buzz, 3&5 is fezzbuzz
// function fezzBuzz (num) {
//     for(let i = 1; i < num; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log(`${i} is fizzBuzz`);
//         }
//         else if(i % 3 === 0){
//             console.log(`${i} is fizz`);
//         }else if(i % 5 === 0){
//             console.log(`${i} is buzz`);
//         }else{
//             console.log(i);
//         }
//     }
// }
// fezzBuzz(100);



//NO 6  remove folsey value
// const mixedArr = [
//     "lws",
//     undefined,
//     "learn with Sumit",
//     false,
//     "apple",
//     40,
//     "k",
//     true,
//     "Thanks All",
//     NaN
// ];

// const trueArray = mixedArr.filter(function(ele){
//     if(ele){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(trueArray);

//NO6  same mathod using boolean function
// const btrueArray = mixedArr.filter(Boolean);
// console.log (btrueArray);



//NO 7 remove falsey value from object
// const obj = {
//     a: "lws",
//     b: undefined,
//     c: "learn with Sumit",
//     d: false,
//     e: "",
//     f: "apple",
//     g: 40,
//     h: "k",
//     i: true,
//     j: "Thanks All",
//     k: NaN
// }

// const truthyObject = function (obj) {
//     for(let i in obj) {
//         if(!obj[i]){
//             delete obj[i];
//         }
//     }
//     return obj;
// }
// console.log(truthyObject(obj));