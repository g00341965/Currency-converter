function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);
  

  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
  

}

fucntion euroToUsd(){
	var amount = parseInt(document.getElementById("value1").value);
	
	var usd = amount * 1.06;
	var message2 = amount + ' euros converts to ' usd;
	
	
}	

function euroToYen(){
	
	var amount = parseInt(document.getElementById("value1").value);
	
	var yen = amount * 121.12;
	var message3 = amount + ' euros converts to ' + yen; 
	
}

function euroToBitcoin(){
	
	var amount = parseInt(document.getElementById("value1").value);
	
	var bitcoin = amount * 0.00082;
	var message = amount + ' euros converts to ' + bitcoin; 
	
	
}


console.log(message);
doc.getElementById("resultsentence").innerHTML = message;
	
	
	