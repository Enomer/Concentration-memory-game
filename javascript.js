
// the game randomly shuffles the cards
let assigning = document.getElementsByClassName('assign');
// the potential images
let images = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
// continue this until no more potential images
let i = 0;
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


// Code to check if two images match
const gameBoard = document.querySelector('.gameboard');
let n = 2;
let firstClick;
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
    console.log(firstClick);
  }
  else if (n === 1) {
    let secondClick = event.target;
    secondClick.classList.remove('grey'); //second click data and removes the grey from it
    n = 0;
    if (event.target.src === firstClick.src) {
      n = 2; // if they are equal they stay open and next two cards are ready to be clicked
    }
    else {
      function ClickDelay() { //will show you that they dont match and then add back the grey foreground
        firstClick.classList.add('grey');
        secondClick.classList.add('grey');
        n = 2;
      }
      setTimeout(ClickDelay, 500); // slight delay will show you that the images arent matching
    }
  }
}
gameBoard.addEventListener('click', prada3); //take the above function and apply it to happen when a click is done



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
console.log(gucci1[gucci1.length -1]);
gucci2 = gucci1[gucci1.length -1];
return gucci2; */
