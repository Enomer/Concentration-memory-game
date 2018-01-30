let assigning = document.getElementsByClassName('assign');
let numofMoves = 0; //keeps track of how many clicks on a panel
const moveDiv = document.getElementById('moves'); // for numofMoves
const gameBoard = document.querySelector('.gameboard'); // for prada3 function
const headingItems = document.querySelector('#starsnmoves');
let n = 2; // keeps track of which event phase the function prada3 is on
let firstClick; //firstClick's event target information needs to change dynamically
let secondClick; //secondClick same as firstClick
let replayBtn = document.querySelector('#replay');
let star3 = document.getElementById('innerStar2'); // rightmost star
let star2 = document.getElementById('innerStar1'); // middle star
let success = 0; // tracks how many classes dont contain grey
let animFirst; // this will add the animated class from animated.css plugin to the firstClick event.target.classList
let flipFirst; // this will add the flip to firstClick
let animSecond; // this will add the animated class from animated.css plugin to the SecondClick event.target.classList
let flipSecond; // this swill add the flip to secondClick
let seconds = 0, minutes = 0, hours = 0;
let isClicked = false; // starts the timer
let node;
let nIntervId; // this will stop the timer when you win

function gucci6(){replayBtn.classList.remove('rotateIn');} //delays the removal so animation can complete
function gucci5(logoTitle, sizing) { //Plays out animated header with whateevr font size is input
  let o = document.getElementById("logo").querySelectorAll("text");
  if (o.length > 0) {
    o[0].remove();
  }
  let l = Snap('#logo'); //uses snap.svg to generate a snap on logo id
  setTimeout( function() {
    //let logoTitle = 'Concentration!';
    let logoRandom = '';
    let logoTitleContainer = l.text(0, '75%', );
    let possible = "-+/|}-_(*&^%$#){[]~\\\":;?^%$#){[]/.*><=+@!)}";
    logoTitleContainer.attr({
      fontSize: sizing,
      fontFamily: 'Dosis',
      fontWeight: '600'
    });

    function generateRandomTitle(i, logoRandom) {
      setTimeout( function() {
        logoTitleContainer.attr({ text: logoRandom });
      }, i*70 );
    }

    for( let i=0; i < logoTitle.length+1; i++ ) { // nested for loop to randomly select digits which change before concentration text
      logoRandom = logoTitle.substr(0, i);
      for( let j=i; j < logoTitle.length; j++ ) {
        logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      generateRandomTitle(i, logoRandom);
      logoRandom = '';
    }
  }, 500 );
}


// the game randomly shuffles the cards
function shuffleDeck() {
  // continue this until no more potential images
  let i = 0;
  // the potential images
  let images = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  while (images.length > 0) {
    // get a random index from the images array
    let index = Math.floor(Math.random() * images.length);
    //assign that image to assigning array(images all numbered number1-8)
    assigning[i].src = 'images/number' + images[index] + '.gif';
    // remove that index from the array
    images.splice(index,1);
    i++;
  }
  numofMoves = -1;
  addMove();
  star3.style.fill = "#333";
  star2.style.fill = "#333";
  gameboard.style.display = "grid";
  success=0;
  star3.classList.remove('bounceOut');
  star2.classList.remove('bounceOut');
  setTimeout(gucci6, 800);
}




// function which keeps track of the number of clicks the player has made
function addMove() {
  numofMoves++;
  moveDiv.innerHTML = numofMoves + " Moves";
}
function starRating() {
  if (numofMoves === 15) {
    star3.classList.add('bounceOut');
  }
  else if (numofMoves === 20) {
    star2.classList.add('bounceOut');
  }
  else if (numofMoves > 25) {
    star1.classList.add('bounceOut');
  }
}

function youWin(){
  if (success === 8){ // This will mark the completion of the game
    clearInterval(nIntervId);
    isClicked = false;
    gameboard.style.display = "none";
    gucci5('Congratulations!','4.3em');
  }
}


// This will make it so if two pairs of images are out on the field, there classes will add grey back to them if replay is clicked
function checkGrey() {
  node.remove();
  clearInterval(nIntervId);
  isClicked = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  createTimer();
  gucci5('Concentration!', '4.8em');
  n=2;
  for (let z=1;z < 17; z++) {
    let imgNum = document.getElementById('img' + [z]);
    if (imgNum.classList.contains('grey') === false) {
      imgNum.classList.add('grey');
      imgNum.classList.remove('animated');
      imgNum.classList.remove('rubberBand');
    }
  }
}
// Function to check if two images match
function prada3(event){
  starRating();
  if (event.target.classList.contains('grey') === false) {
    return // prevents an image from being clicked if the two cards matched
  }
  if (n === 0) {
    return //prevents anything fromt happening while 2 images are checking for match
  }
  if (n === 2) {
    firstClick = event.target;
    firstClick.classList.remove('grey'); //removes grey from first image clicked and saves its data
    n--;
    animFirst=firstClick.classList;
    flipFirst = firstClick.classList;
    animFirst.add('animated');
    flipFirst.add('flipInY');
  }

  else if (n === 1) {
    secondClick = event.target;
    animSecond = secondClick.classList;
    flipSecond = secondClick.classList;
    secondClick.classList.remove('grey'); //second click data and removes the grey from it
    n = 0;
    if (event.target.src === firstClick.src) {
      success++;
      addMove();
      n = 2; // if they are equal they stay open and next two cards are ready to be clicked
      setTimeout(youWin, 600)
      flipFirst.remove('flipInY');
      animFirst.add('animated');
      flipFirst.add('rubberBand');
      animSecond.add('animated');
      flipSecond.add('rubberBand');
    }
    else {
      flipFirst.remove('flipInY');
      flipFirst.add('wobble');
      animSecond.add('animated');
      flipSecond.add('wobble');
      function ClickDelay() { //will show you that they dont match and then add back the grey foreground
        firstClick.classList.add('grey');
        secondClick.classList.add('grey');
        animFirst.remove('animated');
        flipFirst.remove('flipInY');
        flipFirst.remove('wobble')
        animSecond.remove('animated');
        flipSecond.remove('wobble');
        n = 2;
        addMove();
      }
      setTimeout(ClickDelay, 800); // slight delay will show you that the images arent matching
    }
  }
}

gameBoard.addEventListener('click', prada3); //take the above function and apply it to happen when a click is done
replayBtn.addEventListener('click', function(){
  replayBtn.classList.add('rotateIn');
})
replayBtn.addEventListener('click', shuffleDeck); // replay button shuffles the deck

function createTimer() {
node = document.createElement('h2');
node.setAttribute("id", "timer");
node.classList.add('animated');
node.classList.add('fadeIn');
headingItems.appendChild(node);
node.textContent = 'Time elapsed: ' + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
}

function add() { // add the amount of time
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  node.textContent = 'Time elapsed: ' + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
}

Array.from(assigning).forEach(function(element) {
  element.addEventListener('click', function() {
    if (isClicked === false) {
      isClicked = true;
      nIntervId = setInterval(function timer() {
        add();
      }, 1000);
    }
  });
});



document.onload = shuffleDeck();
window.onload = function() {
  gucci5('Concentration!', '4.8em');
  createTimer();
}
