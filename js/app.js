/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
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
document.addEventListener("DOMContentLoaded", start());
function start() {
    console.log('Game is started');
    createCards();
    cardClick();
}

// Rest button listener 
document.getElementById('restart').addEventListener('click', function () {
    restart();
});
// Rating star template
const starDiv = document.querySelector('.stars');
const finalstardiv = document.querySelector('.finalstars');
const finalstartemp = `<span class='fa fa-star'></span>`;
const startemp = `<li><i class="fa fa-star"></i></li>`;
starDiv.innerHTML = startemp + startemp + startemp;

let move = document.getElementById('moves');
let numMoves = 0;
let matchCounter = 0;

let openCards = [];

let spanTimer = document.querySelector(".timer");
let spanFinalTimer = document.querySelector(".finaltimer");
let spanFinalmove = document.querySelector('.finalMove');
let seconds = 0, minutes = 0, hours = 0, t;
let isFirstClick = true;


/* Main Logic of memory game  */
// Function to add a listner to cards , open two cards , cards compared  it if its match or unmatch
function cardClick() {
    allcard.forEach(function (el) {
        el.addEventListener('click', function () {
            const flip = event.target;
            console.log('Card click');
            // Start timer after first click
            if (isFirstClick) {
                
                timer();
                isFirstClick = false;
            }
            if (!el.classList.contains('open') && !el.classList.contains('show') && !el.classList.contains('match')) {

                if (openCards.length < 2) {
                    flip.classList.add('open', 'show');
                    openCards.push(flip);

                }
                if (openCards.length == 2) {
                    checkMatch();
                    const firstCard = openCards[0];
                    const SecCard = openCards[1];
                    openCards = [];

                    setTimeout(() => {
                        closeCard(firstCard, SecCard);
                    }, 1000);
                }
            }//--end if condition 

        });//--end function listner

    });

}
// function for remove class to the close the card
function closeCard(firstCard, SecCard) {
    firstCard.classList.remove('open', 'show');
    SecCard.classList.remove('open', 'show');
}
// function for adding class to matched card
function matched() {
    openCards.forEach(function (el) {
        el.classList.add('match');
        
    });
}
//functions for compares the opens card if they matched then run function matched and update the move counter and star rating
function checkMatch() {
    let cardOne = openCards[0].children[0].classList.toString();
    let cardTwo = openCards[1].children[0].classList.toString();
    if (cardOne == cardTwo) {
        matched();
        matchCounter++;
        console.log('matches');
        if (matchCounter == 8) {
            clearTimeout(t);
            console.log('sec' + seconds + 'min' + minutes)
            spanFinalTimer.textContent = (hours ? (hours > 9 ? hours : '0' + hours) : '00') + ':' + (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + ':' + (seconds > 9 ? seconds : '0' + seconds);
            document.querySelector('.message').classList.add('show');
            console.log('The game is finish')

        }
    }
    //increment the move counter
    incrmentMove();
}
// Increase move counter and update rating
function incrmentMove() {

    move.innerText = ++numMoves;
    spanFinalmove.textContent = numMoves;
    if (numMoves < 10) {
        starDiv.innerHTML = startemp + startemp + startemp;
        finalstardiv.innerHTML = finalstartemp + finalstartemp + finalstartemp;
    }
    else if (numMoves < 15) {
        starDiv.innerHTML = startemp + startemp;
        finalstardiv.innerHTML = finalstartemp + finalstartemp;
    }
    else {
        starDiv.innerHTML = startemp;
        finalstardiv.innerHTML = finalstartemp;
    }
}
// Creating suffled cards
function createCards() {
    let deck = document.getElementById('deck');
    deck.innerHTML = '';
    // List of all cards
    let cardIcon = ['fa fa-diamond', 'fa fa-diamond',
        'fa fa-paper-plane-o', 'fa fa-paper-plane-o',
        'fa fa-anchor', 'fa fa-anchor',
        'fa fa-bolt', 'fa fa-bolt',
        'fa fa-cube', 'fa fa-cube',
        'fa fa-leaf', 'fa fa-leaf',
        'fa fa-bicycle', 'fa fa-bicycle',
        'fa fa-bomb', 'fa fa-bomb'];
    let shuffledCard = shuffle(cardIcon);
    shuffledCard.forEach(function (el) {
        const Newcard = document.createElement('li');
        Newcard.classList.add('card');
        Newcard.innerHTML = `<i class="${el}"></i>`;
        deck.appendChild(Newcard);


    });
    allcard = document.querySelectorAll('.card');
    console.log('Cards Created');
}
// Timer function to calcluate time of playing
function timer() {
    t = setTimeout(function () {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }

        spanTimer.textContent = (hours ? (hours > 9 ? hours : '0' + hours) : '00') + ':' + (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + ':' + (seconds > 9 ? seconds : '0' + seconds);
        timer();
    }, 1000);
}
// Restart functions
function restart() {
    // Rest deck card
    openCards = [];
    console.log('Deck rested');
    // Rest Timer

    seconds = 0, minutes = 0, hours = 0, t;
    spanTimer.textContent = '00:00:00';
    isFirstClick = true;
    clearTimeout(t);
    console.log('Timer Rested');

    //Rest Moves
    move.innerText = '0';
    numMoves = 0;
    matchCounter = 0;

    //Rest rating star
    starDiv.innerHTML = startemp + startemp + startemp;
    document.querySelector('.message').classList.remove('show');
    start();
};