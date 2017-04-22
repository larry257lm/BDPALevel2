var cabbageMan = new MazeRunner.CabbageMan()

function decidePassword(prompt){
 if (prompt % 2)
	return (prompt + 1)
else (prompt % 1)
	return (prompt)

}

function runLevel(){
cabbageMan.moveRight()
cabbageMan.calculatePassword("UP", decidePassword);
cabbageMan.moveUp(2)
cabbageMan.calculatePassword("UP", decidePassword);
cabbageMan.moveUp(2)
cabbageMan.calculatePassword("UP", decidePassword);
cabbageMan.moveUp(2)
cabbageMan.calculatePassword("UP", decidePassword);
cabbageMan.moveUp()
cabbageMan.moveRight(17)
cabbageMan.moveDown(7)
cabbageMan.moveRight()
}