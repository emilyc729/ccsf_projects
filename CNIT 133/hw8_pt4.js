function ajaxFunction(code){
	var ajaxRequest;  // request
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	// request
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
			var result = ajaxRequest.responseText;
			var place = result.split(', ');
			
			document.getElementById("name").value = place[0];
			document.getElementById("capital").value = place[1];
			document.getElementById("population").value = place[2];
		}
	}
	ajaxRequest.open("GET", "getState.php?stcode=" + code.toUpperCase());
	ajaxRequest.send(null); 
	

}