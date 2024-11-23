// const person =  {
//     name : 'likub',
//     age: 34,
//     'first Name': 'John',
//     lastName: 'kudduicha'
// }
// console.log(person);
// console.log(person['first Name']);
// console.log(person.name);


// person.age = 56;
// person['lastName'] = 'liyakot';
// console.log(person);

//No 3
// const computer = {
//     brand: 'Dell',
//     model: 'XPS 15',
//     processor: 'Intel Core i5',
//     memory: '8GB RAM',
//     storage: '256GB SSD'
// }
// const keys = Object.keys(computer);
// console.log(keys);

// const values = Object.values(computer);
// console.log(values);




// const computer = {
//     brand: 'Dell',
//     model: 'XPS 15',
//     processor: 'Intel Core i5',
//     memory: '8GB RAM',
//     storage: '256GB SSD',
//     add: ['asus', 'lenovo', 'dell', 'hp', 'razer', 'apple'],
//     objection : {
//         name: 'kudducha',
//         age: 34,
//         'first Name': 'John',
//         lastName: 'kudduicha'
//     }
// }
// console.log(computer.objection.name);
// console.log(computer.objection['age']);

// computer.objection.age = 45;
// computer.add[3] = 'ROG';
// console.log(computer);
// console.log(computer.add[5]);





// const computer = {
//     brand: 'Dell',
//     model: 'XPS 15',
//     processor: 'Intel Core i5',
//     memory: '8GB RAM',
//     storage: '256GB SSD'
// }

// for (const com in computer){
//     console.log(computer[com]);
// }

// const see = computer.brand;
// console.log(see);

// const keys = Object.keys(computer);
// for (const key in keys){
//     console.log(keys[key]);
// }




//No 1 task (Access the golden rod color value in output.) PH
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors['golden rod']);


//NO 2 task (For this object below add a property named passenger capacity with value 5)
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car.passenger = 5;
// console.log(car);


// NO 3 Task (Display the physics marks as output.)
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log("marks is", student.physics.marks);


//NO 4 (task  Count the number of properties).
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// const keys = Object.keys(student).length;
// console.log(keys);



//No 5 (Loop through an object and print the key-value pairs with their )
// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };

// for (const info in myObject){
//     const key = myObject[info];
//     console.log("keys:", key, "|", typeof key);
// }



//NO 6  person[info] aita bujanu hoice
// let person = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };

// for (const info in person){
//     console.log(info);
//     console.log(person[info]);
// }



// no 7
// let person = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };

// const values = Object.values(person);
// const keyes = Object.keys(person);

// for(const x of values){
//     console.log(x);
// }

// for (const x of keyes){
//     const name = person[x];
//     console.log(name);
// }

/////////////////////////////// js accessors defined/ getter / setter   /////////////////

// NO 1 get
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get fullName() {
//       return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName); // Output: en


// NO 2 set
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang(lang) {
//       this.language = lang;
//     }
// };

// person.lang = "en";
// console.log(person.lang); // Output: en


//NO 4  geter setter kora jave
// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };
// Object.defineProperty(person, "fullName", {
//     get : function () {
//         return this.firstName + " " + this.lastName;
//     }
// });

// person.age = 68;
// console.log(person.fullName);


// NO 5 constructors function
// boro hater Number,function,string,object ai sob gular vitore build in constructor function deoya asye with out Math
// function Person(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.fulName = function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// }
// const sumit = new Person("John", "Doe", 50);
// const bilkis = new Person("John", "Doe", 50);
// sumit.country = 'bd';

// Person.prototype.city = 'bulak';
// console.dir(sumit);


// NO 6 check which is ittarable or not
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en"
}
console.dir(person);

const person2 = ['kolim', 'jolim', 'bilkiss'];
console.dir(person2);