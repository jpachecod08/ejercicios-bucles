
process.stdout.write("Por favor, ingresa una palabra: ");

process.stdin.on('data', function(data) {
    let nombre = data.toString().trim(); 
 
    for (let i = 0; i < 10; i++) {
        console.log(nombre);
    }
    process.exit();
});

