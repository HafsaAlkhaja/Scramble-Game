console.log('is it working?')

let button1 = document.querySelector('.button1')
let button = document.querySelector('.instructions')
let custom = document.querySelector('.button2')
let gameC = document.querySelector('.custom1')
let dark = document.querySelector('.btn-dark')
let light = document.querySelector('.btn-light')
let gameName = document.querySelector('.gameName')
let closee = document.querySelector('.dialog__close')
let menuBody = document.querySelector('.menuBody')
let play= document.querySelector('.button')
let timer=document.querySelector('.button3')

button1.addEventListener('click', () => {
  button.style.opacity = '1'
  button.style.pointerEvents = 'all'
})

custom.addEventListener('click', () => {
  gameC.style.opacity = '1'
  gameC.style.pointerEvents = 'all'
})

dark.addEventListener('click', () => {
  gameName.style.backgroundColor = 'black'
  gameName.style.color = 'white'
  gameName.style.border = '10px solid white'
   menuBody.style.backgroundImage="url('https://cdn.vectorstock.com/i/1000x1000/70/48/social-media-dark-doodle-seamless-pattern-vector-27737048.webp')"
   play.style.backgroundColor='black'
   timer.style.backgroundColor='black'
   custom.style.backgroundColor='black'
   button1.style.backgroundColor='black'



   
})

light.addEventListener('click', () => {
  gameName.style.backgroundColor = 'white'
  gameName.style.color = 'black'
  gameName.style.border= '10px solid black'
  menuBody.style.backgroundImage="url('https://www.howjoyful.com/wp-content/uploads/2013/07/easy-doodles-for-beginners.jpg.webp')"
  play.style.backgroundColor='#282727'
  timer.style.backgroundColor='#282727'
  custom.style.backgroundColor='#282727'
  button1.style.backgroundColor='#282727'
})

closee.addEventListener('click', () => {
  gameC.style.opacity = '0'
  gameC.style.pointerEvents = 'none'
})

timer.addEventListener('click',()=>{
localStorage.setItem('.button3', 'true')

})

