process.stdout.write("por favor digite un numero entero: ");

process.stdin.on('data',function(data){

    let numero = parseInt(data.toString().trim());

    for(let i=1;i<=numero;i++){
        let linea =""
        for(let j=1;j<=i;j++){
            
            if(i%2==1 && j%2==1){

                linea += i.toString();  
                
            }
            else{
                linea+=" ";
            }
        }
        
        process.stdout.write(linea+"\n");
    }
    process.exit();

});

