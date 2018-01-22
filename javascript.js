let assigning = document.getElementsByClassName('assign');
let numofMoves = 0; //keeps track of how many clicks on a panel
const moveDiv = document.getElementById('moves'); // for numofMoves
const gameBoard = document.querySelector('.gameboard'); // for prada3 function
let n = 2; // keeps track of which event phase the function prada3 is on
let firstClick; //firstClick's event target information needs to change dynamically
let secondClick; //secondClick same as firstClick
let replayBtn = document.querySelector('#replay');

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
    assigning[i].alt = assigning[i].src;
    // remove that index from the array
    images.splice(index,1);
    i++;
  }
  numofMoves = -1;
  addMove();
}
document.onload = shuffleDeck();

// function which keeps track of the number of clicks the player has made
function addMove() {
  numofMoves++;
  moveDiv.innerHTML = numofMoves + " Moves";
}
// This will make it so if two pairs of images are out on the field, there classes will add grey back to them if replay is clicked
function checkGrey() {
  n=2;
  for (let z=1;z < 16; z++) {
    let imgNum = document.getElementById('img' + [z]);
    if (imgNum.classList.contains('grey')) {
    }
    else {
      imgNum.classList.add('grey');
    }
  }
}
// Function to check if two images match
function prada3(event){
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
  }
  else if (n === 1) {

    secondClick = event.target;
    secondClick.classList.remove('grey'); //second click data and removes the grey from it
    n = 0;
    if (event.target.src === firstClick.src) {
      addMove();
      n = 2; // if they are equal they stay open and next two cards are ready to be clicked
    }
    else {
      function ClickDelay() { //will show you that they dont match and then add back the grey foreground
        firstClick.classList.add('grey');
        secondClick.classList.add('grey');
        n = 2;
        addMove();
      }
      setTimeout(ClickDelay, 500); // slight delay will show you that the images arent matching
    }
  }
}


gameBoard.addEventListener('click', prada3); //take the above function and apply it to happen when a click is done
replayBtn.addEventListener('click', shuffleDeck); // replay button shuffles the deck





// Older strategies which didnt work

// let assigned = document.querySelector('.assign');
// let remover = document.querySelectorAll('.grey');
// let remover = document.getElementsByClassName("grey");
// let imageTags = document.querySelectorAll('img');
// const nodelist = document.querySelectorAll('img');
// const nodelistToArray = Array.apply(null, nodelist);
// ES 2015 spread const nodelist = [...document.querySelectorAll('img')];
/* const arrayify = Array.from(imageTags);
arrayify.forEach(function(elements) {
console.log(elements.src)
}); */
// let card1Array = assigning[0].src.split("/");
// let card1 = card1Array[card1Array.length -1];
/*  gucci = event.srcElement.src;
gucci1 = gucci.split("/");
gucci2 = gucci1[gucci1.length -1];
*/
