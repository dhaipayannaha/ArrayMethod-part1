//No 1
// function largestElement (number){
//     return Math.max(...number);
// }

// const num = [54, 67,85, 98, 89, 46];
// console.log(largestElement(num));


//NO2
// const num = [54, 67,85, 98, 89, 46];
// function reduceNumber (total, value){
//     return total + value;
// }
// const number = num.reduce(reduceNumber)
// console.log(number);


//No3
// function reverse (number) {
//     return number.reverse();
// }

// const num = [54, 67,85, 98, 89, 46];
// const callNum = reverse(num);
// console.log(callNum);


//NO4
// function convert (array, value) {
//     return array.includes(value);
// }
// console.log(convert([10, 20, 30, 40], 30));
// console.log(convert([10, 20, 30, 40], 50)); 


//NO 5
// function evenNumber (value, index, array) {
//     if(value % 2 === 0){
//         return true;
//     }
// }

// const number = [54, 67,85, 98, 89, 46];
// const newNumber = number.filter(evenNumber);
// console.log(newNumber);


//NO6
// function findIndex (array, value) {
//     return array.indexOf(value);
// }
// console.log(findIndex([5, 8, 12, 15], 20));
// console.log(findIndex([5, 8, 12, 15], 12));


//NO 7
// function removeDuplicate (array) {
//     return [...new Set(array)];
// }
// console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

//NO 8
// function margeArray (array1, array2){
//     return [...array1,...array2];
// }
// console.log(margeArray([1, 2], [2, 3]));

//NO 9 
// const fruits = [1, 2, 3, 4, 5, 6, 7, 8];
// const stringFruits = fruits.toString();
// console.log(stringFruits);


//no10 splice from array
// 2 mane koto index thika add hoba ar 0 mane holo koyta remove korba
// const fruits = ["a", "b", "c", "d", "e"];
// fruits.splice(2, 0, "lamon", "kore");
// console.log(fruits);


//no11 splice remove korteo bebohar hoy from array
// const fruits = ["a", "b", "c", "d", "e"];
// fruits.splice(0, 1);
// console.log(fruits);

//no12 Merging Two Arrays
// aki jinish duibar thakte pare mane ja dibo tai jura lagbe. my child notun akta array toiri korce 
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

//no13 splice remove korteo bebohar hoy from array
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren);

//no14 concat kore string dukate parben
// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter"); 
// console.log(myChildren);

//no15 slice korar por notun akta array dibe
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);


//NO  15
// const numbers = [45, 67, 89];
// numbers.push(98);
// const newNumbers = [...numbers, 100];

// console.log(newNumbers);


//NO 15
// const products = [
//     {name: 'laptop', price: 2343, brand: 'lenovo', color: 'silver'},
//     {name: 'phone', price: 89556, brand: 'iphone', color: 'golden'},
//     {name: 'watch', price: 37894, brand: 'casio', color: 'black'},
//     {name: 'sunglass', price: 89645, brand: 'ribon', color: 'pink'},
//     {name: 'camera', price: 56798, brand: 'cannon', color: 'gray'}
// ];

// function get(product) {
//     return product.brand; 
// }

// const getProducts = products.map(get);
// console.log(getProducts);


//NO 16
// const products = [
//     {name: 'laptop', price: 2343, brand: 'lenovo', color: 'silver'},
//     {name: 'phone', price: 89556, brand: 'iphone', color: 'golden'},
//     {name: 'watch', price: 37894, brand: 'casio', color: 'black'},
//     {name: 'sunglass', price: 89645, brand: 'ribon', color: 'pink'},
//     {name: 'camera', price: 56798, brand: 'cannon', color: 'gray'}
// ];

// function get(productShow) {
//     for (const product of product)
//     return product.brand; 
// }

// const getProducts = products.map(get);
// console.log(getProducts);


//no16 
// const number = [1, 2, 3, 4, 56, 98, 76];
// function myfunction (value, index, array) {
//     // console.log(value)
//     console.log(index);
//     console.log(array);
// }
// number.forEach(myfunction);

// No17 js map
// const number = [1, 2, 3, 4, 56, 98, 76];

// function myFunction(value, index, array){
//     return value * 2;
// }

// const newNumbers = number.map(myFunction);
// console.log(newNumbers);
//mai array theke niye kichu array dekhabe. array akta notun array return



// No18 js filter
// const number = [1, 2, 3, 4, 56, 98, 76];
// function myFunction(value, index, array){
//     return value > 10;
// }

// const newNumbers = number.filter(myFunction);
// console.log(newNumbers);



// ai jaygay sobgulake jug kora hoyeche
// No19 js 
// const number = [17, 3, 4, 56, 98, 76];

// function myFunction(total, value, index, array){
//     return total + value;
// }

// const newNumbers = number.reduce(myFunction);
// console.log(newNumbers);
// reduce array return kor na akta single value te reduce kore ane. reduce mane chuto kora


//NO 20
// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value, index, array) {
//   return value > 18;
// }
// const newNumbers = numbers.every(myFunction);
// console.log(newNumbers);
//every kicuta filter moto  filter akta array dibe ar every  prothekta value diye jave boro hole true return korbe ta na hole false return korbe




//NO 21
// function myFunction(value, index, array) {
//   return value > 18;
// }
// const newNumbers = numbers.some(myFunction);
// console.log(newNumbers);


// console.log(Array.from("ABCDEFG"));


// notun akta const korle kaj korbe na aber vitore change kora jabe
// const car = ["kola", "bashi", "hola"];

// car[0]= "ABCDEFG";
// car.push("gilbat")
// console.log(car);






// NO1
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);

// NO2
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log(fruits);


// NO3
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);


// NO4 assending
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){
//     return a - b
// });
// console.log(points);


// NO4 dessending
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){
//     return b - a
// });
// console.log(points);


// NO4 random number
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(){return 0.5 - Math.random()});
// console.log(points);

// NO5 max/min bar korar buil in function
// let kub = [8, 9, 56, 45, 88, 1]
// let array = myArrayMax(kub);
// function myArrayMax(arr) {
//   return Math.max.apply(null, arr);
// }
//   console.log(array);


// NO5 short an array of object targeting year
// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

// cars.sort(function(a, b){return a.year - b.year});
// console.log(cars);


// NO5 if shortin bay string. in this case it is complex and try it
// js to case sencitive tai sob guloke lowercase kore nice. ai function udesho hol -1/0 return kora

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

//   cars.sort(function(a, b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
//   });
//   console.log(cars);

//NO 6
// const fruits = ['mango', 'banana', 'apple', 'orange', ];
// const fruit = 'likbik';
// if (Array.isArray(fruit)){
//     if (fruits.indexOf('mango') === 0){
//         fruits[0] = 'jambura';
//         console.log(fruits);
//     }else {
//         console.log(-1);
//     }
    
// }else{
//     console.log('Not an array');
// }

