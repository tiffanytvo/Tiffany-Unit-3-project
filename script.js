/* Declare variables below to save the different sections (divs) of your story*/
let body=document.querySelector("body")
let title = document.querySelector(".title")
let start = document.querySelector (".start")
let key = document.querySelector(".key")
let opening = document.querySelector(".opening-screen")
let button1 = document.querySelector(".option-one")
let button2 = document.querySelector(".option-two")
let screen1 = document.querySelector(".option-one-screen")
let screen2 = document.querySelector(".option-two-screen")
let hammer = document.querySelector(".hammer")
let obtainHammer = document.querySelector(".hammer-time")
let screen1Cont = document.querySelector(".option-one-continue")
let button1A = document.querySelector(".option-1A")
let button1B = document.querySelector(".option-1B")
let screen1A = document.querySelector(".option-1A-screen")
let screen1B = document.querySelector(".option-1B-screen")
let door = document.querySelector(".door")
let end1 = document.querySelector(".option-one-end")
let end2 = document.querySelector(".option-two-end")
let hallway = document.querySelector(".hallway")
let silly = document.querySelector(".silly-text")
let tryAgain1 = document.querySelector(".try-again-1")
let tryAgain2 = document.querySelector(".try-again-2")
let tryAgain3 = document.querySelector(".try-again-3")
//Route 1//
key.onclick = function() {
  opening.style.display = "block";
title.style.display="none";
  start.style.display="none";
};
button1.onclick=function(){
  screen1.style.display = "block";
opening.style.display = "none";
  key.style.display=  "none";
};

hammer.onclick=function(){
obtainHammer.innerHTML="+1 Hammer";
screen1Cont.style.display = "block";
  
};

button1A.onclick=function(){
  screen1A.style.display="block";
  screen1Cont.style.display = "none";
  hammer.style.display = "none";
  obtainHammer.style.display = "none";
}

door.onclick=function(){
  end1.style.display="block";
  screen1A.style.display = "none";
}

tryAgain2.onclick=function(){
  end1.style.display = "none";
  title.style.display="block";
  start.style.display="block";
  key.style.display="block";
}

button1B.onclick=function(){
  screen1B.style.display="block";
  screen1Cont.style.display = "none";
  hammer.style.display = "none";
  obtainHammer.style.display = "none";
}

tryAgain1.onclick=function(){
  screen1B.style.display="none";
  title.style.display="block";
  start.style.display="block";
  key.style.display="block";
}

//Route 2//
button2.onclick=function(){
  screen2.style.display="block";
  opening.style.display = "none";
  key.style.display=  "none";
}
hallway.onclick=function(){
  silly.style.display="block";
}

body.onkeydown=function(){
  end2.style.display="block";
  screen2.style.display = "none";
  hallway.style.display = "none";
  silly.style.display = "none";
}

tryAgain3.onclick=function(){
  end2.style.display="none";
  title.style.display="block";
  start.style.display="block";
  key.style.display="block";
   
}
