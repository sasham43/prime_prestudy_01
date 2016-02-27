var global_message = "Hey, this works!";

function message_generator(message){
 console.log(message);
}

message_generator(global_message);

// color depositor

function clicked(id){
  document.querySelector(id).classList.toggle("selected");
}
