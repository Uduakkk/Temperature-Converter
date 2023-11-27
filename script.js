let temp = document.getElementById("temp-field");
let result = document.getElementById("result-field");

function addToResult(value) {
    temp.value += value;
}

function clearOneChar() {
    let tempValue = temp.value;

    if (tempValue.length > 0) {
        let newValue = tempValue.substring(0, tempValue.length - 1);
        temp.value = newValue;
    }
}

function clear() {
    let resultValue = result.value;
    let tempInput = temp.value;

    if (tempInput.length > 0 || resultValue.length > 0) {
       let newResultValue  = '';
        let newTempValue = '';

        resultValue = newResultValue;
        tempInput = newTempValue;
    }
}



function celsiusToFahrenheit() {
    const celsius = parseFloat(temp.value); 
        const fahrenheit = (celsius * 9/5) + 32; 
        result.value = fahrenheit.toFixed(2); 
    
}

function fahrenheitToCelsius() {
     fahrenheit = parseFloat(temp.value);
     celsius = (fahrenheit - 32) * 5/9;
    result.value = celsius.toFixed(2);
}

