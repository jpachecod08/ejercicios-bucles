function numeroAtras(){

    var numero = document.getElementById("numeroInput").value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (numero.trim() === "") {
        resultado.textContent = "Por favor, introduce un numero válido.";
        return;
    }


for(let i = numero;i>=0; i--){

    if(i%2==1 || i == 0){
        resultado.innerHTML +="numeros "+ i + "<br>";
    }

}

}