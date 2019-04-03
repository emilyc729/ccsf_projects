$(document).ready(function(){
	dateFormat();
	diffHours();
	jQuery(function($){
	   $("#phoneNum").mask("(999) 999-9999");
	});
});

function dateFormat() {
	var date = new Date();
	var format1, format2, format3;
	
	format1 = date.toString();
	format2 = date.toLocaleString();
	format3 = date.toUTCString();
	
	document.getElementById("formats").value = "Standard: " + format1 + "\nLocale: " + format2 + "\nUniversal: " + format3;
}

function diffHours() {
	var date = new Date();
	var pstDiff = (date.getTimezoneOffset())/60;
	var estDiff = pstDiff - 3; //3 hours difference from pst
	document.getElementById("hours").value = "Hours Difference btw PST and UTC: " + pstDiff + "\nHours Difference btw EST and UTC: " + estDiff;
}

function splitNum() {
	var inputNum = document.getElementById("phoneNum").value;
	var regExp = /^(\((\d{3})\))(\s)(\d{3})(-\d{4})$/;
	
	if(!regExp.test(inputNum)) {
		document.getElementById("comment").innerHTML = "Invalid Phone Number format, please re-enter.";
		document.getElementById("phoneNum").value = "";
	}
	else {
		var token1 = inputNum.split(" ");
		var token2 = token1[1].split("-");
		var areaCode = token1[0].replace(/[()]/g, '');
		var firstNum = token2[0];
		var lastNum = token2[1];
		
		document.getElementById("phone").innerHTML = "Phone Number: " + inputNum;
		document.getElementById("area").value = areaCode;
		document.getElementById("first").value = firstNum;
		document.getElementById("last").value = lastNum;
	}
}