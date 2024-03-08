process.stdout.write("digite el capital a invertir: ");
process.stdin.once('data', function(input){
    let capital = parseFloat(input);


process.stdout.write("digite el interes anual: ");
process.stdin.once('data', function(input){
    let interes = parseFloat(input);



process.stdout.write("digite la cantidad de años : ");
process.stdin.once('data', function(input){
    let años = parseFloat(input);



    for (let i=1;i<=años;i++){

        let capitalObtenido = capital* (1+ interes/100)**i;
        console.log(`capital obtenido  el año ${i} es: ${capitalObtenido}` ) 
    }
  });

 });

});