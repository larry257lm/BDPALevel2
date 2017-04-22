var cabbageMan = new MazeRunner.CabbageMan()

function decidePassword(prompt){
 if (prompt [0] > prompt [1])
	return (0)
else (prompt [1] > prompt [0])
	return (1)

}


function runLevel(){
cabbageMan.moveRight(2)
cabbageMan.calculatePassword("RIGHT", decidePassword);


}