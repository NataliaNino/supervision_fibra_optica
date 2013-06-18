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
					 	for(var json in data){ 						
						 	json++; //Omite el registro 'encontrado'
						 	//alert(json);
						 	var tablag = "";
						 	//alert("Tabla Limpia: " +tablag);
						    for(var i in data[json]){ 					//Tabla
								 tablag = i;
								//alert("Tabla: " +tablag);
								TablaEliminar(tablag);					//ELIMINA TABLA EN LA BD
								var ValTabla="";
						    	for(var j in data[json][i]){ 			//Columna
						        	//alert(j);
						        	var columnas="";
						        	var col_valores="";
							    	for(var k in data[json][i][j]){ 			//Columna
							        	//alert(k+' '+data[json][i][j][k]);
							        	if (columnas==""){
							        		columnas = k;
							        	}else columnas = columnas+','+k;
							        	if (col_valores==""){
							        		col_valores = '"'+data[json][i][j][k]+'"';
							        	}else col_valores = col_valores+',"'+data[json][i][j][k]+'"';
							        	TablaGuardar(tablag,columnas,col_valores);
							    	}
							    	if(ValTabla==""){
							    		TablaCrear(tablag);					//CREAR TABLA EN LA BD
							    		ValTabla = "f";
							    	}
							    	
						    	}
							} 
						}
				}else{
					alert("No hay Actualización");
				} // $.each(data,function(index){}); 
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