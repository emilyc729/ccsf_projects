function check() {
	var num1 = document.forms["myform"].elements["num1"].value;
	var num2 = document.forms["myform"].elements["num2"].value;
	var num3 = document.forms["myform"].elements["num3"].value;
	var num4 = document.forms["myform"].elements["num4"].value;
	var num5 = document.forms["myform"].elements["num5"].value;
	
	var numArray = [num1, num2, num3, num4, num5];
	
	var negatives = 0;
	var positives = 0;
	var zeros = 0;
	
	for (var i = 0; i < 5; i++) {
		if(numArray[i] < 0) {
			negatives += 1;
		}
		if(numArray[i] == 0) {
			zeros += 1;
		}
		if(numArray[i] > 0) {
			positives += 1;
		}
	}
	
	document.getElementById("output").innerHTML = ("Number of negatives: " + negatives + "\nNumber of positives: " + positives + "\nNumber of zeros: " + zeros);
		
}

$(document).ready(function(){
	$("button").click(function(){
		$("#output").fadeTo("slow",0.25);
	});
});