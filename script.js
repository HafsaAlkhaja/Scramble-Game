console.log('is it working?')

let button1 = document.querySelector('.button1')
let button = document.querySelector('.instructions')
let custom = document.querySelector('.button2')
let gameC = document.querySelector('.custom1')
let dark = document.querySelector('.btn-dark')
let light = document.querySelector('.btn-light')
let gameName = document.querySelector('.gameName')
let closee = document.querySelector('.dialog__close')

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
})

light.addEventListener('click', () => {
  gameName.style.backgroundColor = 'white'
  gameName.style.color = 'black'
  gameName.style.border= '10px solid black'
})

closee.addEventListener('click', () => {
  gameC.style.opacity = '0'
  gameC.style.pointerEvents = 'none'
})
