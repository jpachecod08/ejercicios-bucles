process.stdout.write("digite una palabra: ")

process.stdin.on('data',function(data){

let palabra = data.toString().trim();

for(let i=palabra.length-1;i>=0;i--){
    process.stdout.write(palabra[i]+",");
}
process.exit();
})