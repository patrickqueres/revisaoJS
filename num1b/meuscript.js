// JavaScript 


function calculevolume(){
	var largura=parseFloat(document.querySelector("#largura").value);
	var altura=parseFloat(document.querySelector("#altura").value);
	var comprimento=parseFloat(document.querySelector("#comprimento").value);
	var volume = (largura*altura*comprimento)/1000;
	
	
	document.querySelector("#resultado").value=volume + " litros";

	
}