// summary: making a game where you have to 
//get a certain amount of clicks to before time runs out



// making a ball appear on click
function addBall(){
  var ball = document.createElement("section")
  document.getElementById("demo").appendChild(ball) 
  decreaseCount(ball)
 }
// counting clicks to bring down the total
var count = 30;
 var clicker = count 
 function decreaseCount(ball){
   count--
   document.getElementById("clicksLeft").innerHTML=count + "clicks left"
}
//creating a 30 second timer
var timeLeft = 30;
var timeDecrease = setInterval(timer, 1000);
function timer(){
  timeLeft--;
  if(timeLeft <= 0){
    clearInterval(timeDecrease)
    return;
  }
  document.getElementById("timer").innerHTML=timeLeft + " secs";
}
//creating a function to see if all the 
//clicks equal zero before the time runs out

  if(timeLeft > count){
    alert('you won!')
  }
