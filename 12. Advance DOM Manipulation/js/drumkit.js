var wButton = document.querySelector(".w-button");
var aButton = document.querySelector(".a-button");
var sButton = document.querySelector(".s-button");
var dButton = document.querySelector(".d-button");
var jButton = document.querySelector(".j-button");
var kButton = document.querySelector(".k-button");
var lButton = document.querySelector(".l-button");





wButton.addEventListener("mousedown", function(){
    playSound("tom1");
    wButton.classList.add("pressed");
});

wButton.addEventListener("mouseup", function(){
    wButton.classList.remove("pressed");
});

aButton.addEventListener("mousedown", function(){
    playSound("tom2");
    aButton.classList.add("pressed");
});

aButton.addEventListener("mouseup", function(){
    aButton.classList.remove("pressed");
});

sButton.addEventListener("mousedown", function(){
    playSound("tom3");
    sButton.classList.add("pressed");
});

sButton.addEventListener("mouseup", function(){
    sButton.classList.remove("pressed");
});



dButton.addEventListener("mousedown", function(){
    playSound("tom4");
    dButton.classList.add("pressed");
});

dButton.addEventListener("mouseup", function(){
    dButton.classList.remove("pressed");
});

jButton.addEventListener("mousedown", function(){
    playSound("snare");
    jButton.classList.add("pressed");
});

jButton.addEventListener("mouseup", function(){
    jButton.classList.remove("pressed");
});


kButton.addEventListener("mousedown", function(){
    playSound("crash");
    kButton.classList.add("pressed");
});

kButton.addEventListener("mouseup", function(){
    kButton.classList.remove("pressed");
});


lButton.addEventListener("mousedown", function(){
    playSound("kick");
    lButton.classList.add("pressed");
});

lButton.addEventListener("mouseup", function(){
    lButton.classList.remove("pressed");
});







function playSound(sound){
    if(sound == "tom1"){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play()
    }

    if(sound == "tom2"){
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play()
    }

    if(sound == "tom3"){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play()
    }

    if(sound == "tom4"){
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play()
    }

    if(sound == "snare"){
        var audio = new Audio('sounds/snare.mp3');
        audio.play()
    }

    if(sound == "crash"){
        var audio = new Audio('sounds/crash.mp3');
        audio.play()
    }

    if(sound == "kick"){
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play()
    }
  
}

window.onkeydown = function(event) {
    if (event.keyCode === 87) { //w
        this.playSound("tom1"); 
        wButton.classList.add("pressed");
    }
    if (event.keyCode === 65) { //a
        this.playSound("tom2");
        aButton.classList.add("pressed");
    }
    if (event.keyCode === 83) { //s
        this.playSound("tom3");
        sButton.classList.add("pressed");
    }
    if (event.keyCode === 68) { //d
        this.playSound("tom4");
        dButton.classList.add("pressed");
    }
    if (event.keyCode === 74) { //j
        this.playSound("snare");
        jButton.classList.add("pressed");
    }
    if (event.keyCode === 75) { //k
        this.playSound("crash");
        kButton.classList.add("pressed");
    }
    
    if (event.keyCode === 76) { //l
        this.playSound("kick");
        lButton.classList.add("pressed");
    }

 };

 window.onkeyup = function(event){
    if (event.keyCode === 87) { //w
        wButton.classList.remove("pressed");
    }
    if (event.keyCode === 65) { //a
        aButton.classList.remove("pressed");
    }
    if (event.keyCode === 83) { //s
        sButton.classList.remove("pressed");
    }
    if (event.keyCode === 68) { //d
        dButton.classList.remove("pressed");
    }
    if (event.keyCode === 74) { //j
        jButton.classList.remove("pressed");
    }
    if (event.keyCode === 75) { //k
        kButton.classList.remove("pressed");
    }
    
    if (event.keyCode === 76) { //l
        lButton.classList.remove("pressed");
    }
 }

