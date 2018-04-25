function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);
  

  var pounds = amount * 0.86;
  var usd = amount * 1.06;
  var yen = amount * 121.12;
  var bitcoin = amount * 0.00082;
  
  
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
  var message = amount + ' euros converts to ' + usd; 
  var message = amount + ' euros converts to ' + yen; 
  var message = amount + ' euros converts to ' + bitcoin; 
  

  
  console.log(message);
  doc.getElementById("resultsentence").innerHTML = message;

}