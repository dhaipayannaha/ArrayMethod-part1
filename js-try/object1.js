const car = {
    carName : 'audi',
    owner : 'dabit kuku',
    color: 'blue',
    address: {
        name:'fiat',
        model: 'panda',
        color: 'green',
        year: 2015,
    },
    start: function(){
        console.log("car is starting");
    },
    drive: function(){
        console.log("car is driving");
    },
    owner: function (){
        console.log(this.carName);
    },
    purchise: function(){
        this.drive();
        console.log(this.owner);
    }

}
console.log(car.color);
car.purchise()