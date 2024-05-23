let lastValue = null;
let lastOperator = null;
let shouldResetDisplay = false;
let activeOperatorButton = null;

function clearDisplay() {
    document.getElementById('display').innerText = '0';
    lastValue = null;
    lastOperator = null;
    shouldResetDisplay = false;
    if (activeOperatorButton) {
        activeOperatorButton.classList.remove('active');
    }
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (shouldResetDisplay) {
        display.innerText = value;
        shouldResetDisplay = false;
    } else {
        if (display.innerText === '0') {
        display.innerText = value;
        } else {
        display.innerText += value;
        }
    }
    if (activeOperatorButton) {
        activeOperatorButton.classList.remove('active');
    }
}

function toggleSign() {
    const display = document.getElementById('display');
    if (display.innerText !== '0') {
        display.innerText = display.innerText.charAt(0) === '-' ?
        display.innerText.substring(1) :
        '-' + display.innerText;
    }
}

function setOperator(operator) {
    const display = document.getElementById('display');
    if (lastValue === null) {
        lastValue = parseFloat(display.innerText);
    } else if (!shouldResetDisplay) {
        calculateResult();
    }
    lastOperator = operator;
    shouldResetDisplay = true;
    if (activeOperatorButton) {
        activeOperatorButton.classList.remove('active');
    }
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(button => {
        if (button.innerText === operator) {
        button.classList.add('active');
        activeOperatorButton = button;
        }
    });
}

function calculateResult() {
    const display = document.getElementById('display');
    if (lastValue !== null && lastOperator !== null) {
        let currentValue = parseFloat(display.innerText);
        switch (lastOperator) {
        case '+':
            display.innerText = lastValue + currentValue;
            break;
        case '-':
            display.innerText = lastValue - currentValue;
            break;
        case '*':
            display.innerText = lastValue * currentValue;
            break;
        case '/':
            display.innerText = lastValue / currentValue;
            break;
        }
        lastValue = parseFloat(display.innerText);
        lastOperator = null;
        shouldResetDisplay = true;
        if (activeOperatorButton) {
            activeOperatorButton.classList.remove('active');
            activeOperatorButton = null;
        }
    }
}
