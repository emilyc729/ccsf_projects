
function calculate() {
		var inputNum, integer, sqrt, tenth, hundreth, thousandth;
		inputNum = document.getElementById("floatNum").value;
		
		if(isNaN(inputNum) || inputNum == "") {
			document.getElementById("comment").innerHTML = "Please enter a valid number";
		}
		else {
			inputNum = parseFloat(inputNum);
			integer = Math.round(inputNum); 
			sqrt = Math.round(Math.sqrt(inputNum));
			tenth = (Math.floor(inputNum * 10 + .5 ) / 10).toFixed(1);
			hundreth = (Math.floor(inputNum * 100 + .5 ) / 100).toFixed(2);
			thousandth = (Math.floor(inputNum * 1000 + .5 ) / 1000).toFixed(3);
			document.getElementById("output").value = 
				"Entered number: " + inputNum +
				"\nNearest Integer: " + integer +
				"\nSquareroot Rounded Integer: " + sqrt +
				"\nNearest Tenth: " + tenth +
				"\nNearest Hundreth: " + hundreth +
				"\nNearest Thousandths: " + thousandth;
		}
		
}