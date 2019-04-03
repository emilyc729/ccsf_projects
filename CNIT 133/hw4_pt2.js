

function grossPay() {
	var hour = [];
	var rate = [];
	var pay = [];
	
	
	for(var i = 1; i <= 6;i++) {

		hour[i] = document.getElementById("hours"+i).value;
		rate[i] = document.getElementById("rate"+i).value;
		if (isNaN(hour[i]) || isNaN(rate[i]) || hour[i] == "" || rate[i] == ""){
			alert("One or more of the input values are not valid numbers.");
		}
		else {
			hour[i] = parseFloat(hour[i]);
			rate[i] = parseFloat(rate[i]);
			if(hour[i] <= 40) {
				pay[i] = (hour[i]*rate[i]).toFixed(2);
				document.getElementById("pay"+i).value = pay[i];
			}
			if(hour[i] > 40) {
				pay[i] = ((rate[i]*40) + ((hour[i] - 40)*(rate[i]*1.5))).toFixed(2);
				document.getElementById("pay"+i).value = pay[i];
			}
		}
	}
	
}