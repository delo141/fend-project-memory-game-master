# Memory Game Project

Memory Game is a complete browser-based. Matching game is a card game in which all of the cards are flip face down on a deck and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.
## Table of Contents

* [Game Rules](#game-rules)
* [Features ](#Features)
* [Technical](#technical)
* [How To run](#how-to-run)
* [Tools Used](#tools-used)
* [Credits](#credits)

## Game Rules

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:

* The player flips one card over to reveal its underlying symbol.
* The player then turns over a second card, trying to find the corresponding card with the same symbol.
* If the cards match, both cards stay flipped over.
* If the cards do not match, both cards are flipped face down.
* The game ends once all cards have been correctly matched.

1.Starter Game

<img src="https://raw.githubusercontent.com/delo141/fend-project-memory-game-master/master/img/Start.png" width="450">

2.Correct match
<img src="https://raw.githubusercontent.com/delo141/fend-project-memory-game-master/master/img/Matched.png" width="450">


3.Completed board

<img src="https://raw.githubusercontent.com/delo141/fend-project-memory-game-master/master/img/result.png" width="450">

## Features
* **Congratulations Popup :** When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.
* **Restart Button :** A restart button allows the player to reset the game board, the timer, and the star rating.
* **Star Rating:** The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1).
The number of moves needed to change the rating is up to you, but it should happen at some point.
* **Timer:** When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.
* **Move Counter:** Game displays the current number of moves a user has made.

## Technical

This project consists of the following assets:

* **\index.html**  - contains the game's html structure.
* **css\main.css** - contains the game's board styling.
* **js\app.js** - contains all the board actions & logic.

## How To Run
* Clone this repo or download and extract the file.
* Open the folder.
* Right click `index.html` and choose a chrome browser.
* Enjoy with play the game!

## Tools Used
* [Fontawesome](http://fontawesome.io/icons/) was used to display game card's icons.
## Credits

* For shuffling the cards **shuffle** javaScript function was used from http://stackoverflow.com/a/2450976
