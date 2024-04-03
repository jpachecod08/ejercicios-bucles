function numerosImpares(){

var numeroPositivo = document.getElementById("numeroInput").value;
var resultado = document.getElementById("resultado");
resultado.innerHTML = "";

if (numeroPositivo.trim() === "") {
    resultado.textContent = "Por favor, introduce un numero válido.";
    return;
}

for(let i=0; i<=numeroPositivo;i++){

    if(i % 2 == 1){
        resultado.innerHTML +="numeros "+ i + "<br>";
    }

}

}