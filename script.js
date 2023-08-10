const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
const C = document.querySelector('.C');
const F = document.querySelector('.F');

const swap = () => {
    if (C.innerHTML === '&#176;C'){
        C.innerHTML = '&#176;F';
        F.innerHTML = '&#176;C';
        converter.placeholder = "Temperature in &#176;F";

    }else{
        F.innerHTML ="&#176;F";
        C.innerHTML = "&#176;C";
        converter.placeholder = "Temperature in  &#176;C";
    };
};

const reset = () => {
    converter.value = '';
    result.innerHTML = '';
}

const convert = () =>{
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        result.computedStyleMap.color = "black"
        if (C.innerHTML ==="&#176;C") {
            let value = (converter.value * 1.8) + 32;
            result.innerHTML = ' ${converter.value}&#176;C is equal to ${value.toFixed(2)}&#176;F';
        } else { 
            let value = (converter.value - 32) / 1.8;
            result.innerHTML = '${converter.value}&#176;F is equal to ${value.toFixed(2)}&#176;C';
        }
    }else if (converter.value =='') {
        result.Style.color = "#993300"
        result.innerHTML = 'Enter only numbers!!!';
    } else{
        result.style.color ="#993300"
        result.innerHTML ='enter only number!!!';
    }
}

changeButton.addEventListener('click', swap);
resetButton.addEventListener('click',reset);
convertButton.addEventListener('click', convert);

