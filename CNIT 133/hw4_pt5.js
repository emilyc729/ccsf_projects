
$(document).ready(function(){
	$("#flip").click(function(){
        $("#instructions").slideToggle("slow");
    });
	
    $("#myform").validate({
	  // Rules for each input item
		rules: {
			num: { required: true, number: true, min: 1, max: 3}
        },

		messages: { 

			num:  "Please enter a number between 1 and 3",

        }


	});	  
});

function list() {
	var l ="";
	for(var i = 1; i <= 3; i++) {
		l += "<li>List item " + i + "</li>";
	}
	return l;
}

function generateList() {
	
	if ($("#myform").valid()) {
		
		var choice = parseInt(document.getElementById("num").value);
		
		switch(choice) {
			case 1:
				document.getElementById("output").innerHTML = "<h3>Unordered List</h3><ul style='list-style-type: square;'>" + list() + "</ul>";
				break;
			case 2:
				document.getElementById("output").innerHTML = "<h3>Ordered Number List</h3><ol>" + list() + "</ol>";
				break;
			case 3:
				document.getElementById("output").innerHTML = "<h3>Ordered Letter List</h3><ol style='list-style-type: upper-alpha;'>" + list() + "</ol>";
				break;
		}
	}	
}