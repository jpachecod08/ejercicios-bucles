process.stdout.write("por favor, ingresa tu edad: ");

process.stdin.on('data', function (data){

    let edad = data.toString().trim();

    for(let i=1;i<=edad;i++){
        console.log("cumpleaños numero :",i);
    }
   process.exit();
});