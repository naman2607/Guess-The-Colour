var numSquares=6;
var colors = generateRandomColors(numSquares);

var square= document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay= document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.querySelector("#message");
var h1 =document.querySelector("h1");
var resetBUTTON=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected"); 
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<square.length;i++)
    {
        if(colors[i])
        {
            square[i].style.background=colors[i];
        }
        else{
            square[i].style.display="none";
        }
    }

});
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<square.length;i++)
    {
        if(colors[i])
        {
            square[i].style.background=colors[i];
            square[i].style.display="block";
        }
    } 
});

resetBUTTON.addEventListener("click",function(){

    //generate all new color
    colors=generateRandomColors(6);
    //pick a new random color from array
    pickedColor=pickColor();
    // change color display to matched picked color
    colorDisplay.textContent=pickedColor;
    this.textContent="New Color"
    messageDisplay.textContent="";
    //change color of squares
    for(var i=0;i<square.length;i++)
    {
            square[i].style.background=colors[i];
    }
h1.style.background="steelblue";
});


for(var i=0;i<square.length;i++)
{
    // add color to square
    square[i].style.background = colors[i];
    
     // add click listner
    square[i].addEventListener("click",function(){
        // grab color of clicked color
    var clickedColor=this.style.background;
    //compare color to picked color
    if(clickedColor==pickedColor)
    {
        messageDisplay.textContent="CORRECT!";
        resetBUTTON.textContent="PLAY AGAIN ?";
        changeColors(clickedColor);
        h1.style.background=clickedColor;
    }
    else
    {
    this.style.background="#232323";
    messageDisplay.textContent="TRY AGAIN";
    }
});
}
// change all color of square to right color
function changeColors(color){

    for(var i=0;i<square.length;i++)
    {
        square[i].style.background=color;
    }
}
 
function pickColor(){
    // to generate random color every time
    var random= Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
// make an array;
var arr=[];
    for( var i=0;i<num;i++)
    {
        // get random colors and push them to the array arr
        arr.push(RandomColors());
    }
    // return that array
    return arr;
}

function RandomColors(){
     // pick a "red " from 0-255
     var r= Math.floor(Math.random()*256);
    // pick a "green " from 0-255
     var g= Math.floor(Math.random()*256);
   // pick a "blue" from 0-255
    var b= Math.floor(Math.random()*256);

return "rgb(" + r + ", " + g + ", " + b + ")";

}