// const paymentSuccess = true;
// const marks = 70;

// function enroll (callback){
//     console.log('Course enrole is in progress');

//     setTimeout(function() {
//         if(paymentSuccess){
//             callback()
//         }else{
//             console.log('Payment failed, course enrollment is cancelled');
//         }
//     }, 2000);
// }


// function progress (callback){
//     console.log('Course enrollment');

//     setTimeout(function(){
//         if(marks >= 80){
//             callback()
//         }else{
//             console.log('Marks are below 80, course progress is cancelled');
//         }
//     }, 3000);
// }

// function getcertificate(){
//     console.log('Preparing your certificate');
    
//     setTimeout(function(){
//         console.log("congratulatiob! you got certificate")
//     }, 1000)
// }

// enroll(function(){
//     progress(getcertificate)
// })