var global_message = "Hey, this works!";

function message_generator(message){
 console.log(message);
}

message_generator(global_message);

// color depositor

function clicked(){
  var paletteBoxes = document.querySelector(".palette").children;

  for(var i = 0; i < paletteBoxes.length; i++){
    if (paletteBoxes[i].id == event.target.id){
      paletteBoxes[i].classList.toggle("selected");
    }
    else{
      paletteBoxes[i].classList.remove("selected");
    }
  }

  //console.log(event.target.hasAttribute("selected"));

}

function colorDestination(){
  var paletteBox = document.querySelector(".selected");
  var paletteStyle = window.getComputedStyle(paletteBox);
  var paletteColor = paletteStyle.getPropertyValue("background-color");
  event.target.style.backgroundColor = paletteColor;
}

function colorClear(){
  event.target.style.backgroundColor = "#FFFFFF";
}
