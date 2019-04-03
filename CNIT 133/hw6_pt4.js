

function searchExp() {
	var string = (document.getElementById("searchText").value).toLowerCase(); 
	var arrayAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var count = 0;
	var occurrences = [];
	var position = 0;
	
	for(var i = 0; i < 26; i++) {
		occurrences[i] = 0;
	}
	
	if(string == "") {
		document.getElementById("output").value = "Please enter input.";
	}
	else {
		for(var i = 0; i < arrayAlpha.length; i++) {
			//starting from position 0 of input string, check for a letter
				//if letter does not exist in position, return -1 (check for next letter)
			var result = string.indexOf(arrayAlpha[i], position);
			//console.log(result + "*");
			while(result != -1) {
				count++;
				position = result;
				//console.log(pos);
				if(position+1 == string.length) {
					result = -1;
				}
				else {
					//check if next position (letter) of input string is the same as letter in array
					result = string.indexOf(arrayAlpha[i], position+1);
				}
			}
			occurrences[i] = count;
			count = 0;
			position = 0;
		}
		
		document.getElementById("output").value = ("   Letter  " + "Occurrences\n");
		
		for(var i = 0; i < arrayAlpha.length; i++) {  
			document.getElementById("output").value += "     " + arrayAlpha[i] + "\t\t" + occurrences[i] + "\n";

		}
	}
	
}