process.stdout.write("por favor ingrese una palabra: ");
process.stdin.once("data", function(data){
    let palabra = data.toString().trim();

process.stdout.write("por favor. ingrese una letra:  ");
process.stdin.once("data", function(data){

    let letra = data.toString().trim();
    let contador = 0;

    for(let i=0;i<palabra.length;i++){
        if(letra === palabra[i]){
            contador++;
            
          }
         
        }
        console.log(`La letra "${letra}" aparece ${contador} veces en la palabra "${palabra}".`);
        process.exit();
});

});