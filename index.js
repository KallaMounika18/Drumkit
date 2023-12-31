var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "d":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;

    case "r":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;

    case "u":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;

    case "m":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;

    case "i":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;

    case "t":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 2);
}
