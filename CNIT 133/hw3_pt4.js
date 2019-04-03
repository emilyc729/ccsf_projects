$(document).ready(function() {
	
	$("#palindrome").focus();
	
});

$(function() {

	$("#dialog").dialog({
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 1000
		},

		hide: {
			effect: "explode",
			duration: 1000
		}
	});

	$("#instruction").click(function() {
		$("#dialog").dialog("open");
	});
});

function palindrome(input) {
	
	for(var i=0; i < input.length; i++) {
		if(input[i] !== input[input.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

function check() {
	document.getElementById("comment").innerHTML = "";
	var input;
	input = document.getElementById("palindrome").value;
	//alert(input.length);
	if(input.length == 5 && !isNaN(input)) {
		if(input.charAt(0) != 0) {
			if(palindrome(input) == true) {
				document.getElementById("comment").innerHTML = "<strong>It is a Palindrome!<strong>";
			}
			else {
				document.getElementById("comment").innerHTML = "Error: It is not a Palindrome!";
			}
		}
		else {
			document.getElementById("comment").innerHTML = "Error: The first digit cannot be a zero. Please re-enter 5-digit number.";
		}
		
	} else {
		document.getElementById("comment").innerHTML = "Error: Your input is not a 5-digit number. Please re-enter 5-digit number.";
	}
}

function res() {
	document.getElementById("comment").innerHTML = "";
}
