function mostrarTriangulo(){

var numero = document.getElementById("numeroInput").value;
var resultado = document.getElementById("resultado");


if (numero.trim() === "") {
    resultado.textContent = "Por favor, introduce un numero válido.";
    return;
}
resultado.innerHTML = "";
    for(let i=0;i<numero;i++){
        for(let j=0;j<=i;j++){
            resultado.innerHTML+="*";
        }
        resultado.innerHTML+="<br>";
    }

}