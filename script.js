function calcHypotenuse() {
    console.log("calc");
    let katet1 = parseFloat(document.getElementById("lable1").value);
    let katet2 = parseFloat(document.getElementById("lable2").value);

    if (katet1 > 0 && katet2 > 0) {
		document.getElementById("result").innerText = Math.sqrt(katet1*katet1 + katet2 * katet2);
        
    } else {
        alert("Значення невірні. \n Введіть допустимі значення.");
    }
}