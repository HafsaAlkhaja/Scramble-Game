let boxes = document.querySelectorAll('.letters div')
let boxes2=document.querySelector('.letters')
let box =document.querySelector('.letter')
const div = document.querySelector('.newWord')
const submit = document.querySelector('.subButton')
let wordArray = []
let words = ['ukelele', 'thunders']
const CopyWord = words.map((word) => word)
const levelWinner = document.querySelector('.level-winner')
const levelLoser = document.querySelector('.level-loser')
let newWord = []
const deleteB = document.querySelector('.delButton')
let retry = document.querySelector('.btn-retry')
const image = document.querySelector('.img')

 


function showWords(word) {
  //splits the string into letters
  const letters = word.split('')
 
  for (let i = letters.length - 1; i >= 0; i--) {
    const randLetter = Math.floor(Math.random() * (i + 1)) 
    

    //shuffles the letters (good old java way)
    const shuffle = letters[i]
    letters[i] = letters[randLetter]
    letters[randLetter] = shuffle
    
  }
 

// adds div elements and prints the words in them 
for(let i=0; i<letters.length;i++){
  const div = document.createElement('div')
  boxes2.appendChild(div)
  div.classList.add('letter')
   
  
  div.innerText=letters[i]
  
  }


}




let random = Math.floor(Math.random() * words.length)
showWords(words[random])




function Picking() {
  for (let i = 0; i < boxes2.length; i++) {
    boxes[i].addEventListener('click', function stop() {
      const letterChosen = boxes[i].innerHTML
      if (wordArray.length === 7 || wordArray.length === 8 || wordArray.length===9) {
        wordArray = []
        newWord = []
        
      }
      wordArray.push(letterChosen)
      console.log('letterChosen', letterChosen)
      boxes[i].removeEventListener('click', stop) //used medium
      div.innerHTML += letterChosen

      if (wordArray.length === 7) {
        const joining = wordArray.join('')
        newWord.push(joining)
        console.log(newWord)
      }
    })
  }
}
Picking()
let count= 0;
submit.addEventListener('click', () => {
  if (newWord[0] === words[random]) {
    levelWinner.style.opacity = '1'
    levelWinner.style.pointerEvents = 'all'
    console.log(newWord[0])
    console.log(words[random])
   
  }

  if (newWord[0] !== words[random]) {
      count++
      newWord[0] = ''
      div.innerText = ''
      console.log(newWord[0].length)
      console.log(newWord)
    levelLoser.style.opacity = '1'
    levelLoser.style.pointerEvents = 'all'
     
    } 
    Picking()
 
  }
)

deleteB.addEventListener('click', () => {
  if (newWord[0].length === 7) {
    newWord[0] = ''
    div.innerText = ''
    console.log(newWord[0].length)
    console.log(newWord)
  }
  Picking()
})

retry.addEventListener('click', ()=> {
levelLoser.style.opacity = '0'
levelLoser.style.pointerEvents = 'none'

wordArray.length=0
div.innerHTML=''
newWord.length=0
showWords(words[random])

}) 

image.addEventListener('click', ()=>{
  levelLoser.style.opacity = '0'
  levelLoser.style.pointerEvents = 'none'
  wordArray.length=0
  div.innerHTML=''
  newWord.length=0
  showWords(words[random])
})



