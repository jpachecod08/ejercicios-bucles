function calcularCapital(){


var capital = document.getElementById("capitalInput").value;
var interes = document.getElementById("interesInput").value;
var años = document.getElementById("cantidadAnual").value;
var resultado = document.getElementById("resultado");
resultado.innerHTML="";

if (capital.trim() === ""  || interes.trim()=== "" || años.trim()==="") {
    resultado.textContent = "Por favor, introduce un numero válido.";
    return;
}

    for (let i=1;i<=años;i++){

        let capitalObtenido = capital* (1+ interes/100)**i;
        resultado.innerHTML+=`capital obtenido  el año ${i} es: ${capitalObtenido}`+"<br>"
    }
 
}