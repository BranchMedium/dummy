
let numSlides // myslides array index number
let answer // class name value
let numSl // division
let stopIt // stop sliding
let dont // stop doing the sliding
let mainObject = document.getElementById("you");
// class values stored in an array
let myslides = [
    "A1.png", "A2.png", "A3.png", "A4.png", "A5.png", "A6.png", 
    "A7.png", "A8.png", "A9.png", "A10.png", "A11.png", "A12.png", 
    "A13.png", "A14.png", "A15.png", "A16.png", "A17.png", "A18.png", 
    "A19.png", "A20.png", "A21.png", "A22.png"
]
// this function gives random value to select any key
numSl = 0;
function numberingSlides() {  
    numSlides = numSl;
    
    if(numSl == myslides.length){
        --numSl
    }
    return numSlides;  
}
function alignment() {
    let vertical = [
        "A1.png", "A9.png", "A16.png", "A17.png", "A21.png", "A22.png"
    ];
    if (vertical.includes(answer)) {
       return "vertical"
    }
    else {
        return "horizontal"
    }
}
//this create the slides 
function slideIt() {
    numberingSlides();
    answer = myslides[numSlides];
    numSl++;
    mainObject.src = answer.toString();
    let changeAlignment = alignment();
    mainObject.className = changeAlignment;
}



//this function set the background picture to slide one another
function action() {
    dont = setInterval(slideIt, 6000);
    return dont
}
// this stops the setinterval by calling the clearInterval
function stop() {
    return clearInterval(dont);
}



//***************************************************** */



