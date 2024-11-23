const addToLocalStorage = () => {
    const idInput = document.getElementById('stroage-id');
    const id = idInput.value;

    const valueInput = document.getElementById('stroage-value');
    const value = valueInput.value;

    if(id && value) {
        localStorage.setItem(id, value);
    }
    
    idInput.value = '';
    valueInput.value = '';
}
// local stroage & session stroage rakte jabo protekbar stringify kore rakbo . jokhone niye asye access korbo  tokhon jason parse kore anbo

// local stroage & session stroage  ara json string hisabe set kore ai jonno object & array set korte gale JSON.stringfy() kore set korte pare. red korte JSON.parse() kore read korte hoy