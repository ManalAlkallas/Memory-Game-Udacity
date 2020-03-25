

const icons1 = ["fa fa-diamond", "fa fa-diamond", "fa fa-heart", "fa fa-heart", "fa fa-compress", "fa fa-compress", "fa fa-bolt", "fa fa-bolt", "fa fa-cloud", "fa fa-cloud", "fa fa-times-circle", "fa fa-times-circle", "fa fa-car", "fa fa-car", "fa fa-exclamation-triangle", "fa fa-exclamation-triangle"]; 

// Display the cards on the page

const cardContainer = document.querySelector(".deck");

//Save the opened card in an array 
var openedCards = [];
var matchedCards = [];

//create the Cards

function startUp() {

    var icons = shuffle(icons1);
    for (let i = 0; i < icons.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<i class="${icons[i]}"></i>`; //Template literal
        cardContainer.appendChild(card);

        // Card Click Event
        card.addEventListener("click", function () {

            let currentCard = this;
            let previousCard = openedCards[0];

            //We have an existing opened card
            if (openedCards.length === 1) {

                card.classList.add("open", "show");
                openedCards.push(this);

                //We should compare our 2 opened cards

                if (currentCard.innerHTML === previousCard.innerHTML) {

                    //Matched
                    currentCard.classList.add("matched");
                    previousCard.classList.add("matched");

                    matchedCards.push(currentCard, previousCard);

                    // To reset out array
                    openedCards = [];
                  

                } else {
                    setTimeout(function () {
                        currentCard.classList.remove("open", "show");
                        previousCard.classList.remove("open", "show");

                        openedCards = [];

                        //Check if the game is over
                        
                    }, 500);
                }
            } else {
                // We don't have any opened cards
                card.classList.add("open", "show");
                openedCards.push(this);
                
            }
            isOver();
        });
    }
}

startUp();

function isOver() {
    setTimeout(function () {
        if (matchedCards.length === icons1.length) {
            alert("Game Over!")
        }
    }, 100);
}

function reset() {
    let x = document.getElementById("deck");
    x.innerHTML = "";

    startUp();
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(arr1) {
    let currentIndex = arr1.length, temporaryValue, randomIndex; // define 3 variables ,current , random generate a number between 0 - 1 (Decimal Number)
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex); //Math random generate to random number - floor means the lowest integer value , No Decimal values
        currentIndex -= 1; // because the index starts with 0
        temporaryValue = arr1[currentIndex];
        arr1[currentIndex] = arr1[randomIndex];
        arr1[randomIndex] = temporaryValue;
    }
    return arr1;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
