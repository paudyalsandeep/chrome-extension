const input=document.getElementById("txtUnit")
const btn=document.getElementById("btnConvert")
let displayIn=document.getElementsByClassName("displayInput")
let feet=document.getElementById("feet")
let meter=document.getElementById("meter")
let gallon=document.getElementById("gallon")
let liter=document.getElementById("liter")
let pound=document.getElementById("pound")
let kilo=document.getElementById("kilo")

btn.addEventListener("click",()=>{
    for(i=0;i<displayIn.length;i++){
        displayIn[i].innerText=input.value
    }
    feet.innerText=parseFloat(input.value/0.3048).toFixed(2)
    meter.innerText=parseFloat(input.value*0.3048).toFixed(2)
    gallon.innerText=parseFloat(input.value/4.546).toFixed(2) 
    liter.innerText=parseFloat(input.value*4.546).toFixed(2) 
    pound.innerText=parseFloat(input.value/2.205).toFixed(2) 
    kilo.innerText=parseFloat(input.value*2.205).toFixed(2) 
})