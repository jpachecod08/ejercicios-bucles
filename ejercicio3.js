process.stdout.write("por favor, ingrese un numero entero positivo: ")

process.stdin.on('data', function(data){

let numeroPositivo = data.toString().trim();

for(let i=0; i<=numeroPositivo;i++){

    if(i % 2 == 1){
        console.log(i,",");
    }

}
process.exit();
});