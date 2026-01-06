const answerField = document.getElementById("Answer");

function EnterNumber(value) {
    let lastNumber = answerField.value.split(/[+*/-]/).at(-1);

    if(lastNumber.includes('.') && value === '.') return;

    answerField.value += value;
}


function EnterOperator(op) {
    let lastOperator = answerField.value.slice(-1);
    
    if(/[+*/-]/.test(lastOperator)) return;

    answerField.value += op;
}


function EnterClear() {
    answerField.value = "";
}

function EnterEqual() {
    let expression = answerField.value;
    let numbers = expression.split(/[+*/-]/).map(Number);
    let operators = expression.match(/[+*/-]/g);
    if (!operators) return;

    for (let i = 0; i < operators.length; i++) {
        if(operators[i] === '/' && numbers[i+1] == 0){
            alert("invalid devision by zero");
            EnterClear();
            return;
        }
        else if (operators[i] === '*' || operators[i] === '/') {
            let result =
                operators[i] === '*'
                    ? numbers[i] * numbers[i + 1]
                    : numbers[i] / numbers[i + 1];

            numbers.splice(i, 2, result);
            operators.splice(i, 1);
            i--;
        }
    }

    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            result += numbers[i + 1];
        } else {
            result -= numbers[i + 1];
        }
    }

        
    answerField.value = result === Infinity ? 0 : result;

}

