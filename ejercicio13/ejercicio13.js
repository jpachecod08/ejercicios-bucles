function mostrarEco() {
    var resultado = document.getElementById("resultado");
    var fraseInput = document.getElementById("fraseInput");
    var frase = fraseInput.value.trim();

    if (frase === "") {
        alert("Por favor, introduce una frase válida.");
        return;
    }

    resultado.innerHTML += "Frase ingresada: " + frase + "<br>";
    fraseInput.value = ""; 
    fraseInput.focus(); 

    if (frase.toLowerCase() === 'salir') {
        resultado.innerHTML += "¡Adiós!";
        fraseInput.disabled = true; 
    }
}












    
    


