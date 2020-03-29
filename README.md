# Memory Game Project

Memory Game is a complete browser-based card matching game. 

You can access the memory game from [this link](https://github.com/ManalAlkallas/Memory-Game-Udacity/blob/master/index.html).

## Table of Contents

* [The Process of building the game](#the-process-of-building-the-game)
* [Game Rules](#game-rules)
* [Rating](#rating)
* [Technical](#technical)
* [Credits](#credits)
* [Tools Used](#tools-used)

## The Process of building the game:

* Cards are to be shuffled on load or restart
* Game should know how to handle matched and unmatched cards
* Game should display the current number of moves a user has made
* The game should show a star rating (from 1–3) that reflects the player’s performance based on the number of moves made.
* When a player starts a game, a displayed timer should also start and once the player wins the game, the timer stops.
* A restart button should allow the player reset the game board, the timer, and the star rating.
* A congratulations modal should appear when the player wins while showing a button to play again and modal should show: How much time it took, and star rating.

## Game Rules

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:

* The player flips one card over to reveal its underlying symbol.
* The player then turns over a second card, trying to find the corresponding card with the same symbol.
* If the cards match, both cards stay flipped over.
* If the cards do not match, both cards are flipped face down.
* The game ends once all cards have been correctly matched.


1.Correct match

![select](/img/correct-match.png)

2.Completed board

![select](/img/completed.png)


## Rating
The rating depends on the number of moves:

* 3 Stars: If the moves are between 8 and 10.
* 2 stars: If the moves are between 11 and 16.
* 1 star: If the moves are 17 or more.
The game ends once all cards have been correctly matched. The player could restart the game at any time by clicking on the restart icon.

Resources

## Technical

This project consists of the following assets:

* **index.html**  - contains the game's html structure.
* **main.css** - contains the game's board styling.
* **app.js** - contains all the board actions & logic.

## Credits

* For shuffling the cards **shuffle** javaScript function was used from http://stackoverflow.com/a/2450976
* Timer inspired by https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer

## Tools Used

* [Fontawesome](http://fontawesome.io/icons/) was used to display game card's icons.
* [Sweetalert2](https://sweetalert2.github.io/) was used to display the message at the end of the game.

