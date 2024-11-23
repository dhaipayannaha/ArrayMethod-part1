// let age = "17";
// age = Number(age);
// if (isNaN(age)) {
//   console.log("Input is not a number") ;
// } else {
//     console.log(age < 18 ? "Too young" : "Old enough");
// }


// let name = null;
// let text = 56 ;
// let result = name ?? text;
// console.log(result);



// let first = null;
// let second = 'minote';
// let result = first ?? second;

// result = Number(result);
// if (isNaN(result)) {
//     console.log("Input is not a number") ;
// }else{
//     console.log(result < 18 ? "Too yong" : "tui buira");
// }



// NO 1   If the age is 0 or less, return
// const korim = 89;
// const jolim = -89;
// const bilkiss = "hgytu";


// function addNumbers(age) { 
//     if( isNaN(age) ) {
//         return "please give a number";
//     }else {
//         return age < 0 ? "This is Valid age" : "This is not a Valid Age";
//     }
// }

// console.log(addNumbers(korim)); 
// console.log(addNumbers(jolim)); 
// console.log(addNumbers(bilkiss)); 


//NO 2  If the age is between 1 and 12 (inclusive)
// const partho = -8;
// const rujina = 8;
// const david = 14;
// const erav = "three";
// let Nabil = "67";
// Nabil = Number(Nabil);

// function check (age) {
//     if( isNaN(age)){
//         return "Number de....";
//     }
//     else if( age > 1 && age <= 12){
//         return "Child";
//     }
//     else if (age > 12) {
//         return "bura";
//     }
//     else{
//         return age > 0 ? "This is Valid age" : "This is Inalid Age";
//     };
// }



// console.log(check(partho));
// console.log(check(rujina));
// console.log(check(david));
// console.log(check(erav));
// console.log(check(Nabil));


//NO 3
const partho = -8;
const rujina = 8;
const david = 14;
const erav = "three";
let Nabil = "67";
Nabil = Number(Nabil);

function check (age) {
    if( isNaN(age)){
        return "Number de....";
    }
    else if( age > 1 && age <= 12){
        return "Child";
    }
    else if (age >= 13 && age <= 17) {
        return "Teen";
    } else if (age >= 18 && age <= 64) {
        return "Adult";
    } else if (age >= 65) {
        return "Senior";
    }
    else{
        return age > 0 ? "This is Valid age" : "This is Inalid Age";
    };
}



console.log(check(partho));
console.log(check(rujina));
console.log(check(david));
console.log(check(erav));
console.log(check(Nabil));