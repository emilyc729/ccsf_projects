$(document).ready(function() {
	
	$("#temperature").focus();
	
});

function fahrenheit() {
	var temp, degreeF;
	temp = document.getElementById("temperature").value;
	if(isNaN(temp)) {
		alert("Please input a numeric value");
	}
	else {
		temp = parseInt(temp);
		degreeF = parseFloat(((9/5)*temp) + 32).toFixed(0);
		document.getElementById("converted").value = degreeF;
		document.getElementById("degree").innerHTML = "\u00B0F";
	}
}

function celsius() {
	var temp, degreeC;
	temp = document.getElementById("temperature").value;
	if(isNaN(temp)) {
		alert("Please input a numeric value");
	}
	else {
		temp = parseInt(temp);
		degreeC = parseFloat((5/9)*(temp - 32)).toFixed(0);
		document.getElementById("converted").value = degreeC;
		document.getElementById("degree").innerHTML = "\u00B0C";
	}
}

function res() {
	document.getElementById("degree").innerHTML = "";
}