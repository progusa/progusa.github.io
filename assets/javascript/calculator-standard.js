//state
let button_cs = document.getElementsByClassName("btn-custom-cs");
let temp_display_cs = document.getElementById("temp-ds-cs");
let display_cs = document.getElementById("ds-cs");
let start_flag = false, operation_flag = false;
let operator;
let a, b;

//behavior
function listener() {
    for (const button of button_cs) {
        button.addEventListener("click", e => {
            if (start_flag) {
                temp_display_cs.innerHTML += button.value;
            } else {
                temp_display_cs.innerHTML = button.value;
            }

            if (isNumber(button.value) && start_flag) {
                display_cs.innerHTML += button.value;
            } else if(isCalculate(button.value) || operation_flag){
                
                operation_flag = false;
            } else if (isOperator(button.value)) {
                operator = button.value;
                operation_flag = true;
            }
            else {
                display_cs.innerHTML = button.value;
                start_flag = true;
            }

        });
    }
}

function isNumber(ch) {
    return (ch >= '0' && ch <= '9') || ch == '.';
}

function isOperator(ch) {
    switch(ch){
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
    }
    return false;
}

function isCalculate(ch){
    return ch == '=';
}

//algorithm
listener();