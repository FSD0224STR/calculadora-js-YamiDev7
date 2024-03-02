const buttonsNumber   = document.querySelectorAll('.btnNumbers');
const buttonsOper     = document.querySelectorAll('.btnOper');
const buttonClear     = document.querySelector('.btnClear');
const buttonDelete    = document.querySelector('.btnDelete');
const buttonEqual     = document.querySelector('.btnEqual');
const buttonSin       = document.querySelector('.btnSin');
const buttonCos       = document.querySelector('.btnCos');
const buttonLogNep    = document.querySelector('.btnLogNep');
const buttonRaiz      = document.querySelector('.btnRaiz');
const buttonPlusMinus = document.querySelector('.btnPlusMinus');
const inputExpresion  = document.getElementById('operations');

inputExpresion.value = '0';
let pi = Math.PI;

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
        if (inputExpresion.value === '0') {
            alert('Primero debes introducir un numero');
        } else {
            cleanZero();
            let valueBtn = button.value;
            inputExpresion.value += valueBtn;
            inputExpresion.focus();
        }
    });
});

buttonClear.addEventListener('click', () => {
    inputExpresion.value = '0';
    inputExpresion.focus();
})

buttonDelete.addEventListener('click', () => {
    let valueExpresion = inputExpresion.value;
    let longExpresion = valueExpresion.length;
    if (longExpresion > 0) {
        inputExpresion.value = valueExpresion.substring(0, longExpresion - 1);
    } else {
        inputExpresion.value = '0';
    }
    inputExpresion.focus();
})

buttonEqual.addEventListener('click', () => {
    let valueOperation = inputExpresion.value;
    result = math.evaluate(valueOperation);
    inputExpresion.value = '';
    inputExpresion.value = result;
    inputExpresion.focus();
})

buttonSin.addEventListener('click', () => {
    let valueOperation = inputExpresion.value;
    let radianes = Number(valueOperation) * (pi / 180);
    result = math.sin(radianes);
    inputExpresion.value = '';
    inputExpresion.value = result;
    inputExpresion.focus();
})

buttonCos.addEventListener('click', () => {
    let valueOperation = inputExpresion.value;
    let radianes = Number(valueOperation) * (pi / 180);
    result = math.cos(radianes);
    inputExpresion.value = '';
    inputExpresion.value = result;
    inputExpresion.focus();
})

buttonLogNep.addEventListener('click', () => {
    let valueOperation = inputExpresion.value;
    console.log(valueOperation);
    result = math.log(valueOperation);
    inputExpresion.value = '';
    inputExpresion.value = result;
    inputExpresion.focus();
})

buttonRaiz.addEventListener('click', () => {
    let valueOperation = inputExpresion.value;
    result = math.sqrt(valueOperation);
    inputExpresion.value = '';
    inputExpresion.value = result;
    inputExpresion.focus();
})

buttonPlusMinus.addEventListener('click', () => {
    let valueOperation = inputExpresion.value;
    let result = Number(valueOperation) *-1;
    inputExpresion.value = result;
    inputExpresion.focus();
})


