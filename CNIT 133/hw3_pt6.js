var correctAns;
$(document).ready(function() {
	
	$("#answer").focus();
	
	correctAns = generateQ(); //initial random multi. problem
	
	//on submit button, check if user input is correct
	$("#submit").click(function(){
		checkAns(correctAns);
		$("#answer").focus();
	});
	
	
});

//generate a random multi. problem, display question, save correct answer
function generateQ() {
	var num1, num2, question;
	num1 = Math.floor((Math.random()*10));
	num2 = Math.floor((Math.random()*10));
	correctAns = num1*num2;
	document.getElementById("question").innerHTML = ("How much is " + num1 + " times " + num2 + " ?");
	
	return correctAns;	
}

//function to check user input answer
function checkAns(compAns) {
	//get value of user input
	var userAns = document.getElementById("answer").value;
	if(isNaN(userAns)) {
		//check if input is valid number
		alert("Please enter valid numeric input.");
		res();
	}
	else {
		userAns = parseInt(userAns);
		//check if user answer = correct comp. answer
		if(userAns == compAns) {
			document.getElementById("comment").innerHTML = "Very good!";
			document.getElementById("answer").value = "";
			//delay confirmation statement 
			setTimeout(function() {
				var confirmation = confirm("Do you want to answer another problem?");
				if(confirmation == true) {
					res();
					generateQ();
				}
				else {
					res();
				}
			}, 1);
		
			
		}
		else {
			//if user answer incorrect, have user input another answer
			document.getElementById("comment").innerHTML = "No. Please try again.";
			document.getElementById("answer").value = "";
			
		}
	}
	
}

//reset user input + message
function res() {
	document.getElementById("answer").value = "";
	document.getElementById("comment").innerHTML = "";
}
