let inputValue;
let outputElement = document.getElementById('pOutput');
let outputValue = '';
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    inputValue = 0;
    document.getElementById('pOutput').innerHTML = '';

    if ((Number(document.getElementById('inputNumber').value)) === 0) {
        alert('Please enter a number > 0');
        return 0;
    }

    inputValue = Number(document.getElementById('inputNumber').value);

    outputElement = outputElement.innerHTML;
    console.log('inputValue :', inputValue);
    outputElement = '<p>' + 'L';

    if (inputValue % 2 === 0) {

        for (let i = 1; i <= inputValue; i++) {
            outputValue += 'o';
            console.log('In the loop index = ', i, ' outputValue = ', outputValue);
        }

    } else {
        for (let i = 1; i <= inputValue; i++) {
            if (i % 2 === 0) {
                outputValue += '0';
            } else {
                outputValue += 'o';
            }
            console.log('In the loop index = ', i, ' outputValue = ', outputValue);
        }
    }

    outputElement += outputValue + 'P' + '</p>';
    console.log(outputValue);
    console.log(outputElement);

    document.getElementById('pOutput').innerHTML = outputElement;
    document.getElementById('pOutput').style.color = 'lightgreen';
    document.getElementById('pOutput').style.fontSize = '3rem';
    outputValue = '';
});