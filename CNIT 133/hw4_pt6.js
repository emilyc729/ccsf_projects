$(document).ready(function(){
	
    $( "#animate1" ).animate({"top": "2600px"}, 8000);
	$( "#animate2" ).animate({"top": "2600px"}, 5000);
	$( "#animate3" ).animate({"top": "2600px"}, 7000);
	$( "#animate4" ).animate({"top": "2600px"}, 6000);
	$( "#animate5" ).animate({"top": "2600px"}, 8000);
	$( "#animate6" ).animate({"top": "2600px"}, 5000);
	$( "#animate7" ).animate({"top": "2600px"}, 6000);
	$( "#animate8" ).animate({"top": "2600px"}, 9000);
	$( "#animate9" ).animate({"top": "2600px"}, 8000);
	$( "#animate10" ).animate({"top": "2600px"}, 7000);
  
});

function printSong() {
	var nextLyrics = "";
	for(var i = 1; i<=12; i++) {
		document.write("<div id='style'><br>On the <span id='day'>" + printDay(i) + "</span> day of Christmas<br> my true love said to me:<br>");
		nextLyrics = addLyrics(i) + nextLyrics;
		document.write(nextLyrics);
		if(i == 1) {
			document.write("A Patridge in a Pear Tree<br></div>");
		}
		else {
			document.write("and a Patridge in a Pear Tree<br></div>");
		}
		
	}
	
}

function printDay(x) {
	var day;
	switch(x) {
		case 1:
			day = "first";
			break;
		case 2:
			day = "second";
			break;
		case 3:
			day = "third";
			break;
		case 4:
			day = "fourth";
			break;
		case 5:
			day = "fifth";
			break;
		case 6:
			day = "sixth";
			break;
		case 7:
			day = "seventh";
			break;
		case 8:
			day = "eigth";
			break;
		case 9:
			day = "ninth";
			break;
		case 10:
			day = "tenth";
			break;
		case 11:
			day = "eleventh";
			break;
		case 12:
			day = "twelvth";
			break;
	}
	return day;
}

function addLyrics(y) {
	var lyrics;
	switch(y) {
		case 1:
			lyrics = "";
			break;
		case 2:
			lyrics = "Two Turtle Doves<br>";
			break;
		case 3:
			lyrics = "Three French Hens<br>";
			break;
		case 4:
			lyrics = "Four Calling Birds<br>";
			break;
		case 5:
			lyrics = "Five Golden Rings<br>";
			break;
		case 6:
			lyrics = "Six Geese a Laying<br>";
			break;
		case 7:
			lyrics = "Seven Swans a Swimming<br>";
			break;
		case 8:
			lyrics = "Eight Maids a Milking<br>";
			break;
		case 9:
			lyrics = "Nine Ladies Dancing<br>";
			break;
		case 10:
			lyrics = "Ten Lords a Leaping<br>";
			break;
		case 11:
			lyrics = "Eleven Pipers Piping<br>";
			break;
		case 12:
			lyrics = "Twelve Drummers Drumming<br>";
			break;
	}
	return lyrics;
}