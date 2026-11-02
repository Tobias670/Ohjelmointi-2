let nimi=prompt("Kirjoita nimesi:");
const luku=Math.floor(Math.random()*4)+1;

if (luku===1){
    document.body.innerHTML=nimi+", you are "+"Gryffindor.";
}
else if (luku===2){
    document.body.innerHTML=nimi+", you are "+"Slytherin.";
}
else if (luku===3){
    document.body.innerHTML=nimi+", you are "+"Hufflepuff.";
}
else if (luku===4){
    document.body.innerHTML=nimi+", you are "+"Ravenclaw.";
}