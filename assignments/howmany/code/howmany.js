function doLevel1(){
	var answer = prompt("What is the answer?"); 
	if(answer=="satalite"){
		alert ('correct') 
		addPoints(10) 
	} else {
		alert("incorrect"); 
	}
	hide("level1");
	show("level2");
}
function doLevel2(){
	var answer = prompt("What is the answer?"); 
	if(answer=="9001"){
		alert ('correct') 
		addPoints(10) 
	} else {
		alert("incorrect"); 
	}
	hide("level2");
	show("level3");
	
}
function doLevel3(){
	var answer = prompt("What is the answer?"); 
	if(answer=="true"){
		alert ('correct') 
		addPoints(10) 
	} else {
		alert("incorrect"); 
	}
	hide("level3");
}
function show(id){
	var el = document.getElementById(id);
	el.classList.remove("hidden");
}

function hide(id){
	var el = document.getElementById(id);
	el.classList.add("hidden");
}

var score = 0;

function addPoints(points){
	score = score + points;
	document.getElementById("score").innerHTML = score;
}