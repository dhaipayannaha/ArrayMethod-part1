//NO 1 feet result
// function inchToFeet (inches){
//     const feet = inches / 12;
//     return feet;
// }
// const mituHeight = inchToFeet(75);
// console.log(mituHeight);



//NO 2 show anather way inches to feet
// function inchToFeet (inches){
//     const feet = inches / 12;
//     const feetNumber = parseInt(feet);
//     const remainingInches = inches % 12;
//     const result = feetNumber + ' ft' + remainingInches + ' in';
//     return result;
// }
// const kolimHeight = inchToFeet(75);
// console.log(kolimHeight);

//NO 3 unique array & it workes string and number
// const number = [45, 45, 54, 65, 56, 76, 78, 69, 65];

// function uniqueArray (array){
//     const unique = [];
//     for(const item of array){
//         if(unique.includes(item) === false){
//             unique.push(item);
//         }
//     }
//     return unique;
// }

// const uniqueNumbers = uniqueArray(number);
// console.log(uniqueNumbers);


//NO Date 
// const today = new Date();
// const date = new Date('2028-10-19');
// console.log(date);
// console.log(date.getMonth());

// const spacificDate = new Date(2091, 0, 26);
// console.log(spacificDate);
// spacificDate.setMonth(10);
// console.log(spacificDate);


//NO 4 destructringing
// let a = 5;
// let b = 7;
// console.log(a, b);

// const  temp = a;
// a = b;
// b = temp;
// console.log(a, b);


// let x = 5;
// let y = 7;
// console.log(x, y);

// [x, y] = [y, x];
// console.log(x, y);