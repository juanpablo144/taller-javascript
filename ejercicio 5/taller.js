respuesta = prompt("Ingrese una palabra o frase");
frase = respuesta.split("");
alreves = frase.reverse();

var espacios = 0;
var letras;
for (i = 0; i < respuesta.length; i++) {
    if(respuesta.charAt(i) == " "){
        espacios++
    }
}
letras = respuesta.length - espacios;
alreves = alreves.join("");


alert("Tu palabra al reves es" + "\n" + alreves + "\n" + "tiene " + letras + " letras y " + espacios + " espacios")