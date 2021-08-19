function getPin() {
    const pinNumber = Math.round(Math.random() * 10000);
    pinString = pinNumber + '';
    if (pinString.length == 4) {
        return pinNumber;
    }
    else { return getPin() };
}
function generatePin() {
    const pin = getPin();
    const displayPin = document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }


    else {

        const previousInput = calcInput.value;
        const newInput = previousInput + number;
        calcInput.value = newInput;

    }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const calcInput = document.getElementById('calc-input').value;
    const displayMatch = document.getElementById('matched');
    const displayUnMatch = document.getElementById('unmatched');

    if (pin == calcInput) {

        displayMatch.style.display = 'block';
        displayUnMatch.style.display = 'none';
    }
    else {
        displayMatch.style.display = 'none';
        displayUnMatch.style.display = 'block';
    }
}
