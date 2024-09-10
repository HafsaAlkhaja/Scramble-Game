const boxes = document.querySelectorAll('.letters div')
const div = document.querySelector('.newWord')
const submit = document.querySelector('.subButton')
let wordArray = []
const words = ['ukelele', 'thunder', 'battery', 'achieve', 'captain', 'capital', 'caption', 'bedroom', 'benefit', 'believe', 'accused', 'mystery', 'project', 'reality', 'surgery', 'silence', 'therapy', 'payment', 'payable', 'penalty', 'loyalty', 'dynamic']
const CopyWord = words.map((word) => word)
const levelWinner = document.querySelector('.level-winner')
const levelLoser = document.querySelector('.level-loser')
let newWord = []      
const deleteB = document.querySelector('.delButton')


function showWords(word) {
  //splits the string into letters
  const letters = word.split('')

  for (let i = letters.length - 1; i > 0; i--) {
    const randLetter = Math.floor(Math.random() * (i + 1))
    //shuffles the letters (good old java way)
    const shuffle = letters[i]
    letters[i] = letters[randLetter]
    letters[randLetter] = shuffle
  }

  //prints out the word into the div
  for (let i = 0; i < boxes.length; i++) {
    if (i < letters.length) {
      boxes[i].innerHTML = letters[i]
    } else {
      boxes[i].innerHTML = ''
    }
  }
}

let random = Math.floor(Math.random() * words.length)
showWords(words[random])
function Picking() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function stop() {
      const letterChosen = boxes[i].innerHTML
      if (wordArray.length === 7) {
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
  }

  if (newWord[0] !== words[random]) {
      count++
      newWord[0] = ''
      div.innerText = ''
      console.log(newWord[0].length)
      console.log(newWord)
    } 
    Picking()
    
    if(count === 3){
    levelLoser.style.opacity = '1'
    levelLoser.style.pointerEvents = 'all'
   }
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



