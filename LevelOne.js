const boxes = document.querySelectorAll('.letters div')
const div = document.querySelector('.newWord')
const submit = document.querySelector('button')
const wordArray = []
const words = ['Stare', 'Tears', 'cloud']
const CopyWord = words.map((word) => word)
const levelWinner = document.querySelector('.level-winner')
const levelLoser = document.querySelector('.level-loser')


function showWords(word) {
  //splits the string into letters
  const letters = word.split('')

  for (let i = letters.length - 1; i > 0; i--) {
    const randLetter = Math.floor(Math.random() * (i + 1))
    //shuffles the letters (good old java way)
    const shuffle = letters[i]
    letters[i] = letters[randLetter]
    letters[randLetter] = shuffle
    console.log(shuffle)
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
    

    const newWord = []
    if (wordArray.length === 5) {
      const joining = wordArray.join('')
      newWord.push(joining)
      console.log(newWord)

      submit.addEventListener('click', () => {
        const check = true
        for (let k = 0; k <= CopyWord.length; k++) {
          if (newWord[0] == CopyWord[k]) {
            levelWinner.style.opacity = '1'
             levelWinner.style.pointerEvents = 'all'
            console.log('true')
            break
          } 
           if(newWord[0]!==CopyWord[k]){
            levelLoser.style.opacity ='1'
            levelLoser.style.pointerEvents='all'
            console.log("loser")
            break
           }
            
          }
        }
      )}
    }
  
)}
