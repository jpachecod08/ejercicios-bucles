
function mostrarTablas(){

var resultado = document.getElementById("resultado");
 resultado.innerHTML="";

for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        resultado.innerHTML+=(i+"x"+j+" = "+i*j+" ");
    }
    resultado.innerHTML+="<br>";
}
}