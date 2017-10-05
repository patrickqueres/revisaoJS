// JavaScript 

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
 

function rodar() {
	var palavra = document.querySelector("#valor1").value;
	
	if (palindrome(palavra) == true){
		document.querySelector("#resultado").innerHTML="É um palíndromo.";
	} else {
		document.querySelector("#resultado").innerHTML="Não é palíndromo.";
	}
	
}