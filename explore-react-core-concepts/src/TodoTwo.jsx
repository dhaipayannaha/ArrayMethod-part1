// export default function ToDoTwo ({task, isActive}) {
//     const divStyle = {
//         border: '1px solid pink',
//         padding: '10px',
//         margin: '5px',
//         borderRadius: '5px',
//     };

//     return (
//         <div style={divStyle}>
//             <h1>Task: {task}</h1>
//         </div>
//     );
// }

// export default function ToDoTwo ({task, isActive}) {
//     const divStyle = {
//         border: '1px solid pink',
//         padding: '10px',
//         margin: '5px',
//         borderRadius: '5px',
//     };

//     if(isActive == true){
//         return (
//             <div style={divStyle}>
//                 <h1>Finished: {task}</h1>
//             </div>
//         );
//     }
//     return (
//         <div style={divStyle}>
//             <h1>Work On: {task}</h1>
//         </div>
//     );
// }


// export default function ToDoTwo ({task, isActive}) {
    

//     return (
//         <div>
//             <h5>Start from here</h5>
//             <li>{isActive ? 'Finished' : 'worked on'} {task}</li>
//         </div>
        
//     );
// }


// export default function ToDoTwo ({task, isActive}) {
    

//     return (
//         <div>
//             <h5>Start from here</h5>
//             <li>{task} {isActive &&  ': worked on'}</li>
//         </div>
        
//     );
// }


export default function ToDoTwo ({task, isActive}) {
    
    let kuddus;
    if(isActive){
        return (
            kuddus = <div>
                <h5>Start from here</h5>
                 <li>{task} {isActive ||  ': worked on'}</li>
            </div>
            
        );
    }
    return (
        kuddus = <div>
            <h5>Start from here</h5>
             <li>{task} {isActive ||  ': finished'}</li>
        </div>
        
    );

    
}