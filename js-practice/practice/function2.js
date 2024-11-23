function sleep (name, time){
    // console.log(name, 'is sleeping', time, "hours");
}
sleep("kalim", 6);
sleep("jamil", 8);

function fullName(position, firstName, middleName, lastName){
    // console.log(position, "Position is", firstName, middleName, lastName);
}
fullName("First", "atikul" , "islam", "abul");
fullName("Second", "Osman" , "islam", "borket");
fullName("Third", "kolim" , "Uddin", "jolil");


let parthoMarkes = markes(67, 76, 77, 78, 79, 80);
let digantaMarkes = markes(99, 76, 77, 78, 79, 80);
let tonmoyMarkes = markes(67, 76, 77, 89, 59, 80);

function markes (Bangla, English, Math, History, Civics, Echonomics){
   let total = Bangla + " " + English + " " + Math + " " + History + " " + Civics + " " + Echonomics;
   return total;
}

console.log("partho's markes is", parthoMarkes)
console.log("diganta's markes is", digantaMarkes)
console.log("tonmoy's markes is", tonmoyMarkes)


let x = myfunction(4, 5);

function myfunction(a, b){
    return a + b;
}
console.log(x);