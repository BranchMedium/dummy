
let numSlide // myslides array index number
let answe // class name value
let numS // division
let stopI // stop sliding
let don // stop doing the sliding
let mainObjec = document.getElementById("me");
// class values stored in an array
let myslide = ["A1.png", "A9.png", "A16.png", "A17.png", "A21.png", "A22.png", "A23.png"]
// this function gives random value to select any key
numS = 0;
function numberingSlide() {  
    numSlide = numS;
    
    if(numS == myslide.length){
        --numS
    }
    return numSlide;  
}

//this create the slides 
function slideI() {
    numberingSlide();
    answe = myslide[numSlide];
    numS++;
    mainObjec.src = answe.toString();
}

//this function set the background picture to slide one another
function actio() {
    don = setInterval(slideI, 1000);
    return don
}
// this stops the setinterval by calling the clearInterval
function sto() {
    return clearInterval(don);
}



//***************************************************** */



