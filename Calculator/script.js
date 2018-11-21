/* Set values of the calculator within an object */

let calculator= {
    displayValue: "0",
    firstNum: null,
    waitingForSecondNumber: false,
    operator: null,
};

/* The main calculations and functions of the program */

function updateDisplay(){
    const display = document.getElementById('lcd');
    display.value = calculator.displayValue;
}

function inputDigit(digit){
    let {displayValue, waitingForSecondNumber} = calculator;

    if(waitingForSecondNumber === true){
        displayValue = digit;
        waitingForSecondNumber = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    console.log(calculator);
}


function handleOperator(nextOperator) {
    let { firstOperand, displayValue, operator } = calculator
    let inputValue = parseInt(displayValue);
  
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
    }
  
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      let currentValue = firstOperand || 0;
      let result = performCalculation[operator](currentValue, inputValue);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
  };


function allClear(){
    calculator.displayValue = "0";
    calculator.firstNum = null;
    calculator.secondNum = null;
    calculator.operator = null;
    calculator.waitingForSecondNumber = false;
    updateDisplay();
}

/* The event listener function for each key on the keypad */

let keys = document.querySelector('.keypad');
keys.addEventListener('click', (event) =>{
    let {target} = event;
    if(!target.matches('button')){
        return;
    }

    if(target.classList.contains("operator")){
        handleOperator(target.value);
        updateDisplay();
    }

    if(target.id == "buttonC"){
        allClear();
    }

    else {
        inputDigit(target.value);
        updateDisplay();
    }
})

