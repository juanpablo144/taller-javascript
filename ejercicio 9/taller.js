var palabra = prompt("Escribe una frase y sabrás si es un Palindromo","amor a roma");

	fraseEval=palabra.toLowerCase().replace(/\s/g,"");
	palabraAtras=fraseEval.split("").reverse().toString();
	
	for (var i = 0; i < ((palabraAtras.length)-1); i++) {
		palabraAtras=palabraAtras.replace(",","");
	};

	if(fraseEval==palabraAtras){
		resultado="es un Palindromo";
	}else{
		resultado="no es un Palindromo";
    }
    alert("Tu frase "+resultado);