//state
let button_cs = document.getElementsByClassName("btn-custom-cs");
let temp_display_cs = document.getElementById("temp-ds-cs");
let display_cs = document.getElementById("ds-cs");
let reset_flag_number = true, fill_a = false, can_change_operator = false;
let operator;
let a, b, result;

//behavior
function listener() {
    for (const button of button_cs) {
        //user mengklik button
        button.addEventListener("click", e => {
            let btn_value = button.value;
            //cek button
            if(isNumber(btn_value)){
                if(reset_flag_number){
                    display_cs.innerHTML = btn_value;
                    reset_flag_number = false;
                }else{
                    display_cs.innerHTML += btn_value;
                }
            }else if(isOperator(btn_value)){
                if(can_change_operator && btn_value != '='){
                    temp_display_cs.innerHTML = a + btn_value;
                }else{
                    if(!fill_a){
                        operator = btn_value;
                        a = parseFloat(display_cs.innerHTML);
                        temp_display_cs.innerHTML = a + btn_value;
                        fill_a = true;  
                        can_change_operator = true;  
                    }else{
                        b = parseFloat(display_cs.innerHTML);
                        result = calculate(a, b, operator);
                        a = result;
                        if(btn_value=='='){
                            temp_display_cs.innerHTML += b + "=";
                            display_cs.innerHTML = result;
                        }else{
                            temp_display_cs.innerHTML = result + btn_value;
                            operator = btn_value;
                        }
                        can_change_operator = false;
                        fill_a = false;
                    }
                }
                reset_flag_number = true;
            }
            else if(btn_value == "clear"){
                temp_display_cs.innerHTML = "";
                display_cs.innerHTML = "0";
                a = 0;
                b = 0;
                result = 0;
                fill_a = false;
                reset_flag_number = true;
            }
        });
    }
}

function isNumber(ch) {
    return (ch >= '0' && ch <= '9') || ch == '.';
}

function isOperator(ch) {
    switch (ch) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '=':
            return true;
    }
    return false;
}

function calculate(a, b, operator) {
    this.a = a;
    this.b = b;
    this.operator = operator;
    let result;

    console.log(this.a, this.b);
    switch (this.operator) {
        case '+':
            result = this.a + this.b;
            break;
        case '-':
            result = this.a - this.b;
            break;
        case '*':
            result = this.a * this.b;
            break;
        case '/':
            result = this.a / this.b;
            break;
    }
    return result;
}

//algorithm
listener();