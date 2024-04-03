function letrasPalabra() {
    var palabra = document.getElementById("palabraInput").value;
    var letra = document.getElementById("letraInput").value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (palabra.trim() === "" || letra.trim() === "") {
        resultado.textContent = "Por favor, introduce datos válidos.";
        return;
    }

    letra = letra.toString().trim(); // Convertir la letra a cadena y eliminar espacios en blanco
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (letra === palabra[i]) {
            contador++;
        }
    }

    resultado.innerHTML = `La letra "${letra}" aparece ${contador} veces en la palabra "${palabra}".`;
}
