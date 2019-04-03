$(document).ready(function() {
  $("table tr:nth-child(even)").css({
    "background-color":"#cccccc",
    "color":"black"});
});


function createTable() {
	
	var p = 1000;
	var rate = [0.05, 0.06, 0.07, 0.08, 0.09, 0.10];
	for(var i = 0; i < 6; i++) {
		document.write("<table><tr><th>Year</th><th>Amount on Deposit</th><th>Interest Rate</th></tr>");
		compoundInt(1000, rate[i]);
		document.write("</table>");
	}
}

function compoundInt(p,r) {
	var amount = [];
	for(var n = 1; n <= 10; n++) {
		amount[n] = (p*Math.pow(1+r,n)).toFixed(2);
		document.write("<tr><td>" + n + "</td><td>" + amount[n] + "</td><td>" + r + "</td></tr>");
	}

}