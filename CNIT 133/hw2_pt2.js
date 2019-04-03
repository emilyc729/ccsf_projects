function calculate() {
	var number1, number2, number3, n1, n2, n3, sum, avg, product, max, min;
	
	number1 = document.forms["myform"].elements["num1"].value;
	number2 = document.forms["myform"].elements["num2"].value;
	number3 = document.forms["myform"].elements["num3"].value;
	n1 = parseInt(number1);
	n2 = parseInt(number2);
	n3 = parseInt(number3);
	sum = n1 + n2 + n3;
	avg = ((n1 + n2 + n3)/3).toFixed(2);
	product = n1 * n2 * n3;
	max = Math.max(n1, n2, n3);
	min = Math.min(n1, n2, n3);
	
	document.forms["myform"].elements["result"].value = ("Sum: " + sum + "\nAvg: " + avg + "\nProduct: " + product + "\nMax: " + max + "\nMin: " + min);

}

