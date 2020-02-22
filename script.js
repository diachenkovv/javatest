function Math1() {
    let select = document.getElementById("select");
    let number = document.getElementById("num").value;
    let value = select.options[select.selectedIndex].value;
    let res = 0;
    if (value == 1) {
        res = Math.sin(number);
    }
    else {
        res = Math.cos(number);
    }

    alert(res);
}