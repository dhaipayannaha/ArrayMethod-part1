//NO 1 evenNumber
// function evenNumber (num){
//     if(Array.isArray(num)){
//         return num.filter((item) => typeof item === 'number' && item % 2 === 0)
//     }else{
//         return 'Input should be an array of numbers';
//     }
// }
// const number = evenNumber([54, 67, 85, 98, 89, 46]);
// console.log(number);


//NO 2
// function oddNumber (num){
//     return num.filter((item) =>{
//         if( item % 2 !== 0){
//             return item;
//         }
//     })
// }
// const number = oddNumber([54, 67, 85, 98, 89, 46]);
// console.log(number);


//No 3 largest name
// const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

// function atringLength (name) {
//     return name.reduce((pre, cur) => cur.length > pre.length ? cur : pre)
// }

// console.log(atringLength(heights2));


//No 4 largest name index
// const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

// function atringLength (name) {
//     return name.reduce((pre, cur) => cur.length > pre.length ? name.indexOf(cur) : pre)
// }

// console.log(atringLength(heights2));


//No 5 largest name length
// const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

// function atringLength (name) {
//    if (Array.isArray(name)) {
//     return name.reduce((pre, cur) => cur.length > pre.length ? cur.length : pre)
//    }
// }

// console.log(atringLength(heights2));


// //NO 6 avarage phone price
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


//No 7  max
// function maxValue (num){
//     return Math.max(...num);
// }
// const age = [54, 67,85, 98, 89, 46];
// console.log(maxValue(age));

//No 7  min
// function minValue (num){
//     return Math.min(...num);
// }
// const age = [54, 67,85, 98, 89, 46];
// console.log(minValue(age));


//No 8 largest price array of object
// function findlarge(phones) {

//     const prices = phones.map((phone) => phone.price)
//     return Math.max(...prices);
// }

// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// console.log(findlarge(phones));

// No 9 largest number
// function largestNumber (num){
//     return num.reduce((pre, curr) => curr > pre ? curr : pre, 0)
// }
// const age = largestNumber([54, 67,85, 98, 89, 46]);
// console.log(age);


// No 9 smallest number
// function smallestNumber (num){
//     return num.reduce((pre, curr) => curr < pre ? curr : pre)
// }
// const age = smallestNumber([54, 67,85, 98, 89, 46, 23]);
// console.log(age);


//NO 10 reverse part 1
// function reverseArray (num){
//     return num.reduce((pre, curr) => {
//         pre.unshift(curr);
//         return pre;
//     }, [])
// }
// const number = [54, 67,85, 98, 89, 46, 23];
// console.log(reverseArray(number));


//NO 11 reverse part 2
// function reverseArray (num){
//     return num.reduceRight((pre, curr) => {
//         pre.push(curr);
//         return pre;
//     }, [])
// }
// const number = [54, 67,85, 98, 89, 46, 23];
// console.log(reverseArray(number));


//NO 12 reverse part 3
// function reverseArray (num){
//     return num.reverse();
// }
// const number = [54, 67,85, 98, 89, 46, 23];
// console.log(reverseArray(number));

// //No 13 chack value
// function checkArray (Array, value){
//     return Array.includes(value);
// }
// const point = checkArray([54, 67,85, 98, 89, 46, 23], 98)
// console.log(point);


//No 14 chack value part 1
// function checkArray (Array, value){
//     return Array.filter((item)=> item === value)
// }
// const point = checkArray([54, 67, 85, 98, 89, 46, 23], 46)
// console.log(point);


//NO 15 check unique array
// function checkArray (Array, value){
//     return Array.filter((item)=> item !== value)
// }
// const point = checkArray([54, 67, 85, 98, 89, 46, 23], 46)
// console.log(point);


//No 16 chack value present  ( true or false)
// function checkArray (array, value){
//     return array.includes(value)
    
// }
// const point = checkArray([54, 67,85, 98, 89, 46, 23], 46)
// console.log(point);



//No 16 chack value present  ( true or false)
// function checkArray (array, value){
//     return array.some((item) => item === value, false)
    
// }
// const point = checkArray([54, 67,85, 98, 89, 46, 23], 46)
// console.log(point);


// NO 9 return array index
// function findIndex(arr, value) {
//   return arr.reduce((prevIndex, current, index) => {
//     return current === value ? index : prevIndex;
//   }, -1);
// }

// const index = findIndex([54, 67, 85, 98, 89, 46], 85);
// console.log(index); 


//No 10 remove duplicqte from arrqy
// function removeDuplicates(numbers) {
//     return [...new Set(numbers)];
// }

// const numbers = removeDuplicates([54, 67, 85, 98, 89, 46, 98]);
// console.log(numbers);






//problem 1
// const phones = [
//     {name: 'oppo', price: 50000, camera: '12mp', color: 'black'},
//     {name: 'oneplus', price: 60000, camera: '20mp', color: 'blue'},
//     {name: 'samsung', price: 70000, camera: '48mp', color: 'red'},
//     {name: 'vivo', price: 40000, camera: '76mp', color: 'green'},
//     {name: 'apple', price: 90000, camera: '99mp', color: 'pink'},
//     {name: 'zte', price: 95000, camera: '19mp', color: 'yellow'},
// ]

// function expansivePhone(phones) {
//     const largeValue = phones.map((item) => item.price)
//     return Math.max(...largeValue);
// }
// console.log(expansivePhone(phones));



//problem 2 company cast for employ
// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

// function companyCast (array){
//     return array.reduce((pre, item)=> {
//         const total = item.starting + (item.increment * item.experience);
//         return pre + total
//     }, 0)
// }

// console.log(companyCast(employees));


// problem
// function deleteInvalids (array){
//     if (!Array.isArray(array)){
//         return 'Invalid input! Please provide an array.';
//     }else{
//         const add = array.filter((item) => typeof item === 'number' && item > 0)
    
//     return add;
//     }

// }
// const number = [ 1 , 2 , 3 ];
// console.log(deleteInvalids(number));



// ফ্রি ল্যান্সার শাহে দ প্রতি মাসে বে শ কি ছুপে মে ন্ট ক্লায়ে ন্ট দে র থে কে পায় । কি ন্তু পে মে ন্ট এর কি ছুট্যাক্স পরি শ োধ
// এবং নি জে র লি ভি ং কস্ট এর কারনে সে সে ভি ংস করতে পারে না । তার সে ভি ংস এর হি সে ব করার জন্যে তাকে
// monthlySavings() নামে একটি ফাংশন তৈ রী করে দি তে যে টা ইনপুট হি সে বে নে বে একটি Array (প্রতি মাসে
// পাওয়া সকল পে মে ন্ট ) এবং একটি Number ( শাহে দে র লি ভি ং কস্ট ) ।
// শাহে দে র যে সকল পে মে ন্ট 3000 টাকা বা তার বে শি সে সকল পে মে ন্ট থে কে ব্যাংক Tax হি সে বে ২০% টাকা কে টে
// নে য় । এখন ম োট ইনকাম থে কে Tax গুল ো বাদ দি য়ে এবং Living cost বাদ দি য়ে বাকী যে টাকা থাকে সে টা ই
// হল ো শাহে দে র সে ভি ংস । অর্থাৎ ফাংশন টি শাহে দে র সে ভি ংস কে রি টার্ন করবে । যদি সে ভি ংস করার মত ো টাকা না
// থাকে অর্থাৎ সে ভি ংস এর ভ্যালুযদি ০ এর চে য়ে কম হয় তাহলে ফাংশন টি রি টার্ন করবে একটি স্ট্রি ং তাহল ো “earn
// more” ।


// long version

// function monthlySaving(arr, livingCast) {
//     let total = [];  // [1000, 2000, 2800];
//     let sum = 0;
//     if (Array.isArray(arr) && !isNaN(livingCast)) {
//         for (const i of arr) {
//             if (i < 3000) {
//                 total.push(i);
//             } else if (i >= 3000) {
//                 let tax = i * (20 / 100);
//                 let net = i - tax;
//                 total.push(net);
//             }
//         }

//         for (const i of total) {
//             sum += i;
//         }
//         sum -= livingCast;

//         if (sum < 0) {
//             return 'Not enough money for saving';
//         }

//         return 'Saving' + " " + sum;
//     }else{
//         return 'Invalid';
//     }

// }
// console.log(monthlySaving([900, 2700, 2400], 5000));




// short version

// function monthlySaving(arr, livingCast) {
//     if (Array.isArray(arr) && !isNaN(livingCast)) {
//         const mapping = arr.map((item) => item < 3000 ? item : item - (item * 0.2))
//         const set = mapping.reduce((pre, curr) => livingCast - pre + curr, 0)
//         if (set < 0) {
//             return 'Not enough money for saving';
//         }
//         return 'Saving' + " " + set;
//     }else{
//         return 'Invalid';
//     }
// }
// console.log(monthlySaving([900, 2700, 2400], 5000));

