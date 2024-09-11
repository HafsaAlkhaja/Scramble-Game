let boxes = null
let boxes2 = document.querySelector('.letters')
let box = document.querySelector('.letter')
const AnswerBar = document.querySelector('.newWord')
const submit = document.querySelector('.subButton')

let wordArray = []
let words = [
  'stare',
  'tears',
  'cloud',
  'jumbo',
  'quack',
  'quick',
  'chain',
  'crown',
  'dance',
  'focus',
  'month',
  'music',
  'games',
  'yield',
  'vital',
  'wheel',
  'virus',
  'north',
  'south',
  'touch',
  'trade',
  'sweet',
  'candy',
  'total',
  'plant',
  'sense',
  'radio',
  'party',
  'royal',
  'equal',
  'death',
  'dealt',
  'could',
  'broke'
]

const CopyWord = words.map((word) => word)
const levelWinner = document.querySelector('.level-winner')
const levelLoser = document.querySelector('.level-loser')
let newWord = []
const deleteB = document.querySelector('.delButton')
let retry = document.querySelector('.btn-retry')
const image = document.querySelector('.img')
let image2= document.querySelector('.img2')
let round = 0
let rounds = 5

function showWords(word) {
  //splits the string into letters
  let letters = word.split('')

  for (let i = letters.length - 1; i >= 0; i--) {
    const randLetter = Math.floor(Math.random() * (i + 1))

    //shuffles the letters (good old java way)
    const shuffle = letters[i]
    letters[i] = letters[randLetter]
    letters[randLetter] = shuffle
  }

  // adds div elements and prints the words in them
  for (let i = 0; i < letters.length; i++) {
    console.log(letters.length)
    const div = document.createElement('div')
    boxes2.appendChild(div)
    div.classList.add('letter')
    div.innerText = letters[i]
  }
    round++
 
    
  
}


let random = Math.floor(Math.random() * words.length)
showWords(words[random])

function Picking() {
  boxes = document.querySelectorAll('.letters .letter')
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function stop() {
      let letterChosen = boxes[i].innerHTML
      if (wordArray.length === boxes[i].length) {
        wordArray = []
        newWord = []
      }
      wordArray.push(letterChosen)
      console.log('letterChosen', letterChosen)
      console.log(wordArray.length)
      boxes[i].removeEventListener('click', stop) //used medium
      AnswerBar.innerHTML += letterChosen

      if (wordArray.length === boxes.length) {
        let joining = wordArray.join('')
        console.log(wordArray)
        newWord.push(joining)
        console.log(newWord)
      }
    })
  }
}
Picking()
let count = 0
submit.addEventListener('click', () => {

  if (newWord[0] === words[random] && count !==5 ) {
    levelWinner.style.opacity = '1'
    levelWinner.style.pointerEvents = 'all'
    console.log(newWord[0])
    console.log(words[random])
  }
  if (newWord[0] !== words[random]) {
    count++
    wordArray.length=0
    AnswerBar.innerText = ''
    newWord=[]
    letterChosen=''
    setTimeout(() => {
      image2.style.opacity = "1"; 
      setTimeout(() => {
          image2.style.opacity = "0"; 
      }, 1000);
  }, 2);
    
    console.log(newWord)
  }

  if (newWord[0] !== words[random] && count === 5) {
    count++
    wordArray.length=0
    AnswerBar.innerText = ''
    newWord=[]
    letterChosen=''
    
    console.log(newWord)
    levelLoser.style.opacity = '1'
    levelLoser.style.pointerEvents = 'all'
  }
  Picking()
  if (count === 5) {
    levelLoser.style.opacity = '1'
    levelLoser.style.pointerEvents = 'all'

  }

})
console.log(boxes.length)

deleteB.addEventListener('click', () => {
  boxes = document.querySelectorAll('.letters .letter')
  console.log(boxes.length)
  if (newWord[0].length === boxes.length) {
    
    wordArray.length=0
    AnswerBar.innerText = ''
    newWord=[]
    letterChosen=''
    console.log(newWord)
    
  }
  Picking()
  
})

retry.addEventListener('click', () => {
  levelLoser.style.opacity = '0'
  levelLoser.style.pointerEvents = 'none'
   
  wordArray.length=0
    AnswerBar.innerText = ''
    newWord=[]
    letterChosen=''
})

image.addEventListener('click', () => {
  boxes = document.querySelectorAll('.letters .letter')
  levelLoser.style.opacity = '0'
  levelLoser.style.pointerEvents = 'none'
  newWord = []
  wordArray.length = 0
  
  AnswerBar.innerHTML = ''
    AnswerBar.innerText = ''
    letterChosen=''
   let divs = document.querySelectorAll(".letters div")
    for(let i=divs.length-1;i>=0;i--){
    //  boxes2.children[i].innerHTML.replace(words[random], '')
    
    divs[i].remove()
    console.log(divs[i])
    
    }
   
  showWords(words[random])
  Picking()
  

})

