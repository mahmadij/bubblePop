
var scores = 0;

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}


setInterval(function drawDots(){
	for (var i = 1; i < 5; i++) {
		var dotElement = document.getElementById("dot"+i);
		if( dotElement ){
			removeElement("dot"+i);
		}
		var dot = document.createElement("SPAN"); 
		dot.setAttribute("id", "dot"+i);
		dot.setAttribute("class","dot");
		dot.setAttribute("onclick", "incrementScore()");
		dot.style.top = Math.floor(Math.random()*(200)) + "px";
		dot.style.left = Math.floor(Math.random()*(200)) + "px";
		document.getElementById("dots").appendChild(dot); 
	}
},1000);
function incrementScore(){
	this.scores++;
	document.getElementById("countDown").value = this.scores;
}
function moveCircle(x){
	document.getElementById(x).style.left=Math.floor(Math.random()*(400)+50) + "px";
	document.getElementById(x).style.top=Math.floor(Math.random()*(40)+50) + "px";
}


function drawCircles(){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	for(var i=0;i<10;i++){
		ctx.strokeStyle ="#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);
	ctx.beginPath();      
		ctx.arc(Math.floor(Math.random()*(100)+1) , Math.floor(Math.random()*(80)+1), Math.floor(Math.random()*(20)+1), 0 ,2*Math.PI); 
	  ctx.stroke();
		
	}
}