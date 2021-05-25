function addBorder(){
    var x = document.getElementById("toggler");
    // console.log(x.attributes[6].value)
    if(x.attributes[6].value == "true")
        x.style.border = "2px solid black";
    else
        x.style.border = "";
}