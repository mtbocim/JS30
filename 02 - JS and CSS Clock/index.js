"use strict";
const now = new Date();
let seconds = now.getSeconds()
let minutes = now.getMinutes()
let hours = now.getHours()

function setClock(){
   seconds++;
   const secondsDegrees = ((seconds/60)*360)+90;
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`
   
   if(seconds%60===0) minutes++;
   const minutesDegrees = ((minutes/60)*360)+90
   minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

   if(minutes%60===0) hours++;
   const hoursDegrees = (((hours%12)/12)*360)+90;
   hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")
setInterval(setClock, 1000)