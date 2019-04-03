$(function () {

	$("#changePage :checkbox").change(function () {
		$("#myform").css($(this).attr("name"), this.checked ? $(this).val() : "");
	});
	
});

function switchColor(num) {
	var body = document.getElementById("changePage");
	if(num == 1) {
		body.className = "purple";
	} else if(num == 2) {
		body.className ="pink";
	} else if(num == 3) {
		body.className ="orange";
	}
}

function switchSize(num) {
	var body = document.getElementById("myform");
	if(num == 1) {
		body.className = "small";
	} else if(num == 2) {
		body.className ="medium";
	} else if(num == 3) {
		body.className ="large";
	}
}

function fontFam() {
	var changeTo = document.getElementById("font").value;
	var body = document.getElementById("myform");
	if(changeTo == "comic") {
		body.className = "comic";
	} else if(changeTo == "arialF") {
		body.className ="arialF";
	} else if(changeTo == "verdanaF") {
		body.className ="verdanaF";
	}
}

function resetDefault() {
	var body = document.getElementById("myform");
	var body2 = document.getElementById("changePage");
	$("#font").val("#");
	$("input[type=radio]:checked").prop('checked',false);
	$("#changePage [checked]").click();
	$("#changePage :checked").click();
	body.className = "original";
	body2.className = "original";
}