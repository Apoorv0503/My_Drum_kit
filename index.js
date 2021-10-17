var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//-----------------adding addEventListener for mouse clicks on drum's virtual images-------------------
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var innerHTML=this.innerHTML;
    mySound(innerHTML);
    buttonAnimation(innerHTML);
  //  console.log(this.innerHTML);
});

}



//---------------------adding addEventListener for keyboard keys--------------------------

//for (var i = 0; i < numberOfDrumButtons; i++) {
//object.addEventListener("keydown", myScript);
  document.addEventListener("keydown", function(event){
    var keySound=event.key;
    mySound(keySound);
  //  console.log(this.innerHTML);
    buttonAnimation(event.key);
  //  buttonAnimation(currentKey)
});

//}
//---------------------------selection of audio file according to the key pressed---------------
  function mySound(tappedKey){
    switch (tappedKey) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
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


      default: console.log(key);

    }
  }

  //----------------------------adding animation to buttons---------------------------------------
 function buttonAnimation(currentKey)
  {
    var activeButton= document.queryselector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
  }
