var cabbageMan = new MazeRunner.CabbageMan()

function decidePassword(prompt){
 if (prompt % 2)
	return (false)
else (prompt % 1)
	return (true)

}

function runLevel(){
cabbageMan.moveRight(3)
cabbageMan.moveDown(8)
cabbageMan.moveRight(3)
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(4)
cabbageMan.calculatePassword("RIGHT", decidePassword);
cabbageMan.moveRight(8)
cabbageMan.moveUp(8)
cabbageMan.moveRight()
}