let vuosi=prompt("Syötä vuosiluku:")
if ((vuosi%4===0&&vuosi%100!==0) || (vuosi%400===0))
    document.body.innerHTML=vuosi+" is a leap year."
else
    document.body.innerHTML=vuosi+" is not a leap year."

