var day = prompt("Ingrese un day");
var mount = prompt("Ingrese un mount").toLowerCase();
var year = prompt("Ingrese un año");
var mountValue;
    if(!isNaN(mount)){
        if(mount == 01){
            mountValue = "Enero";
        }else if(mount == 02){
            mountValue = "Febrero";
        }else if(mount == 03){
            mountValue = "Marzo";
        }else if(mount == 04){
            mountValue = "Abril";
        }else if(mount == 05){
            mountValue = "Mayo";
        }else if(mount == 06){
            mountValue = "Junio";
        }else if(mount == 07){
            mountValue = "Julio";
        }else if(mount == 08){
            mount_value = "Agosto";
        }else if(mount == 09){
            mountValue = "Septiembre";
        }else if(mount == 10){
            mountValue = "Octubre";
        }else if(mount == 11){
            mountValue = "Noviembre";
        }else if(mount == 12){
            mountValue = "Diciembre";
        }
        alert("Tu fecha es: "+day+" de "+mountValue+" de "+year)
    }else{
        if(mount == "enero"){
            mountValue = 01;
        }else if(mount == "febrero"){
            mountValue = 02;
        }else if(mount == "marzo"){
            mountValue = 03;
        }else if(mount == "abril"){
            mountValue = 04;
        }else if(mount == "mayo"){
            mountValue = 05;
        }else if(mount == "junio"){
            mountValue = 06;
        }else if(mount == "julio"){
            mountValue = 07;
        }else if(mount == "agosto"){
            mountValue = 08;
        }else if(mount == "septiembre"){
            mountValue = 09;
        }else if(mount == "octubre"){
            mountValue = 10;
        }else if(mount == "noviembre"){
            mountValue = 11;
        }else if(mount == "diciembre"){
            mountValue = 12;
        }
        alert("Tu fecha es: "+day+"/"+mountValue+"/"+year)
    }