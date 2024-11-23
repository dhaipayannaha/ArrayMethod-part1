// system 1
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// system 2
const makeGreeb = document.getElementById('make-green');
makeGreeb.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
});


// system 2  finally
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})