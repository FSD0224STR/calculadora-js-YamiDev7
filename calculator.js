const buttonsNumber  = document.querySelectorAll('.btnNumbers');
const buttonsOper    = document.querySelectorAll('.btnOper');
const buttonClear    = document.querySelector('.btnClear');
const buttonEqual    = document.querySelector('.btnEqual');
const inputExpresion = document.getElementById('operations');

inputExpresion.value = '0';

function cleanZero() {
    if (inputExpresion.value === '0') {
        inputExpresion.value = '';
    }
}

inputExpresion.addEventListener("keypress", (event) => {
    cleanZero();
    if (!/[0-9+\-*/.]/.test(event.key)) {
        // event.preventDefault() es una función que detiene la acción predeterminada que se habría llevado a cabo. 
        //En este caso, impide que la tecla no permitida se ingrese en el campo de texto.
        inputExpresion.value = '0';
        event.preventDefault();
    }
});

buttonsNumber.forEach(button => {
    button.addEventListener('click', () => {
        cleanZero();
        let valueBtn = button.textContent;
        inputExpresion.value += valueBtn;
        inputExpresion.focus();
    });
});

buttonsOper.forEach(button => {
    button.addEventListener('click', () => {
        cleanZero();
        let valueBtn = button.textContent;
        inputExpresion.value += valueBtn;
        inputExpresion.focus();
    });
});

buttonClear.addEventListener('click', () => {
    inputExpresion.value = '0';
    inputExpresion.focus();
})

buttonEqual.addEventListener('click', () => {
    let valueOperation = inputExpresion.value;
    result = math.evaluate(valueOperation);
    inputExpresion.value = '';
    inputExpresion.value = result;
    inputExpresion.focus();
})


