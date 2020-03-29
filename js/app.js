
const icons1 = ["fa fa-diamond", "fa fa-diamond", "fa fa-heart", "fa fa-heart", "fa fa-compress", "fa fa-compress", "fa fa-bolt", "fa fa-bolt", "fa fa-cloud", "fa fa-cloud", "fa fa-times-circle", "fa fa-times-circle", "fa fa-car", "fa fa-car", "fa fa-exclamation-triangle", "fa fa-exclamation-triangle"];

//Display the cards on the page

const cardContainer = document.querySelector(".deck");

//Save the opened card in an array 
var openedCards = [];

//Save the matched card in an array 
var matchedCards = [];

let moves = 0;

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
            timer();
            let currentCard = this;
            let previousCard = openedCards[0];
            
            addMove();
           
           
            //We have an existing opened card
            if (openedCards.length === 1) {

                card.classList.add("open", "show", "disabled");
                openedCards.push(this);

                //We should compare our 2 opened cards

                if (currentCard.innerHTML === previousCard.innerHTML) {

                    //Matched
                    currentCard.classList.add("matched");
                    previousCard.classList.add("matched");

                    matchedCards.push(currentCard, previousCard);
                    isOver();

                    // To reset out array
                    openedCards = [];
                } else {
                    setTimeout(function () {
                        currentCard.classList.remove("open", "show", "disabled");
                        previousCard.classList.remove("open", "show", "disabled");

                        openedCards = [];

                        //Check if the game is over

                    }, 200);

                }


            } else {

                // We don't have any opened cards
                card.classList.add("open", "show", "disabled");
                openedCards.push(this);

            }
        });

    }
}

startUp();


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


function isOver() {
    setTimeout(function () {
        if (matchedCards.length === icons1.length) {
            clearInterval(gameInterval);
            Swal.fire({
                title: 'Congratulations, \nYou completed the game in ' + moves / 2 + ' Moves and in ' +document.querySelector(".displayTime").innerHTML, 
                showClass: {
                    popup: 'animated fadeInDown faster'
                },
                hideClass: {
                    popup: 'animated fadeOutUp faster'

                }

            }).then((result) => {
                if (result.value) {
                reset();
                }
            });
        }
    }, 100);
}




function reset() {
    let x = document.getElementById("deck");
    x.innerHTML = "";
    moves = 0;
    movesContainer.innerHTML = 0;
    starsContainer.innerHTML = star + star + star;
    startUp();
    clearInterval(gameInterval);
    done = false;
    document.querySelector(".displayTime").innerHTML="00:00";

}

//Add Move function

let movesContainer = document.querySelector(".moves");
movesContainer.innerHTML = 0;

//movesContainer.innerHTML = 0;
function addMove() {
    ++moves;
    if (moves % 2 === 0) {
        movesContainer.innerHTML = moves / 2;

    }


    // Set the rating
    rating();
}
//Rating

const starsContainer = document.querySelector(".stars");
const star = `<li><i class="fa fa-star"></i></li>`;
starsContainer.innerHTML = star + star + star;
function rating() {
    if (moves / 2 < 11) {
        starsContainer.innerHTML = star + star + star;
    } else if (moves / 2 < 17) {
        starsContainer.innerHTML = star + star;
    } else {
        starsContainer.innerHTML = star;
    }
}


// Time variables
let time = document.querySelector('.displayTime');
let startGame = 0;
let gameInterval;


//Timer function from https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
var done = false;
function timer() {
    if(done)
    return;
    let minutes = 0;
    let seconds = 0;
    gameInterval = setInterval(function () {
        seconds = parseInt(seconds, 10) + 1;
        minutes = parseInt(minutes, 10);
        if (seconds >= 60) {
            minutes += 1;
            seconds = 0;
        }

        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        time.innerHTML = minutes + ":" + seconds;
        lastTime.textContent = time.textContent;
    }, 1000);

    done = true;
}

