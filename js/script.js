function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
      display.innerText = value;
    } else {
      display.innerText += value;
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