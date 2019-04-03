$(document).ready(function() {
	one();
	two();
	$(function() {
		$("#myform").draggable();
	});
});


function one() {
	var product = 1;
	var sum = 0;
	for (var i = 5; i <= 20; i+=3) {
		product *= i;
		sum += i;
	}	
	document.getElementById("product1").value = product;
	document.getElementById("sum1").value = sum;
}

function two() {
	var product = 1;
	var sum = 0;
	var x = 3;
	while (x <= 31) {
		product *= x;
		sum += x;
		x += 4;
	}	
	document.getElementById("product2").value = product;
	document.getElementById("sum2").value = sum;
}

