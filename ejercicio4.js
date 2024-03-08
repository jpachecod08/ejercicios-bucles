process.stdout.write("por favor, ingrese  un numero positivo: ");

process.stdin.on('data',function(data){

let numero = data.toString().trim();

for(let i = numero;i>=0; i--){

    if(i%2==1 || i == 0){
        console.log(i,",");
    }

}
process.exit();
})