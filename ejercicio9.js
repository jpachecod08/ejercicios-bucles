

process.stdout.write("digite su contraseña: ");

let contraseñaOculta = "12345678"



process.stdin.on('data',function(data){

    

    let contraseña = data.toString().trim();
    
    let i=0;

    do { 
        i++;

        if(contraseña === contraseñaOculta){
            console.log("contraseña correcta !!!");
            process.exit();
        }

        else {
            console.log(" contraseña incorrecta!! \n");
            break
            
        }
        
    } while (i!==0);

    process.stdout.write("digite su contraseña: ");
      
})