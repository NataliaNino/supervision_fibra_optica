/**
 * @author JUAN PABLO GARZON DUEÑAS
 * @Fecha 2013-Junio 17
 */

$(window).load(function () {
		$.ajax({
			url:'http://localhost:8080/ws/grodco/servicios/actualizar_parametros.php',
			dataType: 'json',
			success: function(data){
				if (data[0].encontrado == "true"){
						$.mobile.showPageLoadingMsg();
					 	for(var json in data){ 						
						 	json++; //Omite el registro 'encontrado' //alert(json);	//var tablag = "";	//alert("Tabla Limpia: " +tablag);
						    for(var i in data[json]){ 					//Tabla
								tablag = i;
								Vtablag =tablag; 						//alert("Eliminar Tabla: " +tablag);
								db.transaction(TablaEliminarExe, errorCB);		//TablaEliminar(tablag);					//ELIMINA TABLA EN LA BD
								var ValTabla="";	//var Ncol = 0;							
								arr_tabla = new Array();
						    	for(var j in data[json][i]){ 			//Columna	
									arr_tabla[j] = [];
						        	var columnas="";
						        	var col_valores=""; //Ncol = 0
							    	for(var k in data[json][i][j]){ 			//Columna		//alert(k+' '+data[json][i][j][k]);
							        	if (columnas==""){
							        		columnas = k;
							        	}else columnas = columnas+','+k;
							        	if (col_valores==""){
							        		col_valores = '"'+data[json][i][j][k]+'"';
							        	}else col_valores = col_valores+',"'+data[json][i][j][k]+'"';	//alert(' j:'+j+' Ncol:'+Ncol+' --> Valor: '+data[json][i][j][k]);
							    	}
									if(ValTabla==""){	//CREAR TABLA EN LA BD		//("Crear Tabla: " +tablag);
							    		Vcolumnas = columnas;
							    		db.transaction(TablaCrearExe);
							    		ValTabla = "f";
							    	}	//alert('J: '+j+'  K: '+Ncol+'-->'+tablag+' '+columnas+' '+col_valores);	//Vcol_valores = col_valores;									//alert(Vcol_valores);	//InsertarSQL = InsertarSQL + 'INSERT INTO '+Vtablag+' ('+Vcolumnas+') values ('+col_valores+'); ';
									arr_tabla[j] = col_valores;					//alert(InsertarSQL);
						    	}
								arr_filas = j;
							} 
						}
						TablaGuardar();
						$.mobile.hidePageLoadingMsg();
				}else{
					alert("No hay Actualización");
				}
			},
			error: function (error) {
                  alert("No hay conexión en el servidor Principal");
            }
		})
});

$(document).ready(function(){
	$("li").click(function () {			//alert("li Click");	
		  	var str = $(this).val(); 	//var str = $(this.id).text();
		  	alert (str);
  		})
})