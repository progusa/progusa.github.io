/* Typewriter */
// writing text
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

$(window).on('load', function() {
    //writing text
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
});


function addBorder(click) {
    var x = document.getElementById(click);
    if (x.attributes[6].value == "true")
        x.style.border = "2px solid black";
    else
        x.style.border = "";
}

function responsiveNavIcon(icon) {
    if (icon.matches) {
        document.getElementById("text-icon").innerHTML = `<img src="/assets/img/logo.png" alt="logo" width="30"
        height="24" class="d-inline-block align-text-top">`;
    } else {
        document.getElementById("text-icon").innerHTML = `<img src="/assets/img/logo.png" alt="logo" width="30"
        height="24" class="d-inline-block align-text-top">
    Programming Nusantara`;
    }
}

var text_icon = window.matchMedia("(max-width:370px)");
responsiveNavIcon(text_icon);
text_icon.addListener(responsiveNavIcon);

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    document.getElementById("succes-copy").style.display = "block";
    setTimeout(() => { document.getElementById("succes-copy").style.display = "none";; }, 3000);
}