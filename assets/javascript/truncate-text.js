function truncateString(str, num) {
    console.log("masuk", str);
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

let text = document.getElementsByClassName("truncate");
for (let txt of text) {
    txt.innerHTML = truncateString(txt.innerHTML, 75);
}