//NO 1
// function sleep (){
//     console.log("Sleeping");
// }

// sleep();


//NO 2
// const x = function (q, b){
//     return q + b;
// }


//no 3
// const a = function() {
//     console.log("Sleeping");
// }
// a();
// var vitor function ralkhle hoisting hoy na,  mane function ke funtioner upore call koele hoy na



// NO 
// (function () {
//     let x = "Hello!!";  
//     console.log(x);
//   })();
// self invokinng function mane nija nije call howya upore niche bracket 2 ta


//NO 
// function myFunction(a, b) {
//     return a * b;
//  }
  
// let x = myFunction(4, 3);
// console.log(x);
//call kora jay ak variable vitpor ai jay gay x man 12


//NO
// ES5
// var x = function(x, y) {
//     return x * y;
//   }
  
//   // ES6
//   const x = (x, y) => x * y;



//   const x = (x, y) => { return x * y };
//arrow function object method hisabe this kaj kore na/ arro function hostinng hoy na


function temporary (){
    let counter = 0;

    return function(){
        counter += 1;
    }
}

const add = temporary();
add();