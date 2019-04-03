function validate(){
	//clear Error messages
	document.getElementById("comment").innerHTML = "";
	document.getElementById("errorMsg1").innerHTML = "";
	document.getElementById("errorMsg2").innerHTML = "";
	document.getElementById("errorMsg3").innerHTML = "";
	document.getElementById("errorMsg4").innerHTML = "";
	
	var input = document.getElementById("textInput").value;
	var radios = document.getElementsByName("question");
	var checkBox = document.getElementsByName("check");
	var bool1 = false;
	var bool2 = false;
	//validate text input
	if(input == "") {
		document.getElementById("errorMsg1").innerHTML = "Error: Please input text.";
	}
	else {
		document.getElementById("errorMsg1").innerHTML = "";
	}
	//validate whether a radio is checked
	for(var i = 0; i < radios.length; i++) {
		if(radios[i].checked){
			bool1 = true;
			break;
		}
	}
	if(!bool1) {
		document.getElementById("errorMsg2").innerHTML = "Error: Please check a radio.";
	}
	//validate whether a checkbox is checked
	for(var i = 0; i < checkBox.length; i++) {
		if(checkBox[i].checked){
			bool2 = true;
			break;
		}
	}
	if(!bool2) {
		document.getElementById("errorMsg3").innerHTML = "Error: Please check a checkbox.";
	}
	//validate whether an option is selected
	if((choice.options[choice.selectedIndex].value) == "choose") {
		document.getElementById("errorMsg4").innerHTML = "Error: Please select an option.";
	}
	else {
		document.getElementById("errorMsg4").innerHTML = "";
	}
	if((document.getElementById("errorMsg1").innerHTML == "") && (document.getElementById("errorMsg2").innerHTML == "") && (document.getElementById("errorMsg3").innerHTML == "") && (document.getElementById("errorMsg4").innerHTML == "")) {
		document.getElementById("comment").innerHTML = "All fields are valid.";
	}
}
