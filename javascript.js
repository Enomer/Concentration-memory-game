function randomImg() {
  let assigning = document.getElementsByClassName('assign');

  /* one possible method for assigning images

  for (var i = 0; i < assigning.length; i++) {
  if (assigning.img.src === "") {
  let num = Math.floor(Math.random() * 8 + 1);
  assigning[i].src = 'images/number' + num + '.gif';
  assigning[i].alt = assigning[i].src;
}
}
}*/

// the potential images
let images = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

// continue this until no more potential images
while (images.length > 0) {

  // get a random index from the images array
  let index = Math.floor(Math.random()*images.length));

  //assign that image to assigning array
  assigning[i].src = 'images/number' + images[index] + '.gif';
  assigning[i].alt = assigning[i].src;

  // remove that index from the array

  images.splice(i,1);
}
}

let starBtn = document.querySelector('button');

startBtn.addEventListener('click', function randomImg() {
  console.log("gucci")
}

);
