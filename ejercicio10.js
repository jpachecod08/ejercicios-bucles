process.stdout.write("digite un numero entero ");

process.stdin.on('data',function(data){

let numero = parseInt(data.toString().trim());

for(let i=2;i<numero;i++){


    if(numero % i === 1 ){
        console.log("el numero es primo");
        break
    }
    else{
        console.log("el numero no es primo ");
        break
    }

}

process.exit();
})
