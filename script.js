function lineColor(){
	let line = document.getElementById("line1");
	line.classList.add("red");
}
function circleOn(){
	let circle = document.getElementById("circle1");
	circle.classList.add("orange")
}
function circleOff(){
	let circle = document.getElementById("circle1");
	circle.classList.remove("orange")
}

document.getElementById("button1").addEventListener("onclick", lineColor);
document.getElementById("circle1").addEventListener("mouseover", circleOn);
document.getElementById("circle1").addEventListener("mouseout", circleOff)