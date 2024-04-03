const contraseñaOculta = "contraseña";

function validarContraseña(){

var contraseña = document.getElementById("contraseñaInput").value;
var resultado = document.getElementById("resultado");
resultado.innerHTML="";

if (contraseña.trim() === "") {
    resultado.textContent = "Por favor, introduce un numero válido.";
    return;
}
        
        if(contraseña === contraseñaOculta){
            resultado.innerHTML+="contraseña correcta !!!";
            
        }

        else {
            resultado.innerHTML+=" contraseña incorrecta!! <br>";
            
            
        }
        
      

}