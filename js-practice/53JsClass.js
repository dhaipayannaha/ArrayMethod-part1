class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

const car1 = new Car("Toyota", 2017);  //instance aita akta object
const car2 = new Car("Honda", 2024);
console.log(car1);
console.log(car1.name);



class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    play () {
        console.log(`${this.name} is a playing`);
    }
}

const person1 = new person("Sakib", 35);
const person2 = new person("tamim", 67); 

person1.play();
person2.play();