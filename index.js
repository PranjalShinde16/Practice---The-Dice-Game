function player1wins(firstnum, secnum) {
  var link1 = "images/" + firstnum + ".png";
  var link2 = "images/" + secnum + ".png";
  document.querySelector(".refreshme").textContent = "🚩Player 1 wins";
  document.querySelector(".dice-image1").setAttribute("src", link1);
  document.querySelector(".dice-image2").setAttribute("src", link2);
}

function player2wins(firstnum, secnum) {
  var link1 = "images/" + firstnum + ".png";
  var link2 = "images/" + secnum + ".png";
  document.querySelector(".refreshme").textContent = "Player 2 wins🚩󠁧󠁢󠁷󠁬󠁳";
  document.querySelector(".dice-image1").setAttribute("src", link1);
  document.querySelector(".dice-image2").setAttribute("src", link2);
}

function itsatie(firstnum) {
  var link1 = "images/" + firstnum + ".png";
  document.querySelector(".refreshme").textContent = "Ooops! Its a tie";
  document.querySelector(".dice-image1").setAttribute("src", link1);
  document.querySelector(".dice-image2").setAttribute("src", link1);
}

//<img src="images/1.png" alt="player1" class="dice-image1">
//<img src="images/1.png" alt="player2" class="dice-image2">

function myFunction() {
  var firstnum;
  var secnum;
  firstnum = Math.floor((Math.random() * 6) + 1);
  secnum = Math.floor((Math.random() * 6) + 1);
  if (firstnum > secnum) {
    player1wins(firstnum, secnum);
  } else if (secnum > firstnum) {
    player2wins(firstnum, secnum);
  } else {
    itsatie(firstnum);
  }
}
