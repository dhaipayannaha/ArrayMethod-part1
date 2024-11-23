// const sentence = " ipsum dolor Lorem amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem, quis nostrud Lorem ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in Lorem velit esse cillum dolore eu Lorem nulla pariatur. Excepteur sint occaecat cupidatat";

// const matches = sentence.match(/Lorem/gi);
// // const ocur = matches.length;
// const fix = matches ? matches.length : "not Found";
// console.log(fix);
// console.log(matches);
// console.log(ocur);

// if (matches){
//     const ocur = matches.length;
//     console.log(ocur);
// }else{
//     console.log('Not Found');
// }

// no2 first number of lorem 
// search ki kore kuno kichu na pale -1 dey
// let position = sentence.search(/Lorem/i);
// position = position >= 0 ? position : "not found";
// console.log(position);



//No 3 problem
// input : linerSearch(['a', 'b', 'c', 'd', 'c'], 'c');
//output : 2 or not found!
//problem : linearSearch() function ti implement 

// function linearSearch(arr, value) {
//     const length = arr.length
//     for(let i = 0; i < length; i++) {
//         if(arr[i] === value){
//             return i;
//         }
//     }
//     return "Not Found!";
// }
// console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));





// NO 4 
// function longestString(names) {
//     let store = '';
//     for (let i = 0; i < names.length; i++){
//         let element = names[i];
//         if (element.length > store.length){
//             store = element;
//         }
        
//         // console.log(check);
//         // console.log(element);
//     }
//     return [store, names.indexOf(store)];

// }
// console.log(longestString(['dhaipayan', 'digant', 'ridom', 'partho', 'kormoker', 'bosak']));


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


//No 5 
// function fizzBuzz (num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log(`${i} is fizzBuzz`);
//         }else if(i % 3 === 0){
//             console.log(`${i} is fizz`);
//         }
//         else if(i % 5 === 0){
//             console.log(`${i} is buzz`);
//         }else{
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(100);



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

// const ttrueArray = mixedArr.filter(function(el){
//     if (el){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log (ttrueArray);



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

//    const truthyObject = function (obj){
//     for(let i in obj){
//         if(!obj[i]){
//             delete obj[i];
//         }
//     }
//     return obj;
//    }
//    console.log(truthyObject(obj));