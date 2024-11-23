// const employee = {
//     firstName: 'Dhaipayan',
//     lastName: 'naha',
//     age: 25,
//     salary: 80000,
//     increase: 25000,
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         state: 'NY',
//         zip: 10001
//     },
//     employeeType: function () {
//         console.log(this.firstName + ' ' + this.lastName,  'is good employee')
//     },
//     drive: function (){
//         console.log('he knows driving')
//     },

//     purchies: function () {
//         this.drive()
//         console.log(this.firstName + ' ' + this.lastName , 'salary is' , this.salary + this.increase)
//     }
// }
// console.log(employee.firstName + " " + employee.lastName);
// console.log('Street =', employee.address['street'], 'zip is = ', employee.address.zip);
// employee.employeeType();



//NO 1
// const person = {fName: 'John', lName: 'Smith', age: 34};

// for (let i in person){
//     console.log(person[i]);  
// }



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


//NO 2 task (For this object below add a property named passenger capacity with value 5) PH
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car.passenger = 5;
// console.log(car);


// NO 3 Task (Display the physics marks as output.) PH
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


//NO 4 (task  Count the number of properties).  PH
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// const keys = Object.keys(student).length;
// console.log(keys);



//No 5 (Loop through an object and print the key-value pairs with their ) PH
// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };

// for (const info in myObject){
//     const key = myObject[info];
//     console.log("keys:", key, "|", typeof key);
// 



//  ******************  learn *********** //

//NO 1 
// const person =  {
//     name : 'likub',
//     age: 34,
//     'first Name': 'John',
//     lastName: 'kudduicha'
// }
// console.log(person);
// console.log(person['first Name']);
// console.log(person.name);


//NO 2 how to change object values
// const person =  {
//     name : 'likub',
//     age: 34,
//     'first Name': 'John',
//     lastName: 'kudduicha'
// }

// person.age = 56;
// person['lastName'] = 'liyakot';
// console.log(person);



//No 3 keys & values 
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



//NO 5
// const computer = {
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