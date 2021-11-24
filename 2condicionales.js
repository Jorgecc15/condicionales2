let h1informacion=document.querySelector("#parrafopeso")
let imc = Number (prompt("ingrese su peso en Kg"))
if(imc< 18.5)
    {alert("usted esta bajo de peso")
}else{
    if(imc <25)
    {alert("su peso es normal")
}else{
     if(imc < 30)
    {alert("preobesidad")
 }else{
     if(imc ==30)
    {alert("obesidad")
 }else{
     if(imc<35 )
     {alert("obesidad de clase 1")
 }else{
     if(imc < 40)
     {alert("obesidad de clase 2")
 }else{
     alert("obesidad de clase 3")
 }
 }
 }
    
}    
}
}
    
