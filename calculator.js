const buttonsNumber   = document.querySelectorAll('.btnNumbers');
const buttonsOper     = document.querySelectorAll('.btnOper');
const buttonClear     = document.querySelector('.btnClear');
const buttonDelete    = document.querySelector('.btnDelete');
const buttonEqual     = document.querySelector('.btnEqual');
const buttonSin       = document.querySelector('.btnSin');
const buttonCos       = document.querySelector('.btnCos');
const buttonLogNep    = document.querySelector('.btnLogNep');
const buttonLog       = document.querySelector('.btnLog');
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
        let valueExpresion = inputExpresion.value;
        cleanZero();
        let valueBtn = button.textContent;
        valueExpresion = inputExpresion.value += valueBtn;
        if (valueExpresion.includes('Log')) {
            if (valueExpresion.includes(',')) {
                valueExpresion = inputExpresion.value += ')';
            } else {
                valueExpresion = inputExpresion.value += ',';
                alert('Introduce la base del logaritmo');
            }
        }
        inputExpresion.value = valueExpresion;
        inputExpresion.focus();
    });
});

buttonsOper.forEach(button => {
    button.addEventListener('click', () => {
        let valueOperation = inputExpresion.value;
        let valueBtn = button.value;
        if (valueOperation === '0' &&
            valueBtn !== 'Log(' &&
            valueBtn !== '10^' &&
            valueBtn !== '-') {
            alert('Primero debes introducir un numero');
        } else {
            cleanZero();
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
    let result = 0;
    if (valueOperation.includes('Log')) {
        const numbers = valueOperation.replace(/[Log()]/g,'');
        const onlyNumbers = numbers.split(',');
        let num = onlyNumbers[0];
        let base = onlyNumbers[1];
        result = math.log(num,base);
        inputExpresion.value = result;
        inputExpresion.focus();
    } else {
        result = math.evaluate(valueOperation);
        inputExpresion.value = result;
        inputExpresion.focus();
    }
})

buttonSin.addEventListener('click', () => {
    let valueOperation = inputExpresion.value;
    let radianes = Number(valueOperation) * (pi / 180);
    result = math.sin(radianes);
    inputExpresion.value = result;
    inputExpresion.focus();
})

buttonCos.addEventListener('click', () => {
    let valueOperation = inputExpresion.value;
    let radianes = Number(valueOperation) * (pi / 180);
    result = math.cos(radianes);
    inputExpresion.value = result;
    inputExpresion.focus();
})

buttonLogNep.addEventListener('click', () => {
    let valueOperation = inputExpresion.value;
    result = math.log(valueOperation);
    inputExpresion.value = result;
    inputExpresion.focus();
})

buttonLog.addEventListener('click', () => {
    let valueOperation = inputExpresion.value;
    if (valueOperation !== '0' && valueOperation !== 'Log(') {
        alert('No puedes introducir un numero delante del Logaritmo');
        inputExpresion.value = valueOperation;
    } else {
        inputExpresion.value = valueOperation;
        inputExpresion.focus();
    }
})

buttonRaiz.addEventListener('click', () => {
    let valueOperation = inputExpresion.value;
    result = math.sqrt(valueOperation);
    inputExpresion.value = result;
    inputExpresion.focus();
})

buttonPlusMinus.addEventListener('click', () => {
    const patronNumbers = '0123456789';
    let valueOperation = inputExpresion.value;
    let valueSinSpaces = valueOperation.trim()
    let haveOnlyNumber = true;
    for (i=0; i < valueSinSpaces.length; i++) {
        if (!patronNumbers.includes(valueSinSpaces[i])) {
            haveOnlyNumber = false;
        }
    }
    if (haveOnlyNumber) {
        let result = Number(valueSinSpaces) *-1;
        inputExpresion.value = result;
        inputExpresion.focus();
    } else {
        inputExpresion.value = valueSinSpaces;
    }
})


