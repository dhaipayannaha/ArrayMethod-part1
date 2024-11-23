//problem 1 filter even numbers
// function eventNumber(number) {
//     return number.filter((item) => item % 2 === 0);
//   }
//   const number = eventNumber([54, 67, 85, 98, 89, 46]);
//   console.log(number);

// problem 2 filter odd number
//   function oddNumber(number){
//     return number.filter((item) => item  % 2 !== 0)
//   }
//   const num = oddNumber([54, 67, 85, 98, 89, 46]);
//   console.log(num);



// problem 3 largest length of name
// const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
// function stringLength(num) {
//   return num.reduce((prev, current) =>
//     current.length > prev.length ? current : prev,
//   );
// }
// console.log(stringLength(heights2));



// problem 4 average phone price
// function findAveragePhonePrice(phones) {
//     return parseInt(
//       phones.reduce((prev, current) => current.price + prev, 0) / phones.length
//     );
//   }
  
//   const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
//   ];
  
//   console.log(findAveragePhonePrice(phones));




//NO 1 largest element
// function largestElement(numbers) {
//     return Math.max(...numbers);
// }

// const age = [54, 67,85, 98, 89, 46];
// const num = largestElement(age);
// console.log(num);


// NO 2 smallest element
// function largestElement(numbers) {
//     return Math.min(...numbers);
// }


//NO 3 largest element
// function largestNumber (number){
//   return number.reduce((pre, current) => current > pre ? current : pre, 0)
// }
// const get = [54, 67,85, 98, 89, 46];
// const number = largestNumber(get);
// console.log(number);


//NO 4 smallest element
// function smallestNumber (number){
//   return number.reduce((pre, current) => current < pre ? current : pre, number[0]);
// }
// const get = [54, 67,85, 98, 89, 46, 23];
// const number = smallestNumber(get);
// console.log(number);



//NO 5 reverse array (part 1)
// function array (num){
//   return num.reduceRight((pre, current) => {
//     pre.push(current);
//     return pre;
//   }, [] ) 
// } 
// const age = [54, 67,85, 98, 89, 46];
// const rev = array (age);
// console.log(rev);


// No6 reverse array (part2) ME
// const age = [54, 67, 85, 98, 89, 46];
// const rev = age.reverse();

// console.log(rev); 


//NO 5 reverse array (part 3)  ME
// function array (num){
//   return num.reduce((pre, current) => {
//     pre.unshift(current);
//     return pre;
//   }, [] ) 
// } 
// const age = [54, 67,85, 98, 89, 46];
// const rev = array (age);
// console.log(rev);


//NO 6 array value checking  
// function checkArray (array, value) {
//   const result = array.filter(item => item !== value);
//   return result;
// }

// const number = checkArray ([54, 67,85, 98, 89, 46], 98);
// console.log(number);


// NO 7  array valu return chacking true false
// function checkArray(array, value) {
//   return array.reduce((found, item) => found || item === value, false);
// }

// const number = checkArray([54, 67, 85, 98, 89, 46], 98);
// console.log(number); 



//NO 8  array valu return chacking true false  (ME)
// function checkArray(array, value) {
//   return array.some(item => item === value);
// }

// const number = checkArray([54, 67, 85, 98, 89, 46], 98);
// console.log(number);


// NO 9 return array index
// function findIndex(arr, value) {
//   return arr.reduce((prevIndex, current, index) => {
//     return current === value ? index : prevIndex;
//   }, -1);
// }

// const index = findIndex([54, 67, 85, 98, 89, 46], 67);
// console.log(index); 


//NO10 Remove Duplicates from an Array
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



// function removeDuplicates(numbers) {
//     return [...new Set(numbers)];
// }

// const numbers = removeDuplicates([54, 67, 85, 98, 89, 46, 98]);
// console.log(numbers);


//NO 11 finding duplicate an array   ME
// function array (num){
//   return num.reduce((pre, current) => {
//     if(!pre.includes(current)){
//         pre.unshift(current);
//     }
//     return pre;
//   }, [] ) 
  
// } 
// const age = [54, 67,85, 98, 89, 46, 98, 54];
// const rev = array (age);
// console.log(rev);



