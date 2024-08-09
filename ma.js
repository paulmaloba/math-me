/* basic arithmetic */

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 =parseFloat(document.getElementById('number2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'please enter valid numbers';
    } else {
        switch (operation){
            case 'add': result = num1 + num2;
            break;
            case 'subtract': result = num1 - num2;
            break;
            case 'multiply': result = num1 * num2;
            break;
            case 'divide': result = num1 / num2;
            break;
        }
    }
    document.getElementById('output').textContent = result;
    addToHistory(`Arithmetic: ${result}`);

}
document.querySelector('.buttons button:nth-child(1)').addEventListener('click', () =>
calculate('add'));
document.querySelector('.buttons button:nth-child(2)').addEventListener('click', () =>
    calculate('subtract'));
document.querySelector('.buttons button:nth-child(3)').addEventListener('click', () =>
    calculate('multiply'));
document.querySelector('.buttons button:nth-child(4)').addEventListener('click', () =>
    calculate('divide'));

/* Trigonometry */

function calculateTrig(operation) {
    const angle = parseFloat(document.getElementById('angle').value);
    let result;

    if (isNaN(angle)) {
        result = 'please enter a valid angle';
    } else {
        const radians = angle * (Math.PI / 180);
        switch (operation)  {
            case 'sine': 
            result = Math.sin(radians).toFixed(4);
            break;
            case 'cosine': result = Math.cos(radians).toFixed(4);
            break;
            case 'tangent': 
            result = Math.tan(radians).toFixed(4);
            break;
        }
    }
document.getElementById('output-trig').textContent = result;
addToHistory(`Trigonometry: ${result}`);

}
document.querySelector('#trigonometry .buttons button:nth-child(1)').addEventListener('click', () =>
calculateTrig('sine'));

document.querySelector('#trigonometry .buttons button:nth-child(2)').addEventListener('click', () =>
    calculateTrig('cosine'));

document.querySelector('#trigonometry.buttons button:nth-child(3)').addEventListener('click', () =>
    calculateTrig('tangent'));


/* factorial */
function calculateFactorial() {
    const num = parseInt(document.getElementById('factorial-input').value);
    let result;

    if (isNaN(num) || num < 0){
        result = 'please enter a non-negative integer';
    } else {
        result = factorial(num);
    }
    document.getElementById('output-factorial').textContent = `Factorial of ${num} is ${result}`;
    addToHistory(`Factorial: ${result}`);
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/* log section */
function calculateLogarithm() {
    const number = parseFloat(document.getElementById('log-number').value);
    const base = parseFloat(document.getElementById('log-base').value) || 10;
    let result;

    if (isNaN(number) || number <= 0) {
        result = 'please enter a postive number';
    } else if (isNaN(base) || base <= 0) {
        result = 'please enter a positive base';
    } else {
        result = Math.log(number) / Math.log(base);
    }
    document.getElementById('output-log').textContent = `Logarithm base ${base} of ${number} is ${result.toFixed(4)}`;
    addToHistory(`Logarithm: ${result}`);
}


/* binar section */
function convertNumber() {
    const num = document.getElementById('number-input').value.trim();
    const conversionType = document.getElementById('conversion-type').value;
    let result;

    try {
        switch (conversionType) {
            case 'binary': result = `Binary: ${parseInt(num, 10).toString(2)}`;
            break;
            case 'octal': result = `Octal: ${parseInt(num, 10).toString(8)}`;
            break;
            case 'decimal': result = `Decimal: ${parseInt(num, 10).toString(10)}`;
            break;
            case 'hexadecimal': result = `Hexadecimal: ${parseInt(num, 10).toString(16)}`;
            break;
            default: result = 'Invalid conversion type';
        }
    } catch (e) {
        result = 'Invalid number';
    }
    document.getElementById('output-conversion').textContent = result;
    addToHistory(`Conversion: ${result}`);
}


/* history */
function addToHistory(result) {
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('p');
    historyItem.textContent = result;
    historyList.appendChild(historyItem);
}

/* clear history */
function clearHistory() {
    document.getElementById('history-list').textContent = '';
}
document.querySelector('#history .buttons button').addEventListener('click', clearHistory);





/* circle */

function calculateCircle() {
    const radius = parseFloat(document.getElementById('circle-radius').value);
    let result;

    if (isNaN(radius) || radius <= 0) {
        result = 'Please enter a positive radius';
    } else {
        document.getElementById('loading-circle').style.display = 'block';

        setTimeout(() => {
            const area = Math.PI * Math.pow(radius, 2);
            const circumference = 2 * Math.PI * radius;
            result = `Area: ${area.toFixed(2)}\nCircumference: ${circumference.toFixed(2)}`;

            document.getElementById('loading-circle').style.display = 'none';
            document.getElementById('output-circle').textContent = result;
            addToHistory(`Circle-radius: ${radius}, ${result}`);
        }, 1000);
    }
}