$(document).ready(function(){

    $("#button").click(function(){
        $("#result").css({
            "color": "white",
            "background-color": "black",
            "font-family": "Arial",
            "font-size": "20px",
            "font-weight": "bold"
        });
    });
});

function summary() {
	var acct, balance, itemAmnt, credits, creditL, newBalance, exceed, avail;
	balance = document.getElementById("balance").value;
	itemAmnt = document.getElementById("amount").value;
	credits = document.getElementById("credit").value;
	creditL = document.getElementById("creditLim").value;
	acct = document.getElementById("account").value;
	if(acct == "" || isNaN(acct)) {
		alert("Please enter a valid account number.");
	}
	else {
		if(isNaN(balance) || isNaN(itemAmnt) || isNaN(credits) || isNaN(creditL)) {
		
			alert("One or more of the input values are not valid numbers.");
		}
		else {
			balance = parseInt(balance);
			itemAmnt = parseInt(itemAmnt);
			credits = parseInt(credits);
			creditL = parseInt(creditL);
			
			newBalance = parseInt(balance + itemAmnt - credits);
			if(newBalance > creditL) {
				exceed = parseInt(newBalance - creditL);
				document.getElementById("result").value = ("New Balance: " + newBalance + "\nCredit limit exceeded by: " + exceed);
			}
			else {
				avail = parseInt(creditL - newBalance);
				document.getElementById("result").value = ("New Balance: " + newBalance + "\nCredit available: " + avail);
			}
		}
	}
	
}