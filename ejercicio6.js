process.stdout.write("por favor ingrese un numero entero: ")

process.stdin.on('data',function(data){

    let numero = data.toString().trim();

    for(let i=0;i<numero;i++){
        for(let j=0;j<=i;j++){
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    process.exit();
})