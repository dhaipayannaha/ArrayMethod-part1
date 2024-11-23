//NO 1 Largest element 
// function largestElement (numbers) {
//     let largest = [0];
//     const numlen = numbers.length;
//     for (let i = 0; i <= numlen; i++ ){
//         const element = numbers[i];
//         if (element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }
// const age = [54, 67,85, 98, 89, 46];
// const num = largestElement(age);
// console.log(num);



//NO 2 Sum of all numbers
// function sumElement (numbers) {
//     let sum = 0;
//     for (let number of numbers) {
//         const element = number;
//         sum += element;
//     }
//     return sum;
// }

// const num = [54, 67,85, 98, 89, 46];
// const numArray = sumElement(num);
// console.log(numArray);



//NO 3 reverse array
// function reverseArray (numbers) {
//     let add = [];
//     for (let i = numbers.length; i >= 0; i--){
//         const element = numbers[i];
//         add.push(element);
//     }
//     return add;
// }

// const num = [54, 67,85, 98, 89, 46];
//  let callNum = reverseArray(num);
//  console.log(callNum);


//No 4 
// function find (array,value){
//     for (let i = 0; i < array.length; i++){
//         const element = array[i];
//         if(element  === value){
//             return true;
//         }
//     }
//     return false;
// }
// const number = find ([54, 67,85, 98, 89, 46], 98);
// console.log(number);



//NO 5
// function find (array,value){
//     for (let i = 0; i < array.length; i++){
//         const element = array[i];
//         if(element === value){
//             return element;
//         }
//     }
//     return "not found";
// }
// const number = find ([54, 67,85, 98, 89, 46], 98);
// console.log(number);


//NO 5
// function find (array,value){
//     let store = []
//     for (let i = 0; i < array.length; i++){
//         if(array[i] !== value){
//             store.push(array[i]);
            
//         }
//     }
//     return store;
// }
// const number = find ([54, 67,85, 98, 89, 46], 98);
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
//     let add = []
//     for(let i = 0; i < number.length; i++){
        
//         if(number[i] === value){
//             add.push(number[i]);
//         }
//     }
//     return add;
// }
// const number = findIndex([54, 67,85, 98, 89, 46], 85);
// console.log(number);



