function mostrarTrianguloRectangulo() {
    var numero = parseInt(document.getElementById("numeroInput").value);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (numero < 1 || isNaN(numero)) {
        resultado.textContent = "Por favor, introduce un número válido mayor que 0.";
        return;
    }

    for (let i = 0; i < numero; i++) {
        for (let j = i; j >= 0; j--) {
            resultado.innerHTML += (2 * j + 1) + " ";
        }
        resultado.innerHTML += "<br>";
    }
}




