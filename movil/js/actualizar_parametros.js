/**
 * @author JUAN PABLO GARZON DUEÑAS
 * @Fecha 2013-Junio 17
 */
$(window).load(function () {
	//probando comentario Natalia 
		$.ajax({
			url:'http://200.21.69.126:8088/supervision_fibra_optica/servicios/actualizar_parametros.php',
			dataType: 'json',
			success: function(data){
				if (data[0].encontrado == "true"){
						$.mobile.showPageLoadingMsg(); //miguel.
						arr_ListaTabla = new Array();
						arr_tabla = new Array();
						var ttal_reg = 0;
					 	for(var json in data){ 						
						 	json++; //Omite el registro 'encontrado' //alert(json);	//var tablag = "";	//alert("Tabla Limpia: " +tablag);
						    for(var i in data[json]){			//Tabla		//tablag = i;	//Vtablag= i;	//alert("Eliminar Tabla: " +tablag);
								var ValTabla="";	//var Ncol = 0;							
						    	for(var j in data[json][i]){ 			//Columna	
						        	var columnas="";
						        	var col_valores=""; //Ncol = 0
							    	for(var k in data[json][i][j]){ 			//Columna		//alert(k+' '+data[json][i][j][k]);
							        	if (columnas==""){
							        		columnas = k;
							        	}else columnas = columnas+','+k;
							        	if (col_valores==""){
							        		col_valores = '"'+data[json][i][j][k]+'"';
							        	}else col_valores = col_valores+',"'+data[json][i][j][k]+'"';	//alert(' j:'+j+' Ncol:'+Ncol+' --> Valor: '+data[json][i][j][k]);
							    	}	/*if(ValTabla==""){	//CREAR TABLA EN LA BD	//("Crear Tabla: " +tablag);	Vcolumnas = columnas;	//db.transaction(TablaCrearExe);	ValTabla = "f";	} */
									//arr_ListaTabla[json-1][1] = [];	//arr_ListaTabla[json-1][1] = columnas;	alert('Reg: '+json+': '+arr_ListaTabla[json][1]);	//alert('J: '+j+'  K: '+Ncol+'-->'+tablag+' '+columnas+' '+col_valores);	//Vcol_valores = col_valores;									//alert(Vcol_valores);	//InsertarSQL = InsertarSQL + 'INSERT INTO '+Vtablag+' ('+Vcolumnas+') values ('+col_valores+'); ';
									arr_tabla[ttal_reg] = [];
									arr_tabla[ttal_reg][0] = i;					//alert(InsertarSQL);	//alert('Col: '+Vcolumnas);
									arr_tabla[ttal_reg][1] = columnas;					//alert(InsertarSQL);	//alert('Col: '+Vcolumnas);
									arr_tabla[ttal_reg][2] = col_valores;					//alert(InsertarSQL);	//alert('Col: '+Vcolumnas); //alert(arr_tabla[ttal_reg][0]+' '+arr_tabla[ttal_reg][1]+' '+arr_tabla[ttal_reg][2]);
									ttal_reg++;
						    	}
								if (i != "" && i != null) {
									var numm  = json-1;								//alert('MMM: '+numm);
									arr_ListaTabla[json-1] = [];
									arr_ListaTabla[json-1][0] = i;					//alert('Reg: '+json-1+': '+arr_ListaTabla[json-1][0]);
									arr_ListaTabla[json-1][1] = columnas;			//alert('Reg: '+json-1+': '+arr_ListaTabla[json-1][1]);
								}	//db.transaction(TablaEliminarExe, errorCB);		//TablaEliminar(tablag);					//ELIMINA TABLA EN LA BD
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
	
/*	var refreshId = setInterval( function() 
    {
        //alert("3 segundos");
        //var len = arrItems.length;													//alert(len);
        $("<option value='1'>juancho</option>").appendTo("#constructor");
	    //for (var i=0; i<len; i++){
	    	//$("<option value='1'>juancho</option>").appendTo("#constructor");
	    	//$("<option value='"+arrItems[i][0]+"'>"+arrItems[i][1]+"</option>").appendTo("#constructor");
	    	//alert(arrItems[i]);
	    	//alert(i);	var arr_ListaTabla = new Array();
	    	//$("<option value='1'>juancho</option>").appendTo("#constructor");
	    	//$("<option value='1'>juancho</option>").appendTo("#constructor");				//alert(len);
	    	//alert("<option value='"+results.rows.item(i).id+"'>"+results.rows.item(i).nombre+"</option>");
	    	//$("<option value='1'>juancho</option>").appendTo("#constructor");
	    	//$("<option value='"+results.rows.item(i).id+"'>"+results.rows.item(i).nombre+"</option>").appendTo("#constructor");
	    //} 
    }, 2000); */
})