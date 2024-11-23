// array of object
//kuno akta array of object niye aro akta arry banate amra map use korbo
const products = [
    {name: 'laptop', price: 2345, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 2545, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 5345, brand: 'casio', color: 'black'},
    {name: 'sunglass', price: 8345, brand: 'ribon', color: 'pink'},
    {name: 'camera', price: 9345, brand: 'cannon', color: 'gray'}
];

const brands = products.map(product => product.brand);
// console.log(brands);

const prices = products.map(product => product.price);
// console.log(prices);
// map array return korbe

// 2 foreach 
// kuno kichu return korbo na loop chalaiya kicu akta korbo sai khtre for each use korbo. map return korbe tai variable vitor likhte hoy.

// products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));
products.forEach(product => {

})
// foreach kichu return korbe na

// 3. filter
// filter array return korbe

const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);
const spacificName = products.filter(product => product.name.includes('n'));
// console.log(spacificName);

// 4.find
// sorssori akta object diye dibe. mane prothom jata match khabe
const spacial = products.find(product => product.name.includes('n'));
console.log(spacial);
