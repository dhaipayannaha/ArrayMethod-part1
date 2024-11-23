// try {
//     adddlert("Welcome guest!");
//   }
//   catch(err) {
//     console.log(err.message);
//   }

// const x = 5;
// try {
//     if(x == "") throw "empty";
//     if(isNaN(x)) throw "not a number";
//     x = Number(x);
//     if(x < 5) throw "too low";
//     if(x > 10) throw "too high";
//   }
//   catch(err) {
//     console.log(err.message);
//   }



// const x = 5;

// try {
//     if(x == "") throw "empty";
//     if(isNaN(x)) throw "not a number";
//     x = Number(x);
//     if(x < 5) throw "too low";
//     if(x > 10) throw "too high";
//   }
//   catch(err) {
//     console.log(err.message);
//   } finally {
//     console.log("This block always runs.");
//     // input valu clear korte use
//   }
// //   two error things execute err.massage / err.name




const x = 5;

try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    console.log(err.message);
  } finally {
    console.log("This block always runs.");
  }