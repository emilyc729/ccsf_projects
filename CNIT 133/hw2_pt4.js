

document.write("<table border='1'>"+"<tr><th>Number</th><th>Square</th><th>Cube</th></tr>");

for(var i=1; i <=6; i++) {
	document.write("<tr><td>" + i + "</td><td>" + i*i + "</td><td>" + i*i*i + "</td></tr>");
}

document.write("</table>");


function createTable() {
	
	var table = "";
	table += "<table border='1'>";
	table += "<tr><th>Number</th><th>Square</th><th>Cube</th></tr>"

	for(var j=7; j <=10; j++) {
		table += "<tr><td>" + j + "</td><td>" + j*j + "</td><td>" + j*j*j + "</td></tr>";
	}

	table += "</table>";
	
	document.getElementById("table").innerHTML = table;
	
}



