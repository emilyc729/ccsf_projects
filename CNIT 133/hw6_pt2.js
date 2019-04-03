

function searchChar() {
		var string = (document.getElementById("searchText").value).toLowerCase(); 
		var charToSearch = (document.getElementById("character").value).toLowerCase();
		var count = 0;
		
		for(var i = 0; i < string.length; i++) {
			if(string.charAt(i) == charToSearch) {
				count++;
			}
		}
		if(count == 0) {
			var windowText = 
				"<html>\n<head>\n<title>Character Not Found</title>\n</head>\n" +
				"<body>\n<div align='center'>\n<h4>Search character '" + charToSearch + "' not found in text string!</h4>\n" + 
				"<input type='button' value='Close Window' onclick='window.close()'>\n" +
				"</div>\n</body>\n</html>";
			
			var error = window.open("", "new_window", "top=400,left=750,width=300,height=100");
			error.focus();
			error.document.write(windowText);
			error.document.close();
			document.getElementById("output").value = "See pop-up window.";
		}
		else {
			document.getElementById("output").value = "The character '" + charToSearch + "' occurred in the string " + count + " times.";
		}
}