const valinta=confirm("Lasketaanko neliöjuuri?");
if (valinta===true){
    const numero=prompt("Syötä luku:")
    if (numero>0){
    const neliöjuuri=Math.sqrt(numero)
    document.body.innerHTML=neliöjuuri.toFixed(2)
    }
    else{ document.body.innerHTML="The square root of a negative number is not defined"}
    }
else if (valinta===false)
    document.body.innerHTML=("The square root is not calculated.")