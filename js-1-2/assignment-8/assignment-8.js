const alkuvuosi=parseInt(prompt("Syötä alkuvuosi"))
const loppuvuosi=parseInt(prompt("Syötä loppuvuosi"))
let lista= ""

for (let vuosi = alkuvuosi; vuosi <= loppuvuosi; vuosi+=1){
    if ((vuosi%4===0 && vuosi % 100 !==0) || (vuosi%400===0)){
        lista +=`<li>${vuosi}</li>`;
    }
}
document.getElementById("luettelo").innerHTML=lista