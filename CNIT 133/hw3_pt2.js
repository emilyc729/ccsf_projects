$(function() {
		$(document).tooltip();
});


function earning() {
	var num1, num2, num3, num4, totalAmnt, earnings, totalItems, name;
	num1 = document.getElementById("amnt1").value;
	num2 = document.getElementById("amnt2").value;
	num3 = document.getElementById("amnt3").value;
	num4 = document.getElementById("amnt4").value;
	name = document.getElementById("name").value;
	if(name == "") {
		//alert("Please enter salesperson name.");
		document.getElementById("comment").innerHTML = "Please enter salesperson name.";
	}
	else {
		document.getElementById("comment").innerHTML = "";
		if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
		
		alert("One or more of the input values are not valid numbers.");
		}
		else {
			num1 = parseInt(num1);
			num2 = parseInt(num2);
			num3 = parseInt(num3);
			num4 = parseInt(num4);
			
			totalItems = parseInt(num1 + num2 + num3 + num4);
			totalAmnt = parseFloat((num1*239.99) + (num2*129.75) + (num3*99.95) + (num4*350.89)).toFixed(2);
			earnings = parseFloat(200 + (totalAmnt*0.09)).toFixed(2);
			document.getElementById("numItems").value = totalItems;
			document.getElementById("totalSold").value = totalAmnt;
			document.getElementById("totalEarn").value = earnings;
		}
	}
	
}