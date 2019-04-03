

var ranges = [{},{},{},{},{},{},{},{},{}];

initialize();

function initialize() {
	for(var i = 0; i < ranges.length; i++) {
		ranges[i] = 0;
	}
}

function calcSalary() {

	var sales = document.getElementById("grossSales").value;
	if(isNaN(sales)) {
		alert("Please enter valid a number.");
	}
	else {
		var salary = parseFloat((200 + (sales * 0.09)).toFixed(2));
		document.getElementById("salaryEarned").value = salary;
		if(salary >= 200 && salary <= 299.99) {
			ranges[0]++;
		} else if (salary >= 300 && salary <= 399.99) {
			ranges[1]++;
		} else if (salary >= 400 && salary <= 499.99) {
			ranges[2]++;
		} else if (salary >= 500 && salary <= 599.99) {
			ranges[3]++;
		} else if (salary >= 600 && salary <= 699.99) {
			ranges[4]++;
		} else if (salary >= 700 && salary <= 799.99) {
			ranges[5]++;
		} else if (salary >= 800 && salary <= 899.99) {
			ranges[6]++;
		} else if (salary >= 900 && salary <= 999.99) {
			ranges[7]++;
		} else if (salary >= 1000) {
			ranges[8]++;
		}
		
		document.getElementById("output").value =
			"$200.00 - $299.99 \t " + ranges[ 0 ] + "\n" +
			"$300.00 - $399.99 \t " + ranges[ 1 ] + "\n" +     
			"$400.00 - $4999.99 \t " + ranges[ 2 ] + "\n" +
			"$500.00 - $599.99 \t " + ranges[ 3 ] + "\n" +
			"$600.00 - $699.99 \t " + ranges[ 4 ] + "\n" +
			"$700.00 - $799.99 \t " + ranges[ 5 ] + "\n" +     
			"$800.00 - 899.99 \t " + ranges[ 6 ] + "\n" +
			"$900.00 - $999.99 \t " + ranges[ 7 ] + "\n" +
			"$1000 and over \t\t " + ranges[ 8 ] + "\n";
	}
}