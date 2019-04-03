$(function() {

	$( "#instructions" ).dialog({
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 1000
		},

		hide: {
			effect: "explode",
			duration: 1000
		}
	});

	$( "#opener" ).click(function() {
		$( "#instructions" ).dialog( "open" );
	});
});


function getStateInfo() {
	document.getElementById("comment").innerHTML = "";
	var stateInfo = [["AL", "Alabama", "Montgomery", "4,779,736"],["AK", "Alaska", "Juneau", "710,231"],["AZ", "Arizona", "Phoenix", "6,392,017"],["AR", "Arkansas", "Little Rock", "2,915,918"],["CA", "California", "Sacramento", "37,253,956"],["CO", "Colorado", "Denver", "5029196"]];
	var stateInput = document.getElementById("stateName").value;
	stateInput = stateInput.toUpperCase();
	var found = false;
	
	if(stateInput == "") {
		document.getElementById("comment").innerHTML = "Please enter valid input.";
	}
	else {
		for(var i = 0; i < stateInfo.length; i++) {
			if(((stateInfo[i][0]).toUpperCase() == stateInput) || ((stateInfo[i][1]).toUpperCase() == stateInput)) {
				document.getElementById("abbrev").value = stateInfo[i][0];
				document.getElementById("name").value = stateInfo[i][1];
				document.getElementById("capital").value = stateInfo[i][2];
				document.getElementById("population").value = stateInfo[i][3];
				found = true;
			}
		}
	}
	if(found == false) {
		document.getElementById("comment").innerHTML = "There is no data for this state.";

	}
	
	
}