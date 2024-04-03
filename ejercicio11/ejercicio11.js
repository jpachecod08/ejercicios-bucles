function palabraArreves(){

var palabra = document.getElementById("palabraInput").value;
var resultado = document.getElementById("resultado");
resultado.innerHTML="";

if (palabra.trim() === "") {
    resultado.textContent = "Por favor, introduce un numero válido.";
    return;
}

for(let i=palabra.length-1;i>=0;i--){
    resultado.innerHTML+=palabra[i]+",";
}

}