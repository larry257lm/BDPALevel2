var cabbageMan = new MazeRunner.CabbageMan()

function decidePassword(prompt){
	   if(prompt == "RED"){ 
      return "DER"; 
   } 
   if(prompt == "CYAN"){
      return "NAYC"; 
   } 

    if(prompt == "BLUE"){
       return "EULB"; 
    }
	
	if(prompt == "GRAY"){
		return "YARG";
	}
	
	if(prompt == "PINK"){
		return "KNIP"
	}
}


function runLevel(){
cabbageMan.moveRight(2)
cabbageMan.moveUp()
cabbageMan.calculatePassword("UP", decidePassword);
cabbageMan.moveUp()
cabbageMan.moveRight()
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(4)
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(4)
cabbageMan.calculatePassword("DOWN", decidePassword);
cabbageMan.moveDown()
cabbageMan.moveRight(2)
cabbageMan.moveDown()
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(6)
}