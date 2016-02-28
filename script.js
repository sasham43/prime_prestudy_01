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

  console.log(event.target.hasAttribute("selected"));

}


var paletteBoxes = document.querySelectorAll(".box");

console.log(paletteBoxes);


// for(var i=0; i<paletteBoxes.length; i++){
//   console.log(paletteBoxes[i].classList)
// }

//stupid jquery
// $('.palette').click(function(event){
//   alert(event.target.id);
// })
