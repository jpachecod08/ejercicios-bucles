function repetirPalabra() {
    var palabra = document.getElementById("palabraInput").value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiamos el contenido anterior

    if (palabra.trim() === "") {
        resultado.textContent = "Por favor, introduce una palabra válida.";
        return;
    }

    for (var i = 0; i < 10; i++) {
        resultado.innerHTML += palabra + "<br>";
    }
}




