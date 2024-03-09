class Button {
  constructor(value) {
    this.value = value;
    this.buttonElement = this.createButtonElement();
  }

  operativeNumbers() {
    if (inputBakcUp.value.includes("=")) {
      inputResult.value = "";
      inputBakcUp.value = "";
      inputResult.value += this.value;
    } else {
      if (inputBakcUp.value !== "") {
        let resultTemp = inputResult.value;
        inputResult.value = "";
        inputResult.value += resultTemp;
        inputResult.value += this.value;
      } else {
        inputResult.value += this.value;
      }
    }
  }

  operativeOpers() {
    if (inputBakcUp.value === "" && inputResult.value === "0") {
      alert("El primer valor debe ser un número");
      inputResult.value = "0";
      inputBakcUp.value = "";
    } else {
      let operPower = "";
      if (inputBakcUp.value !== "" && inputResult.value !== "") {
        inputBakcUp.value += inputResult.value;
        let resultTotal = math.evaluate(inputBakcUp.value);
        if (resultTotal === undefined) {
          alert("No puedes realizar esa operación");
          inputResult.value = "0";
          inputBakcUp.value = "";
        } else {
          inputResult.value = resultTotal;
          inputBakcUp.value += this.value;
        }
      } else {
        inputBakcUp.value += inputResult.value;
        inputBakcUp.value += this.value;
      }
    }
  }

  operativeDelete() {
    let valueExpresion = inputResult.value;
    let longExpresion = valueExpresion.length;
    if (longExpresion > 0) {
      inputResult.value = valueExpresion.substring(0, longExpresion - 1);
    } else {
      inputResult.value = "0";
    }
    inputResult.focus();
  }

  createButtonElement() {
    const button = document.createElement("button");
    button.innerText = this.value;
    button.className = "btnCalculator";

    button.addEventListener("click", () => {
      cleanZero();
      const btnValNum = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
      const btnValOper = ["+", "-", "*", "/", "^"];

      if (btnValNum.includes(this.value)) {
        this.operativeNumbers();
      } else if (btnValOper.includes(this.value)) {
        this.operativeOpers();
      } else {
        switch (this.value) {
          case "^2":
            inputBakcUp.value += inputResult.value;
            inputBakcUp.value += this.value;
            inputResult.value = math.evaluate(inputBakcUp.value);
            inputBakcUp.value = "";
            break;
          case "C":
            inputResult.value = "0";
            inputBakcUp.value = "";
            inputResult.focus();
            break;
          case "Del":
            this.operativeDelete();
            break;
          case "=":
            inputBakcUp.value += inputResult.value;
            let resultTotal = math.evaluate(inputBakcUp.value);
            if (resultTotal === undefined) {
              alert("No puedes realizar esa operación");
              inputResult.value = "0";
              inputBakcUp.value = "";
              inputResult.focus();
            } else {
              inputResult.value = resultTotal;
              inputBakcUp.value += this.value;
              inputResult.focus();
            }
            break;
        }
      }
    });

    switch (this.value) {
      case "0":
        button.className = "btnCalculator btnNumber btn0";
        button.innerText = "";
        break;
      case "1":
        button.className = "btnCalculator btnNumber btn1";
        button.innerText = "";
        break;
      case "2":
        button.className = "btnCalculator btnNumber btn2";
        button.innerText = "";
        break;
      case "3":
        button.className = "btnCalculator btnNumber btn3";
        button.innerText = "";
        break;
      case "4":
        button.className = "btnCalculator btnNumber btn4";
        button.innerText = "";
        break;
      case "5":
        button.className = "btnCalculator btnNumber btn5";
        button.innerText = "";
        break;
      case "6":
        button.className = "btnCalculator btnNumber btn6";
        button.innerText = "";
        break;
      case "7":
        button.className = "btnCalculator btnNumber btn7";
        button.innerText = "";
        break;
      case "8":
        button.className = "btnCalculator btnNumber btn8";
        button.innerText = "";
        break;
      case "9":
        button.className = "btnCalculator btnNumber btn9";
        button.innerText = "";
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "^2":
      case "^":
        button.className = "btnCalculator btnOper";
        break;
      case "C":
        button.className = "btnCalculator btnClear";
        break;
      case "=":
        button.className = "btnCalculator btnEqual";
        break;
      case "Del":
        button.className = "btnCalculator btnDelete";
        break;
    }
    return button;
  }
}

function cleanZero() {
  if (inputResult.value === "0") {
    inputResult.value = "";
    inputResult.focus();
  }
}

const inputBakcUp = document.createElement("input");
inputBakcUp.type = "text";
inputBakcUp.id = "inputBakcUp";
inputBakcUp.value = "";

const inputResult = document.createElement("input");
inputResult.type = "text";
inputResult.id = "operations";
inputResult.value = "0";

const calculator = document.getElementById("calculator");
const buttonValues = [
  "7",
  "8",
  "9",
  "+",
  "/",
  "4",
  "5",
  "6",
  "-",
  "^2",
  "1",
  "2",
  "3",
  "*",
  "^",
  "0",
  "C",
  "Del",
  "=",
];
const buttons = buttonValues.map((value) => new Button(value));

function reload() {
  calculator.append(inputBakcUp);
  calculator.append(inputResult);
  buttons.forEach((button) => {
    calculator.append(button.buttonElement);
  });
}

reload();
