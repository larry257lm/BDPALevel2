var cabbageMan = new MazeRunner.CabbageMan()

function decidePassword(prompt){
 
 return ((prompt + 1) / 2)
}

function runLevel(){
cabbageMan.moveRight()
cabbageMan.moveUp(9)
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(5)
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(5)
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(5)
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(2)
cabbageMan.moveDown(9)
cabbageMan.moveRight()
}