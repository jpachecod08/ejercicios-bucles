function cantidadCumpleaños(){

var edad = document.getElementById("edadInput").value;
var resultado = document.getElementById("resultado");
resultado.innerHTML = "";

if (edad.trim() === "") {
    resultado.textContent = "Por favor, introduce una palabra válida.";
    return;
}
    for(let i=1;i<=edad;i++){
        resultado.innerHTML += "Cumpleaños N°" + i + "<br>";

    }

}