
// the game randomly shuffles the cards

let assigning = document.getElementsByClassName('assign');
// the potential images
let images = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
// continue this until no more potential images
var i = 0;
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
