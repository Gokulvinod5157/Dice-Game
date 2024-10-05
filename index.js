
if (sessionStorage.getItem("refreshed") === null) {
  // This is the first load, set h1 to "Refresh Me" and set the storage value
  document.querySelector("h1").innerHTML = "Refresh Me";
  sessionStorage.setItem("refreshed", "true");
} else {
  var randomNumber1= Math.floor(Math.random()*6) +1;// number between 1-6

  var randomImage1 = "dice" + randomNumber1 + ".png"; // dice1.png to dice6.png

  var randomImagePath1 = "Images/" + randomImage1; // Images/dice1.png to Images/dice6.png

  document.querySelectorAll("img")[0].setAttribute("src", randomImagePath1 );


  var randomNumber2= Math.floor(Math.random()*6) +1;

  var randomImage2 = "dice" + randomNumber2 + ".png";

  var randomImagePath2 = "Images/" + randomImage2;

  document.querySelectorAll("img")[1].setAttribute("src", randomImagePath2 );

  document.querySelector("H1").innerHTML="Refresh Me";


  if (randomNumber1 === randomNumber2){
    document.querySelector("H1").innerHTML="Its a Draw";
  }
  else if(randomNumber1 > randomNumber2){
    document.querySelector("H1").innerHTML="Player 1 Wins! ";
  }
  else{
    document.querySelector("H1").innerHTML="Player2 Wins! ";
  }
}

