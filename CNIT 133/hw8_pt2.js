function ajaxFunction(){
	var ajaxRequest1;  // request 1
	var ajaxRequest2;  // request 2
	var ajaxRequest3;  // request 3
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest1 = new XMLHttpRequest();
		ajaxRequest2 = new XMLHttpRequest();
		ajaxRequest3 = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest1 = new ActiveXObject("Msxml2.XMLHTTP");
			ajaxRequest2 = new ActiveXObject("Msxml2.XMLHTTP");
			ajaxRequest3 = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest1 = new ActiveXObject("Microsoft.XMLHTTP");
				ajaxRequest2 = new ActiveXObject("Microsoft.XMLHTTP");
				ajaxRequest3 = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	// request 1
	ajaxRequest1.onreadystatechange = function(){
		if(ajaxRequest1.readyState == 4){
			document.myform.time.value = ajaxRequest1.responseText;
			
		}
	}
	ajaxRequest1.open("GET", "serverTime.php", true);
	ajaxRequest1.send(null); 
	
	// request 2
	ajaxRequest2.onreadystatechange = function(){
		if(ajaxRequest2.readyState == 4){
			document.myform.date1.value = ajaxRequest2.responseText;
			
		}
	}
	ajaxRequest2.open("GET", "serverTime2.php", true);
	ajaxRequest2.send(null); 
	
	// request 3
	ajaxRequest3.onreadystatechange = function(){
		if(ajaxRequest3.readyState == 4){
			document.myform.date2.value = ajaxRequest3.responseText;
			
		}
	}
	ajaxRequest3.open("GET", "serverTime3.php", true);
	ajaxRequest3.send(null); 
}
