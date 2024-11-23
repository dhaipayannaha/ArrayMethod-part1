// export default function Todo ({task, isDone}) {
//     return(
//         <li>Task: {task}</li>
//     )
// }


// aitake bole conditional rendering option 1
// export default function Todo ({task, isDone}) {
//    if (isDone === true){
//      return(
//         <li>Finished: {task}</li>
//      )
//    }
//    else{
//      return(
//         <li>Work on: {task}</li>
//      )
//    }
// }



// conditional rendering option 2
// export default function Todo ({task, isDone}) {
//     if(isDone){
//         return(
//             <li>Finished: {task}</li>
//         )
//     }
//     return(
//         <li>Work on: {task}</li>
//     )
// }


// conditional rendering 3
// js a if else condition short version holo ternary oparator
// export default function Todo ({task, isDone}) {
//     return(
//         <li>{isDone ? 'Finished' : 'work on'}: {task}</li>
//     )
// }

// conditional rendering option 4 &&
// isDone sotto hole oi khane jaba mane Done hobe
// export default function Todo ({task, isDone}) {
//     return(
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }


// conditional rendering option 5 ||
// isDone sotto na hole oi khane jaba mane Done hobe
// export default function Todo ({task, isDone}) {
//     return(
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }


// conditional rendering option 6
// export default function Todo ({task, isDone}) {
//     let listItem;
//     if(isDone){
//         return(
//             listItem = <li>Finished: {task}</li>
//         )
//     }
//     else{
//         return(
//             listItem = <li>Work on: {task}</li>
//         )
//     }
//     return listItem;
// }

// conditional rendering holo bivinno shorto anujai html guluke dekhanu



                                          // part 2


//  conditional rendering 3
export default function Todo ({task, isDone}) {
    return(
        <li>{isDone ? 'Finished' : 'work On'}: {task}</li>
    )
}