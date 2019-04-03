//Growing Text

txtsize=0;
maxsize=50;

var timer;


function writeMsg()
{
	if (txtsize<maxsize)
	{
		document.getElementById('growText').style.fontSize=txtsize+"px"
		txtsize++
		timer=setTimeout("writeMsg()",50)
	}
}

function stopTimer()
{
	clearTimeout(timer)
}

//Textual Link Alert Msg

function alertMsg() {
	alert("This is an alert message~");
}


//mouse over image event

function switchImage() {
	document.getElementById("icecream").src ="image4.jpg"
} 


function restoreImage() {
	document.getElementById("icecream").src ="image1.jpg"
}

//Form Text box, button, and alert msg

function check() {
	var guess = document.getElementById('num1').value;
	var randNum = Math.floor((Math.random()*5) + 1);
	
	if(guess == randNum) {
		alert("Correct!");
	}
	else {
		alert("You've guessed the wrong number.");
	}
	
	alert(randNum);
}

//Drop down menu

function surfto(form) {
    var myindex=form.dest.selectedIndex
    location=form.dest.options[myindex].value;
}

//Pop-up Window containing Webpage

function new_window(url)  {

	link = window.open(url,'_new');

}

//Password Page

$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
	  active: false
    });
	
 } );

function validate() {
	var inputPW = document.getElementById("pw").value;
	if (inputPW !== "rosebud") {
		alert("Password is incorrect. Please try again.");
		document.getElementById("pw").value = "";
		document.getElementById("pw").focus();
	}
	else {
		window.location = "https://hills.ccsf.edu/~echeun17/cnit132/hw7.html";
	}
}

//Click to Fade button

$(document).ready(function(){
  $("#fading").click(function(){
    $("#fadeText").fadeTo("slow",0.25);
  });
});
