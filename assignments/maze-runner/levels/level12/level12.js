var cabbageMan = new MazeRunner.CabbageMan()

function decidePassword(prompt){
	   if(prompt == 1){ 
      return "ONE"; 
   } 
   if(prompt == 2){
      return "TWO"; 
   } 

    if(prompt == 3){
       return "THREE"; 
    }
}


function runLevel(){
cabbageMan.moveRight()
cabbageMan.moveDown(8)
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(7)
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(8)
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(2)
cabbageMan.moveUp(8)
cabbageMan.moveRight()
}