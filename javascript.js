
// the game randomly shuffles the cards
let assigning = document.getElementsByClassName('assign');
// the potential images
let images = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
// continue this until no more potential images
let i = 0;
while (images.length > 0) {
  // get a random index from the images array
  let index = Math.floor(Math.random() * images.length);
  //assign that image to assigning array
  assigning[i].src = 'images/number' + images[index] + '.gif';
  assigning[i].alt = assigning[i].src;
  // remove that index from the array
  images.splice(index,1);
  i++;
}



let imageTags = document.querySelectorAll('img');
let remover = document.querySelectorAll('.grey');
// let remover = document.getElementsByClassName("grey");
let assigned = document.querySelector('.assign');


// const nodelist = document.querySelectorAll('img');
// const nodelistToArray = Array.apply(null, nodelist);

// ES 2015 spread const nodelist = [...document.querySelectorAll('img')];

/*
const arrayify = Array.from(imageTags);
arrayify.forEach(function(elements) {
console.log(elements.src)
});
*/

// let card1Array = assigning[0].src.split("/");
// let card1 = card1Array[card1Array.length -1];

/*  gucci = event.srcElement.src;
gucci1 = gucci.split("/");
console.log(gucci1[gucci1.length -1]);
gucci2 = gucci1[gucci1.length -1];
return gucci2; */

let compareThem = [];

const gameBoard = document.querySelector('.gameboard');
n = 2;
gameBoard.addEventListener( 'click', function (event){
  if (n === 2) {
    let firstClick = event.target;
    firstClick.classList.remove('grey');
    n--;
  }
  else if (n === 1) {
    let secondClick = event.target;
    secondClick.classList.remove('grey');
    if (event.target.src === firstClick.src) {
      n = 2;
      firstClick.stopPropagation();
      secondClick.stopPropagation();
      return n;
    }
    else {
      function firstClickDelay() {
        firstClick.classList.add('grey');
      }
      function secondClickDelay() {
        secondClick.classList.add('grey');
      }
      setTimeout(firstClickDelay, 500);
      setTimeout(secondClickDelay, 500);
      n = 2;
      return n;
    }
  }
});
