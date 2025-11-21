function suma() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let r = num1 + num2;

    document.getElementById("r").value = r;
}
