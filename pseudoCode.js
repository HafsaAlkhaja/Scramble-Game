//This is for me to plan out exactly how my project implementation will go
//*******

// This part is for the menu in pseudoCode:
/*
1- The opening screen of the game is going to be the menu, created in the index.html file

2-The menu will have a picture of the game added

3-The menu will contain three buttons that are clickable:

 a- a Start button to start the game
(MAYBE) b- a control button to decide how the player wants to play the game (will explain shortly in detail)

 c- an activateTimer button that will add a timer to make the game more difficult

4-The menu will also have a toggle button for darkMode:

  a- it will take a css code that is a varient to the original code and will only   activate once the switch is clicked 
  
  b- this darkmode switch will change background color to dark grey or black and will also change the layout within the game and the menu ofcourse


(MAYBE) 5- As mentioned in b point 3, the control button will allow players to pick whether they want to play the game by clicking on the letter boxes within the game, or if they want to type it out onto the input section 

6- each button will have an exit button once entered to go back to the menu if needed, so IF button is clicked, return to index.html page

7- Once the start button is clicked, the player will have a pop up appear for them to pick the level

8- The popup will show level one unlocked but level 2 and 3 will be inaccessible by adding either transparent html or actually making them not clickable till a certain condition is met

7- level 2 and 3 will activate once the player finishes each one of them, so if player finished level one, level two will be activated, if player finished level two, level three will be activated

8- the ChooseLevel popUp will change once they go back to the menu and if they have played the game till level three, all of the levels will be available

9- the darkMode toggle switch (if used):
    a- It will change the background to dark grey or black
    b- It will change the colors of the letters to a a dull white color to fit the black background
    c- if an image that is bright is added, the image will be changed to a darker type of image to fit the theme
    d- a duplicated html and css will be created to implement this button (unless there is an easier way to do it that im not aware of)
*/

//This part is for the start game (once level one is clicked)

/* 
1- the player will see 5 boxes in level one that are clickable, they are an array of strings (letters) being split apart and jumbled randomly

2-If player clicks on box, the Letter will be copied into a new array and that new array will be displayed in the AnswerBar 

3-The letters have to be placed in the right order

4- If the letters were placed in the right order perfectly, The player needs to click the submit button, (maybe will add if answer is correcting, hovering over the button will make it green otherwise it will be red)

5- if the answer is wrong the same button will turn into a "clear" button for the words to get cleared out of the bar and be placed back in the jumble boxes, so the new array will decrement the contents it has and the original array will be printed out again

6- If the player misclicked a letter and wants to go back, the clear button will be there to clear the AnswerBar as well

7- By default the submit button will always clear the content and reset everything as long as the answer is wrong and color will stay red until the player gets the answer correctly (or maybe they will have to click on it for it to indicate its correct)

//AFTER LEVEL ONE IS COMPLETED

8-if the answer matches the array of the original string, after the click button is clicked, a prompt will show up asking if they want to proceed to the next round, or go back to the menu

 (MAYBE) 9-The progress of the game will be saved automatically once the player gets the right word correctly in level one

 10-In level two, the length of the word will increase, meaning the boxes will be increasing as well as the length of the array of the word, everything else will stay the same and the answer bar will expect a longer length of word for the proceed button to appear, otherwise it will clear. 

 11-the length of the word in level two will turn up to 7, meaning word array length is incremented 

 12-everything else will stay the same as level one

 13- once that is done, and player decides to proceed to level three, the same prompt as level two will appear for them to pick, if they want to proceed, else they exit

 //LEVEL THREE 

 1- in level 3, the player will have a longer word but also a timer that if it runs out, the player will lose.

 2- if player lost, a popup will show up saying "YOU LOST" and player will be forced to go back to the menu after clicking the only available button called MENU

 - the player also has 1 try to get the right word, if the wrong word is submitted, the word will change (randomly another word with the ideal length will be picked) and the letters will change as well in the display obviously 

 3- the word will contain words that range from letters 7 and beyond

 4- BONUS: The player may have a tricky tile of a letter that is not supposed to be included within the word, now i dont know exactly how i will do this in code... 
 
    a- the array in level 3 will be updated to add a randomly picked string from an array called vowels into the printed out array that is diplayed for the player

 5- if time is over in the timer added to the final level, the player has lost and the popUp for losing will show up the same way as mentioned above

 6- If player returns to menu after losing or finishing a round, they can click on start and access level 3 again if they wanted to try it again

 7- BONUS: If player wants to replay a certain level multiple times, a restart button will show up, so if player is in LevelTwo, restart levelTwo once restart button is clicked
    
     a- This restart button could be added to all levels if a player wants a new word 

*/

//the timer function will countdown from 30, if time is out, player loses 

//This only appears if player wants to activate the timer from the menu (activateTimer button), or if player starts level 3 by default

//so in this case, the timer function will only activate if button is clicked for level one and two, because level 3 already has it implemented 

//BONUS: music picking to play the game or adding sounds once a word is correct and also if the word is wrong


//MAYBE: indicates that maybe il do the code for it if i felt i could do it on time and/or easily

