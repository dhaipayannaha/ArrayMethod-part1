
//NO 1 string show reverse way ;
// const sentence = 'i am  learning web dev';

// let reverse = '';
// for (const letter of sentence){
//     console.log(letter);
//     reverse = letter + reverse; // aita ulta
//     // reverse = reverse + letter;  // aita baw 
// }
// console.log(reverse);

// let reverse= '';
// for (let i = sentence.length; i >= 0; i--){
//     const letter = sentence[i];
//     reverse += letter;
// }
// console.log(reverse);


// const reversed = sentence.split(' ').reverse().join();
// console.log(reversed);


//NO 2 string spacific word found and find its length
const sentence = "ipsum dolor Lorem amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem, quis nostrud Lorem ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in Lorem velit esse cillum dolore eu Lorem nulla pariatur. Excepteur sint occaecat cupidatat";

// const matched = sentence.match(/lorem/ig);
// const lengthMatch = matched.length;
// const fix = matched ? lengthMatch : "not found";

// console.log(matched);
// console.log(lengthMatch);
// console.log(fix);



//NO 2 (find first index from sentence/ string);
// let position = sentence.search(/lorem/i);
// position = position >= 0 ? position : "not found";
// console.log(position);