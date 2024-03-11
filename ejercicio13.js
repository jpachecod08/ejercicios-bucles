process.stdin.setEncoding('utf8');

process.stdout.write('Introduce una frase : ');
process.stdin.on('data', function(data) {
    const frase = data.toString().trim();
    if (frase.toLowerCase() === 'salir') {
        process.exit(); 
    } else {
        console.log('Frase ingresada:', frase);
        process.stdout.write('Introduce otra frase : ');
    }
});





    
    


