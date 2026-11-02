let kerta=parseInt(prompt("Anna nopan heittojen määrä:"))
let summa=0

for (let toisto = 0; toisto < kerta; toisto+=1){
    let noppa=Math.floor(Math.random()*6)+1;summa+=noppa}
console.log("Silmälukujen summaksi tuli: "+summa)