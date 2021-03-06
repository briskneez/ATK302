# Bop It Game

Stream Two Project: Interactive Front-End Development - Code Institute. 

This game is used for **educational purposes only** for a school coding project. There will be **no commercial use** of this code or project. It is inspired by the handheld children's game, Bop It. No styling template was used for this project. 


![Responsive Demo](https://raw.githubusercontent.com/hschafer2017/Stream-Two-Project/master/BopItResponsive.gif "Responsive Demo")

# Demo
A live demo for this project can be found [here](https://hschafer2017.github.io/Stream-Two-Project/). This project is hosted on GitHub pages. 

# Technologies 
1. JavaScript 
2. jQuery 
3. HTML
4. CSS
5. Bootstrap (3.3.7)

# UX 
This project is modeled after the children's game, Bop It, which was a favorite of mine growing up. It shouts a command and then you either have to push the button in the middle (Bop It), twist the left end (Twist It), or pull the lever on the right side (Pull It). I wanted to create a similar experience with an online version that would allow you to play on both the desktop and on your mobile device. 

Traditionally, you would use a handheld Bop It stick to play this game. However, in the game I've created, you can play with the buttons on a touchscreen, the mouse on a desktop, or the keyboard on a desktop. These different playing options gives the user a range of difficulty and interaction across the game. 

The game will also keep your high score and your current score so that you can keep an eye on the score you have to beat to set a new high score. The game is also timed, so you only have 30 seconds to try to beat your score! 

I wanted to create a minimalistic design so that the page was not too busy or distracting, so when the page loads, I've included a modal that explains how to play the game. It also includes a suggestion to turn your mobile device to widescreen for a better game experience. 

When you hit the start button, the first command (Bop It/Pull It/Twist It) will flash and the timer will start. 

To find out more about the original Bop It game, click [here](https://en.wikipedia.org/wiki/Bop_It). 


# How To Play 
Press Start to start the game, and click the button that corresponds with the command on the screen. Make sure to click the right one, otherwise the game is over. Time will run out after 30 seconds. 

## Desktop
On desktop, you can play with either the keys or with the mouse. The keys are more difficult, since it requires you to use two hands for three keys. 


## Mobile 
For a better gaming experience, turn your device to widescreen. 


# Features
There is both a current score and a high score function in the game. The high score function is stored using localstorage (no back-end) and is reset each time the page is refreshed. The current game score resets each time the start button is pressed. 

There is a timing function as well that is set for 30 seconds. If the time runs out then the game is over. 

Each command is chosen at random via the bopPrompt function. The flash function then takes the command and removed the hidden attribute given to the element that corresponds with the command generated by the bopPrompt so that the correct command will appear on the screen. If the correct button is pressed, this process will repeat and your score will increase until an incorrect button is pressed or time runs out. When the game has ended, the game buttons will be disabled, requiring the player to restart the game if they want to keep playing. 

You can also play with the keyboard on a laptop or desktop. The A (Twist It), B (Bop It), and P (Pull It) can also be used instead of clicking the button with the mouse. These letters are relatively spread out from each other on the keyboard, setting up similarly to the handheld Bop It game, it Twist it on the left, Pull It on the right, and Bop it in the center. 

## Features Left to Implement
I would also like to implement a 'global high score' that would appear and be updated regardless of who was playing the game. With this option you could have a 'World Bop It Champion' as well as having your personal high score that's only visible to the user. 

I would also like to implement multiple levels of the game, and one being where the amount of time you have between each command appearing and clicking the button becomes less and less the higher your score, ultimately speeding the up over the course of the game. 

# Testing 
## Manual Testing 
All tests for this game were run manually. When I first wrote the game, I realized that if you clicked the incorrect button, which ended the game, and then clicked the correct button after the game had ended without pressing 'Start' again to start a new game, you could actually continue the game you had just lost. I didn't want this, so I disabled all of the buttons after the game ended due to timeout or incorrect click. I found I had the same issue with the hot keys, and I was able to disable these as well (in the game). 

I also tested to make sure that the command (Bop It/Pull It/Twist It) that appeared would appear 'incorrect' if I didn't click the corresponding button. 

For the scoring, I used local storage in the browser to save your high score that clears on refresh. I ended up having to add a small function to clear upon reload otherwise it would have stayed the same across all sessions. 

For the timing, I also initially had an issue where each time I would press the button corresponding to a the command that appeared, there would be a new timer starting. Suddenly, I'd have 10 timers going at the same time after 10 commands and I would have to wait for them all to timeout before starting the game again. To fix this, I managed to have one timing function completely controlled by the 'startGame' function, and then once the time ran out, the function controlling the timer (startTimer) would end the game or, if endGame (the function that ends the game) was called due to a incorrect button pressed, it would automatically run: 

```javascript
endGame.called = True
```

which would then clear the timer due to the following if statement: 
```javascript
if (endGame.called === true) {
            clearInterval(interval);
        }
```

# Credits 
## Content 
All commands and the game inspiration came from the original Bop It game. (No copyright infringement intended, as this is for educational use only.)

## Acknowledgements 
I followed [this](https://phaserjs.com/saving-high-score) tutorial for the high score function in local storage and [this](https://stackoverflow.com/questions/46770009/need-to-clear-local-storage-on-browser-tab-closed-not-on-refresh) tutorial for clearing it out. These were both modified to fit the specific needs of this project. 

I referenced [this](https://medium.com/@melwinalm/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e) blog to create the hot key functionality. The hot key functions were heavily modified for the nature of this project. 

The startTimer function and the bopPrompt functions were both modeled after functions found on Stack Overflow, however they were significantly modified for the use of this project. 
