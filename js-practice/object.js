const car = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        name: 'Fiat',
        model: 'Panda',
        color: 'Blue',
        year: 2015,
    },
    start: function () {
        console.log("car has started");
    },
    drive: function () {
        console.log("car is driving");
    },
    owner: function () {
        // Use 'this' instead of '$this'
        console.log(this.firstName + " " + this.lastName);
    },
    purchise: function () {
        this.drive()
        console.log(this.firstName + " " + this.lastName);
    },
};

// Accessing car properties
console.log(car.address.year);
console.log(car.address['color']);
car.owner();
car.purchise();

// function vitor ar akta function call kora jay



