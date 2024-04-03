function validarNumeroPrimo(){

var numeroPrimo = document.getElementById("numeroInput").value;
var resultado = document.getElementById("resultado");
var i = 2;
resultado.innerHTML="";

if (numeroPrimo.trim() === "") {
    resultado.textContent = "Por favor, introduce un numero válido.";
    return;
}

    if(numeroPrimo % i === 1 ){
        resultado.innerHTML+="el numero es primo";
        
    }
    else{
        resultado.innerHTML+="el numero no es primo ";
       
    }


}
