console.log("is it working?")

let button1 = document.querySelector('.button1')
let button = document.querySelector('.instructions')
button1.addEventListener('click', ()=>{
   button.style.opacity = '1'
    button.style.pointerEvents = 'all'
})