var numPersonas = prompt("ingrese el número de personas");
var edades = 0;
for(i = 1; i <= numPersonas; i++) {
    respuesta = prompt("ingrese la edad de la persona numero " + i)
    edades = edades + parseInt(respuesta);
}

promedio = edades / numPersonas;

console.log("promedio = " + "(suma edades)" + edades + "/ (numero de personas)" + numPersonas);

alert("Total suma de las edades "+ edades + " Promedio de edad " + promedio);