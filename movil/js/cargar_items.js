/**
 * @author juan.garzon 2013-JUN-30
 */
 var nombre_tramo = sessionStorage.getItem("nom_tramo");
 var nombre_constructor = sessionStorage.getItem("nom_constructor");
 var id_actividad = sessionStorage.getItem("id_actividad");
 $("#n_constructor").html("<strong>Constructor: "+nombre_constructor+"</strong>");
 $("#n_tramo").html("<strong>Tramo: "+nombre_tramo+"</strong><br><br><br>");					//$("#menu").html('<a data-role="button" data-theme="a">AFSDFASDF</a>');  //data-icon="arrow-r" data-iconpos="right"//$("#menu").html('<select name="constructor" id="constructor" data-native-menu="true"></select><br>');
	
var db = window.openDatabase("bdmovil", "1.0", "Proyecto Supervisión Azteca", 200000);
function ConsultaItems(tx) {	//alert('SELECT * FROM actividades_hallazgos');
	tx.executeSql('SELECT * FROM actividades_hallazgos where id_actividad = "'+id_actividad+'" and activo like "S%"', [], ConsultaItemsCarga);
}
function ConsultaItemsCarga(tx, results) {
	var len = results.rows.length;	//alert(len);
	for (i = 0; i < len; i++){
		var rta = results.rows.item(i).tipo_rta;
		//alert(rta);
		if (rta == "SELECCION"){
			$("#items").append(''+results.rows.item(i).descripcion_item+': <br/><input type="radio" id="radiocu'+i+'" name="radio'+i+'" value="all"><label for="radiocu'+i+'">Cumple</label><input type="radio" id="radionc'+i+'" name="radio'+i+'"value="false"><label for="radionc'+i+'">No cumple</label><input type="radio" id="radiona'+i+'" name="radio'+i+'" value="true"><label for="radiona'+i+'">No Aplica</label><br><label for="observacion'+i+'">Observaci&oacute;n:</label><textarea name="observacion'+i+'" id="observacion'+i+'" width="80%"></textarea><br/><br/>');
		}else
		{
			$("#items").append(''+results.rows.item(i).descripcion_item+': <br/><label for="Cantidad'+i+'">Cantidad:</label><input type="number" name="Cantidad'+i+'" id="Cantidad'+i+'" width="80%" onkeypress="if (event.keyCode< 48 || event.keyCode > 57) event.returnValue = false;"/><br/><br/>');
			
		}
   	}
   	/* $('head').append('<link href="./css/skins/all.css?v=0.9.1" rel="stylesheet">');
   	$.getScript("./js/jquery.min.js");
   	$.getScript("./js/jquery.icheck.min.js?v=0.9.1"); */
   	//alert("hi");

}
$(document).ready(function(){
/*	$("div,a").on("click", "a", function (event) {
    var id_evento = $(this).attr('id');
    var pagina = $(this).text();
	sessionStorage.setItem("id_evento", id_evento);
	window.location = pagina+".html";
}); */

})

// CARGAR MENU DE LA BASE DE DATOS
db.transaction(ConsultaItems); 