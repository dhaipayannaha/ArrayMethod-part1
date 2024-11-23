// function largestElement (numbers){
//     largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if (element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const num = [54, 67,85, 98, 89, 46];
// const oldest = largestElement(num);
// console.log(oldest);


// function largestElement (numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         sum = sum + element;
//     }
//     return sum;
// }

// const num = [54, 67,85, 98, 89, 46];
// const oldest = largestElement(num);
// console.log(oldest);


// function reverseArray (numbers){
//     let reverseArray = [];
//     for (let i = numbers.length -1; i >= 0; i--){
//         const element = numbers[i];
//             reverseArray.push(element);
        
//     }
//     return reverseArray;
// }

// const num = [54, 67,85, 98, 89, 46];
// const reverse = reverseArray(num);
// console.log(reverse);


//NO4 Check if an Array Contains a Value

// function reverseArray (array, value){
   
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === value){
//             return true;
//         }
//     }
//     return false;
// }

// const reverse = reverseArray([54, 67,85, 98, 89, 46], 98);
// console.log(reverse);



// NO5 Filter Even Numbers from an Array
// function evenNumber (numbers){
//    const store = [];
//     for (let i = 0; i < numbers.length; i++){
//         if (numbers[i] % 2 === 0){
//             store.push(numbers[i]);
//         }
//     }
//     return store;
// }


// const number = evenNumber([54, 67,85, 98, 89, 46]);
// console.log(number);


// NO6 Find the Index of a Value in an Array
// function evenNumber (numbers, value){
//     for (let i = 0; i < numbers.length; i++){
//         if (numbers[i] === value){
//             return i;
//         }
//     }
//     return -1;
// }
// const number = evenNumber([54, 67,85, 98, 89, 46], 89);
// console.log(number);



// NO7 Remove Duplicates from an Array
function uniquNumber (numbers){
    const unique = [];
    for (let i = 0; i < numbers.length; i++){
        if (!unique.includes(numbers[i])){
            unique.push(numbers[i]);
        }
    }
    return unique;
}
const number = uniquNumber([54, 67,85, 98, 89, 89,46]);
console.log(number);


// NO8 Merge Two Arrays
function margeNumber (first, second){
    return first.concat(second);
}



const firstNumber = [54, 67, 85, 98, 89,];
const secondNumber = [54, 67,85, 98,76, 76]
const addAumber = margeNumber (firstNumber, secondNumber);
console.log(addAumber);