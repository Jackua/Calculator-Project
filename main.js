const calculator = document.querySelector('#calculator');
const button7 = document.querySelector('button-7');
const button8 = document.querySelector('button-8');
const button9 = document.querySelector('button-9');
const button4 = document.querySelector('button-4');
const button5 = document.querySelector('button-5');
const button6 = document.querySelector('button-6');
const button1 = document.querySelector('button-1');
const button2 = document.querySelector('button-2');
const button3 = document.querySelector('button-3');
const button0 = document.querySelector('button-0');
const buttonPlus = document.querySelector('buttonPlus');
const buttonMinus = document.querySelector('buttonMinus');
const buttonMulti = document.querySelector('buttonMulti');
const buttonDivide = document.querySelector('buttonDivide');
const buttonSubmit = document.querySelector('buttonSubmit');
let calculating = ''
firstNumber = document.getElementById('display-number-one');
secondNumber = document.getElementById('display-number-two');
operator = document.getElementById('display-operator');
answer = document.getElementById('display-answer')
calculator.addEventListener('click', onClick);

function onClick(e) {
    console.log(e.target.value);
    if (e.target.value === undefined) {
        //pass
    } else if (e.target.value === 'clear') {
        firstNumber.innerText = 'First Number';
        operator.innerText = 'Operator';
        secondNumber.innerText = 'Second Number';
        answer.innerText = 'Answer';
        calculating = ''
    } else if (Number(e.target.value) >= 0) {
        calculating += e.target.value;
        if ( operator.innerText === 'Operator'){
            firstNumber.innerText = calculating
        }
        else {
            secondNumber.innerText = calculating;
        }
    } else if ( operator.innerText === 'Operator' && e.target.value != '=') {
        operator.innerText = e.target.value;
        calculating = ''
    } else if (e.target.value === '=') {
        answer.innerText = eval(`${firstNumber.innerText} ${operator.innerText} ${secondNumber.innerText}`);

    }
}
