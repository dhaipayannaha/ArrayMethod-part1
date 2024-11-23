function calculaterectangleArea(){
    //get width value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    


    //get height value
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    

    const area = width * length;
    console.log(area);


    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}