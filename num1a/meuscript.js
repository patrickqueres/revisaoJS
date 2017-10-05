// JavaScript 


function calculemedia(){
	var nome=document.querySelector("#nome").value
	var n1=parseFloat(document.querySelector("#nota1").value);
	var n2=parseFloat(document.querySelector("#nota2").value);
	var n3=parseFloat(document.querySelector("#nota3").value);
	var n4=parseFloat(document.querySelector("#nota4").value);
	var media = (n1+n2+n3+n4)/4;
	
	
	document.querySelector("#resultado").value=media;

	if (media <= 4){
		alert(nome + ", você está reprovado!");
	} else if (media >= 4 && media < 7) {
		alert(nome + ", você terá que fazer a prova Final!");
	} else if (media >= 7) {
		alert("Parabéns, " + nome + "! Você está APROVADO!");
	} 
}