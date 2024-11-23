// step 1 get value

function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    // console.log(base);

    //get triangle height 
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);


    const area = 0.5 * base * height;
    console.log(area);

    //display triAngle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

}

