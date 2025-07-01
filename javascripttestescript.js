//Comentário
/*Comentário
de múltiplas
 linhas*/
let nome = "João";
const idade = 20;
var cidade = "São Paulo";
let resultado = 5 + 3;
console.log("O resultado é:", resultado);


function verificarParidade(){

	let numero = prompt("Digite um número:")	

	if(numero%2 === 0){
		console.log("O número é par.");
	} else {
		console.log("O número é ímpar.");
	}

	document.getElementById("paragraph").textContent = numero;
	
}



