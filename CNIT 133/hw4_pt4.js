function retailPrice() {
	var product =[];
	var quantity = [];
	var amount = [];
	var totalAmount = 0;
	
	for(var i = 1; i <= 5; i++) {
		product[i] = document.getElementById("p"+i).value;
		quantity[i] = document.getElementById("quantity"+i).value;
		if (isNaN(product[i]) || isNaN(quantity[i]) || quantity[i] == "" || product[i] == ""){
			alert("One or more of the input values are not valid numbers.");
		}
		else {
			product[i] = parseInt(product[i]);
			quantity[i] = parseInt(quantity[i]);
			switch(product[i]) {
				case 1: 
					amount[i] = (quantity[i]*2.98).toFixed(2);
					document.getElementById("amount1").value = amount[i];
					break;
				case 2:
					amount[i] = (quantity[i]*4.50).toFixed(2);
					document.getElementById("amount2").value = amount[i];
					break;
				case 3: 
					amount[i] = (quantity[i]*9.98).toFixed(2);
					document.getElementById("amount3").value = amount[i];
					break;
				case 4:
					amount[i] = (quantity[i]*4.49).toFixed(2);
					document.getElementById("amount4").value = amount[i];
					break;
				case 5:
					amount[i] = (quantity[i]*6.87).toFixed(2);
					document.getElementById("amount5").value = amount[i];
					break;
				
			}
			amount[i] = parseFloat(amount[i]);
			totalAmount += amount[i];
			document.getElementById("total").value = totalAmount.toFixed(2);
		}
	}
	
}