"use strict";

function playSound(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
   console.log(key)
   if (!audio) return; //stops if no element
   
   audio.currentTime = 0;
   audio.play();
   
   key.classList.add('playing');
   //setTimeout(()=>key.classList.remove('playing'), 50) not good for matching
   //between css and JS
}

function removeTransition(e){
   if(e.propertyName !== 'transform') return;
   this.classList.remove('playing')
}

window.addEventListener('keydown', playSound)

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))