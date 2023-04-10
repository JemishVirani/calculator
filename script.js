console.log('cool');

const calucatorKeys = document.querySelector('.calculator-keys');
const calculatorScreen = document.querySelector('.calculator-screen');


const state = {
    displayString : '',
    firstOperand : '',
    secondOperand : '',
    firstOperator : '',
}

function isOperator(value){
    if(value === '+' || value === '-' || value === '*' || value === '/')
        return true;
    return false;
}

function calculateResult(){
    if(state.firstOperator === '+'){
        state.displayString = Number(state.firstOperand) + Number(state.secondOperand)
    }
    else if(state.firstOperator === '-'){
        state.displayString = Number(state.firstOperand) - Number(state.secondOperand)
    }
    else if(state.firstOperator === '*'){
        state.displayString = Number(state.firstOperand) * Number(state.secondOperand)
    }
    else{
        state.displayString = Number(state.firstOperand) / Number(state.secondOperand)
    }
    return state.displayString;
}


calucatorKeys.addEventListener('click',function(e){
    const {target} = e;
    const type = target.getAttribute('type');
    
    if(type !== 'button') return;
    let value = target.value;

    if(value === '='){
        calculatorScreen.value = calculateResult();
        console.log('=');
    }
    else if(value === 'all-clear'){
        state.displayString = '';
         state.firstOperand = '';
        state.firstOperator = '';
        state.secondOperand = '';
    
        calculatorScreen.value = '';
    }
    else if(!isOperator(value) && state.firstOperator === ''){
        state.displayString += value;
        state.firstOperand += value;
        calculatorScreen.value = state.displayString;
    }
    else if(isOperator(value)  && state.firstOperator === ''){
        state.displayString += value;
        state.firstOperator = value;
        calculatorScreen.value = state.displayString;
    }
    else if(!isOperator(value)  && state.firstOperator !== ''){
        state.displayString += value;
        state.secondOperand += value;
        calculatorScreen.value = state.displayString;
    }
   

    
});