for (i = 1; i <= 10; i++) {
    var tabla = Array();
    for (j = 1; j <= 10; j++) {
        tabla[j-1] = i + " x " + j + " " + "= " + i * j + "\n";
    }
    tabla = tabla.join("");
    alert(tabla)
    console.log(tabla)
}