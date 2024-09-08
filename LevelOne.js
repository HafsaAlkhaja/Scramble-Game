const boxes = document.querySelectorAll('.letters div')
const div = document.querySelector('.newWord')
const submit = document.querySelector('button')
const wordArray = []
const words = ['Stare', 'Tears', 'cloud']
const CopyWord = words.map((word) => word)
const levelWinner = document.querySelector('.level-winner')
const levelLoser = document.querySelector('.level-loser')
const newWord = []

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

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function stop() {
    const letterChosen = boxes[i].innerHTML
    wordArray.push(letterChosen)
    boxes[i].removeEventListener('click', stop) //used medium
    div.innerHTML += letterChosen

    if (wordArray.length === 5) {
      const joining = wordArray.join('')
      newWord.push(joining)
      console.log(newWord)
    }
  })
}
submit.addEventListener('click', () => {
  for (let k = 0; k < CopyWord.length; k++) {
    if (newWord[0] === words[random]) {
      levelWinner.style.opacity = '1'
      levelWinner.style.pointerEvents = 'all'
      
    }

    if (newWord[0] !== words[random]) {
      levelLoser.style.opacity = '1'
      levelLoser.style.pointerEvents = 'all'
      console.log('loser')
      console.log(newWord)
      console.log(CopyWord)
      
    }
  }
})
