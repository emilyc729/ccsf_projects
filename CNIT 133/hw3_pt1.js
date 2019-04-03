$(document).ready(function(){
    $("#flip").click(function(){
        $("#instructions").slideToggle("slow");
    });
	
});

function finalAvg() {
	var hwAvg, midExam, finalExam, acr, finalAvg;
	hwAvg = document.getElementById("homework").value;
	midExam = document.getElementById("midterm").value;
	finalExam = document.getElementById("final").value;
	acr = document.getElementById("acr").value;
	if(isNaN(hwAvg) || isNaN(midExam) || isNaN(finalExam) || isNaN(acr)) {
		
		alert("One or more of the input values are not valid numbers.");
	}
	else {
		hwAvg = parseInt(hwAvg);
		midExam = parseInt(midExam);
		finalExam = parseInt(finalExam);
		acr = parseInt(acr);
		if(hwAvg < 0 || hwAvg > 100 || midExam < 0 || midExam > 100 || finalExam < 0 || finalExam > 100 || acr < 0 || acr > 100) {
			alert("Please enter numbers between 1 - 100.");
		}
		else {
			finalAvg = Math.round(parseFloat((0.5*hwAvg) + (0.2*midExam) + (0.2*finalExam) + (0.1*acr)));
			if(finalAvg <= 100 && finalAvg >=90) {
				document.getElementById("finalScore").value = finalAvg;
				document.getElementById("finalGrade").value = "A";
			} else if(finalAvg <= 89 && finalAvg >=80) {
				document.getElementById("finalScore").value = finalAvg;
				document.getElementById("finalGrade").value = "B";
			} else if(finalAvg <= 79 && finalAvg >=70) {
				document.getElementById("finalScore").value = finalAvg;
				document.getElementById("finalGrade").value = "C";
			} else if(finalAvg <= 69 && finalAvg >=60) {
				document.getElementById("finalScore").value = finalAvg;
				document.getElementById("finalGrade").value = "D";
				document.getElementById("comment").innerHTML = "Student must retake course";
			} else {
				document.getElementById("finalScore").value = finalAvg;
				document.getElementById("finalGrade").value = "F";
				document.getElementById("comment").innerHTML = "Student must retake course";
			} 
		}
	}
}

function res() {
	document.getElementById("comment").innerHTML = "";
}