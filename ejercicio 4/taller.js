var num = prompt("ingrese el número");
var divisores = 0;
var res;

 if((num % 2) == 0){
    res = "par";
 }else{
    res = "impar";
 }
 for (i = 1; i <= num + 1; i++) {
    if ((num % i) == 0 ) {
        divisores++
    }
 }
 if (divisores == 2){
    alert ("el numero es primo y es " + res)
 }else{
    alert ("el numero no es primo y es " + res)
 }