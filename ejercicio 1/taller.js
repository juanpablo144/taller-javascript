var numStudents = prompt("ingrese el numero de estudiantes a evaluar");
var notas = 0;
var aprobados = 0;
var reprobados = 0;
for(i = 1; i <= numStudents; i++) {
    respuesta = prompt("ingrese la nota del estudiante numero " + i)
    if (parseInt(respuesta) >= 4 && parseInt(respuesta) <= 5) {
        aprobados++;
    }else if(parseInt(respuesta) < 4 && parseInt(respuesta) >= 0){
        reprobados++;
    }else{
        alert("Tiene que ser una nota del 0 al 5");
    }
    notas = notas + parseInt(respuesta);
}
console.log("porcentaje aprobados = " + aprobados + " " + "* 100 " + "/ " + numStudents);
console.log("porcentaje reprobados = " + reprobados + " " + "* 100 " + "/ " + numStudents);
var porcentApro = (aprobados * 100) / numStudents;
var porcentRepro = (reprobados * 100) / numStudents;

alert("Porcentaje estudiantes aprobados "+ Math.round(porcentApro) + "%" + " Porcentaje estudiantes reprobados " + Math.round(porcentRepro) + "%");