function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);
  

  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
  

  alert ("please enter an amount")
 
  
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}

function euroToUsd(){
	var amount = parseInt(document.getElementById("value1").value);
	
	var usd = amount * 1.06;
	var message2 = amount + ' euros converts to ' + usd + ' usd';
	
	alert ("please enter an amount")
	
	console.log(message2);
	document.getElementById("resultsentence").innerHTML = message2;
}	

function euroToYen(){
	
	var amount = parseInt(document.getElementById("value1").value);
	
	var yen = amount * 121.12;
	var message3 = amount + ' euros converts to ' + yen + ' yen';
	
	
	alert ("please enter an amount")
	
	console.log(message3);
	document.getElementById("resultsentence").innerHTML = message3;
	
}

function euroToBitcoin(){
	
	var amount = parseInt(document.getElementById("value1").value);
	
	var bitcoin = amount * 0.00082;
	var message4 = amount + ' euros converts to ' + bitcoin + ' bitcoin ';
	
	alert ("please enter an amount")
	
	console.log(message4);
	document.getElementById("resultsentence").innerHTML = message4;
}



	
	
	