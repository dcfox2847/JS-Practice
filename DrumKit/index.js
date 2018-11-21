
var keys = ["w","a","s","d","j","k","l"];

var buttonArray = document.querySelectorAll(".drum");

for (i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener("click", function() {
    var key = this.innerHTML;
    makeSound(key);
    animate(key);
  })
}

document.addEventListener("keypress", function(event) {
  console.log(event);
  if(keys.includes(event.key)){
    makeSound(event.key);
    animate(event.key)
  }
});

function makeSound(key){
  switch(key){
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default: console.log("unexpected value: " + key);
  }
}

function animate(key){
  var currentKey = document.querySelector("." + key);
  currentKey.classList.add("pressed");
  setTimeout(function(){
    currentKey.classList.remove("pressed");
  }, 100);
}

function change(){
  document.getElementById("title").style.color = "blue";
}

document.querySelector("button").addEventListener("click", changeToPurple);

function changeToPurple(){
  var h1 = document.querySelector("h1"); //SELECT
  h1.style.color = "purple"; //MANIPULATE
}
