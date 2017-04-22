var cabbageMan = new MazeRunner.CabbageMan()

function decidePassword(prompt){
 if(prompt * 2 + 1){ 
    return prompt * 2 + 1;
 } else { 
   return prompt * 2 + 1; 
 } 
}


function runLevel(){
cabbageMan.moveRight()
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(2)
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(16)
}