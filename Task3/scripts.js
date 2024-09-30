let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let currentValue = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let value = this.getAttribute('data-value');

        // Handle clear button
        if (value === 'C') {
            currentValue = '';
            operator = '';
            firstOperand = '';
            secondOperand = '';
            display.value = '';
        }
        // Handle operators
        else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value;
            firstOperand = currentValue;
            currentValue = '';
        }
        // Handle equals button
        else if (value === '=') {
            secondOperand = currentValue;
            if (operator && firstOperand !== '') {
                currentValue = eval(`${firstOperand} ${operator} ${secondOperand}`);
                display.value = currentValue;
                firstOperand = '';
                secondOperand = '';
                operator = '';
            }
        }
        // Handle number and decimal point
        else {
            currentValue += value;
            display.value = currentValue;
        }
    });
});
