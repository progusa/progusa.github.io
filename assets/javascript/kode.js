function addBorder() {
    var x = document.getElementById("toggler");
    // console.log(x.attributes[6].value)
    if (x.attributes[6].value == "true")
        x.style.border = "2px solid black";
    else
        x.style.border = "";
}

function enterSignIn() {
    window.open("SignIn.php");
}

function validationSignUp() {
    var submitOK = "true";
    var email = document.getElementById("eemail").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;

    if(pass.length < 8){
        alert("Your password to short!");
        submitOK = "false";
    }

    if(pass!=cpass){
        alert("Your confirm password not same!");
        submitOK = "false";
    }
    
    if (submitOK == "false") {
        return false;
    }
}