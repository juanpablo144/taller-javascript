piramideA(9)
piramideB(9)
piramideC()
	function num_primo(numero){
		if(numero % 2 == 0){
			return true;
		}else{
			return false;
		    }
		}
        function piramideA(base){
            document.write("Figura A <br />");
            for (i=1; i<=base; i++){
                    validate = num_primo(i);
                for (j=0; j<i; j++){
                                    if(!validate){
                                    document.write("*");
                                    }
                }
                        if(validate){
                            document.write("<br />");
                        }
            }
                for (i=base; i>=0; i--){
                    validate = num_primo(i);
                    if(i != 9){
                        for (j=0; j<i; j++){
                                    if(!validate){
                                    document.write("*");
                                    }
                }
                    }
                        if(!validate){
                            document.write("<br />");
                        }

            }

        }

        function piramideB(base){
                document.write("Figura B <br />");

                for (i=base; i>=0; i--){
                    validate = num_primo(i);
                        for (j=0; j<i; j++){
                                    if(!validate){
                                    document.write("*");
                                    }
                }
                        if(!validate){
                            document.write("<br />");
                        }

            }

                for (i=1; i<=base; i++){
                    validate = num_primo(i);
                    if(i != 1){
                        for (j=0; j<i; j++){
                                    if(!validate){
                                    document.write("*");
                                    }
                        }
                        if(!validate){
                            document.write("<br />");
                        }
                    }

            }

        }

        function piramideC(){
            var numero =  prompt("Ingrese un numero");
            document.write("Figura C: "+numero+" <br />");
            for (i=numero; i>=0; i--){

                    for (j=0; j<i; j++){

                                document.write("*");

                    }

                        document.write("<br />");


            }
        }
