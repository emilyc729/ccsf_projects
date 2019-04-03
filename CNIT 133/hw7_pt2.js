$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
	  active: false
    });
	
 } );

function validate() {
	var inputPW = document.getElementById("pw").value;
	if (inputPW !== "obama") {
		document.getElementById("comment").innerHTML = "Password is incorrect. Please try again."
		document.getElementById("pw").value = "";
		document.getElementById("pw").focus();
	}
	else {
		window.location = "https://hills.ccsf.edu/~echeun17/cnit133/hw7_pt2F.html";
	}
}