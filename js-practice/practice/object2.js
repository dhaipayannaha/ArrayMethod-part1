// const car = {
//     OwnerFirstName : 'John',
//     OwnerLastName : 'Doe',
//     Year : 2015,
//     Model : 'Fiat Panda',
//     Color : 'Blue',
//     address: {
//         name: 'Fiat',
//         model: 'Panda',
//         color: 'Blue',
//         year: 2015,
//     },

//     start: function () {
//         console.log("Car has started");
//     },
//     drive: function () {
//         console.log("car is driving");
//     },

//     Owner: function (){
//         console.log(this.OwnerFirstName + " "  + this.OwnerLastName);
//     },
//     purchise: function () {
//         this.drive()
//         console.log(this.OwnerFirstName + " "  + this.OwnerLastName);
//     },
// }
// console.log(car.Year);
// car.Owner();
// car.purchise();


let country = {
    name: 'Bangladesh',
    districts: 64,
    Nationality: "Bangladeshis",
    InternationalDialingCode: +880,
    StandardTime : 6 ,
    area: 1047570,
    people: 20000000,
    Condition: function(){
        console.log("Nice Country");
    },
    population: function(){
        return"over populated";
    },
    description: function (){
        this.population();
        console.log(this.name + " " + "has " + this.districts + " and it's population" + " " + this.people);
    },
    dencity: function (){
        
        console.log("Its dencity is" +" "+ (this.people / this.districts));
        this.population();
    },

    

    weelCondition: function( FirstWheel, SecondWheel, ThirdWheel, FourthWheel){
        return {FirstWheel, SecondWheel, ThirdWheel, FourthWheel};
    },
    weel: null
    
}


console.log(country.name);
country.Condition();
country.description();
country.dencity();

country.weel = country.weelCondition("bad", "good", "better", "best");
console.log(country.weel);

let national = country.Nationality;
console.log(national);

let area = country["area"];
console.log(area);

let details = country["name"] + " is " + country.population();
console.log(details);

