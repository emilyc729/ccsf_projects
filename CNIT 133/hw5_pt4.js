var count = 0;
var numArr = [];
var inputNum;
var dup = [];



function find() {
		inputNum = parseInt(document.getElementById("num").value);
		
		if(isNaN(inputNum)) {
			document.getElementById("comment").innerHTML = "Please enter a valid number.";
		}
		else if(inputNum < 10 || inputNum > 100){
			document.getElementById("comment").innerHTML = "Please enter a number between 10 and 100.";
		}
		else {
			document.getElementById("comment").innerHTML = "";
			var found = false;
			for(var x = 0; x < numArr.length; x++) {
				if(numArr[x] == inputNum) {
					dup.push(inputNum);
					found = true;
					break;
				}
			}
			if(!found) {
				numArr.push(inputNum);
			}
			count++;
		}
		document.getElementById("num").value = "";
	
	if(count == 10) {
		document.getElementById("output").value = "Count of numbers entered: " + count + "\n" + "Numbers entered (excluding duplicates): " + numArr + "\n\n" + "Duplicates: " + dup + "\n";
		count = 0;
	}
}