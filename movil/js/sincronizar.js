/**
 * @author juan.garzon 2013-JUN-20
 */
 var nombre_supervisor = sessionStorage.getItem("nombre");
 var nombre_tramo = sessionStorage.getItem("nom_tramo");
 var nombre_constructor = sessionStorage.getItem("nom_constructor");
 $("#n_supervisor").html("<strong>Supervisor: "+nombre_supervisor+"</strong><br>");
 $("#n_constructor").html("<strong>Constructor: "+nombre_constructor+"</strong>");
 $("#n_tramo").html("<strong>Tramo: "+nombre_tramo+"</strong><br><br><br>");					//$("#menu").html('<a data-role="button" data-theme="a">AFSDFASDF</a>');  //data-icon="arrow-r" data-iconpos="right"//$("#menu").html('<select name="constructor" id="constructor" data-native-menu="true"></select><br>');
	
var db = window.openDatabase("bdmovil", "1.0", "Proyecto Supervisión Azteca", 200000);
function ConsultaSincronizar(tx) {
	tx.executeSql('SELECT * FROM lista_chequeo_rtas', [], ConsultaSincronizarCarga);
}
function ConsultaSincronizarCarga(tx, results) {
	var len = results.rows.length;
	for (i = 0; i < len; i++){
		var parametros = new Object();
		parametros['id'] = results.rows.item(i).id;
		parametros['tramo'] = results.rows.item(i).tramo;
		parametros['constructor'] = results.rows.item(i).constructor;
		parametros['fecha_supervision'] = results.rows.item(i).fecha_supervision;
		parametros['usuario'] = results.rows.item(i).usuario;
		parametros['item'] = results.rows.item(i).item;
		parametros['respuesta'] = results.rows.item(i).respuesta;
		parametros['observacion'] = results.rows.item(i).observacion;
		$.ajax({
			data:  parametros,
			url:'http://localhost:808/servicios/sincronizar.php?',//url:'http://localhost:808/servicios/logueo.php?usr='+usr+'&pas='+pas,
			type:  'post',
		    beforeSend: function () {
		            $("#resultado").html("Procesando, espere por favor...");
		    },
			success: function(response){
				$("#resultado").before(response);
				//$("#resultado").html("Ok...");
			},
			error: function (error) {
				$("#resultado").text('Error');
		    }
		})
	
   	}
   	$("#resultado").after("Ok...Ok...Ok...Ok...Ok...Ok...Ok...Ok...");
   	
}	//$(document).ready(function(){ })
// CARGAR MENU DE LA BASE DE DATOS
db.transaction(ConsultaSincronizar);
