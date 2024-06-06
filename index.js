// code for click on the buttons in screen via mouse.
let docTitle = document.title;
window.addEventListener("blur", ()=>{
    document.title = " Drum nhi bajana bhai :)          ";
})
window.addEventListener("focus", ()=>{
    document.title = docTitle;
})

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
       makesound(this.innerHTML);
       buttonanimation(this.innerHTML);
    });
}

// code for detection of the pressed key.
document.addEventListener("keydown", function(buttonPressed){
    //button pressed ki value is got via key func.
    makesound(buttonPressed.key);
    buttonanimation(buttonPressed.key);
});

function makesound(event){
    switch(event){
        case "w":
            new Audio("./sounds/tom-1.mp3").play();
        break;

        case "a":
            new Audio("./sounds/tom-2.mp3").play();
        break;

        case "s":
            new Audio("./sounds/tom-3.mp3").play();
        break;

        case "d":
            new Audio("./sounds/tom-4.mp3").play();
        break;

        case "j":
            new Audio("./sounds/snare.mp3").play();
        break;

        case "k":
            new Audio("./sounds/crash.mp3").play();
        break;

        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
        break;

        default: console.log(this.innerHTML);
    }
}

function buttonanimation(event){
    document.querySelector("." + event).classList.add("pressed");

    setTimeout(function(){
    document.querySelector("." + event).classList.remove("pressed");
    }, 100);
}