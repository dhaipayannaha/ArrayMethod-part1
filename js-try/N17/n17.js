// NO 1 largest element
// function largestElement (number){
//     return Math.max(...number);
// }
// const age = [54, 67,85, 98, 89, 46];
// const num = largestElement(age);
// console.log(num);


//NO 2 Smallest Element
// function smallestElement (num){
//     return Math.min(...num);
// }
// const age = [54, 67,85, 98, 89, 46];
// const array = smallestElement(age);
// console.log(array);



//NO 3 Smallest Element
// function smallestNumber (num){
//     return num.reduce((pre, current) => current < pre ? current : pre, 0);
// }
// const get = [54, 67,85, 98, 89, 46, 23];
// const number = smallestNumber(get);
// console.log(number);



// NO 4 largest Element
// function largestNumber (num){
//     return num.reduce((pre, current) => current > pre ? current : pre , 0);
// }
// const get = [54, 67,85, 98, 89, 46, 23];
// const number = largestNumber(get);
// console.log(number);


//NO 5 reverse array using reduce
// function reverseArray(num){
//     return num.reduce((pre, current) => {
//         pre.unshift(current);
//         return pre;
//     }, []);
// }
// const get = [54, 67,85, 98, 89, 46, 23];
// const number = reverseArray(get);
// console.log(number);



//NO 6 reverse array using reduceRight
// function reverseArrayRight(num){
//     return num.reduceRight((pre, current) =>{
//         pre.push(current);
//         return pre;
//     } , [])
// }
// const get = [54, 67,85, 98, 89, 46, 23];
// const number = reverseArrayRight(get);
// console.log(number);



// NO 7 reverse array using reverse
// function reverseArray(num){
//     return num.reverse()
// }
// const get = [54, 67,85, 98, 89, 46, 23];
// const number = reverseArray(get);
// console.log(number);


// NO  8 filter value
// function chackValue(array, value) {
//     const result = array.filter(item => item !== value);
//     return result
// }
// const age = ([54, 67, 85, 98, 89, 46, 98, 54], 67);
// console.log(age);



//NO 8  array valu return chacking true false  (ME)
// function checkArray(array, value) {
//   return array.some(item => item === value);
// }

// const number = checkArray([54, 67, 85, 98, 89, 46], 98);
// console.log(number);


// NO 9 return array index
// function findIndex(array, value){
//     return array.reduce((preIndex, current, index) => {
//         return current === value ? index : preIndex;
//     }, -1);
// }

// const index = findIndex([54, 67, 85, 98, 89, 46], 85);
// console.log(index); 


//NO 10 Remove Duplicates from an Array
// function removeDuplicates(numbers) {
//     return [...new Set(numbers)];
// }

// const numbers = removeDuplicates([54, 67, 85, 98, 89, 46, 98]);
// console.log(numbers);


//NO 11 Remove Duplicates from an Array
// function removeDuplicates(numbers){
//     return numbers.reduce((unique, current) => {
//         if(!unique.includes(current)){
//             unique.push(current);
//         }
//         return unique;
//     }, [])
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