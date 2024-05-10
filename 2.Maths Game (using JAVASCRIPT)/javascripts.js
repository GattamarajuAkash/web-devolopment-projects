var playing =false;
var score;
var action;
var timeremaining;
var correctAnswer;
document.getElementById("startreset").onclick=function(){
   if(playing == true){ 
       location.reload();  
   }else{
       //change mode to playing
       playing = true;
       score = 0;
       document.getElementById("scorevalue").innerHTML = score;
       
       //show container box
       show("timeremaining");
       timeremaining = 60;
       document.getElementById("timeremainingvalue").innerHTML = timeremaining;
       
       //hide gameover box
       hide("gameOver");
       
       
       //change button to reset
       document.getElementById("startreset").innerHTML = "Reset Game";
       
       //start countdown
       
       startcountdown();
       
       //generate question and multiple answers
       
       generateQA()
        
       
   }
    
    
}
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    if(playing == true){
       if(this.innerHTML == correctAnswer){
           
score++;
           document.getElementById("scorevalue").innerHTML = score;
           
           hide("wrong");
           show("correct");
           setTimeout(function(){
              hide("correct");
           }, 1000);
           
           generateQA();
          }else{
           hide("correct");
           show("wrong");
              setTimeout(function(){
              hide("wrong");
           }, 1000);
              
              
          }
       }
}
}
//functions
//start counter
function startcountdown(){
    action = setInterval(function(){
        timeremaining -= 1; 
        document.getElementById("timeremainingvalue").innerHTML = timeremaining; 
        if(timeremaining == 0){
           stopcountdown();
            show("gameOver");
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("gameOver").innerHTML = "<p>game over</p><p>your score is " + score + "</p>";
           hide("timeremaining");
           hide("correct");
           hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000)
    
}
//stop counter
function stopcountdown(){
    clearInterval(action);
}
//hides an elements
function hide(id){
    document.getElementById(id).style.display = "none";
    
}
//shoe an elements
function show(id){
    document.getElementById(id).style.display = "block";
}
 //GENERATE QUESTION AND ANSWERS

function generateQA(){
   var x = 1+ Math.round(9*Math.random()); 
    var y = 1+ Math.round(9*Math.random()); 
   correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
  var correctposition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctposition).innerHTML = correctAnswer;//fill one box with the correct answer
    
    //fill other boxes with wrong answers
    
    var answers=[correctAnswer];
    
    for(i=1; i<5; i++){
        if(i !== correctposition){
            var wrongAnswer;
          do{
                  wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));//wrongAnswer
                 }  
            while(answers.indexOf(wrongAnswer)>-1)
                document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
    
}