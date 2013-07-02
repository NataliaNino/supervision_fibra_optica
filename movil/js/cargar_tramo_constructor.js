/**
 * @author juan.garzon 2013-JUN-20
 */
function Cargar_lista(){	//alert("cargar lista");		//$("<option value='0'>juancho</option>").appendTo("#constructor");	//adicionar_cons();
	//$.mobile.showPageLoadingMsg();
	var num_cons = $('#constructor option').length;
	if (num_cons == 0)
	{
		db.transaction(ObtenerItems);
	}
}
function ObtenerItems(tx) {
    tx.executeSql('SELECT * FROM constructores', [], MuestraItems);
	tx.executeSql('SELECT * FROM tramos', [], CargarTramos);
}
function MuestraItems(tx, results) {
    var len = results.rows.length;	
    $("<option value='0'> </option>").appendTo("#constructor");												//alert(len);
    for (var i=0; i<len; i++){
    	$("<option value='"+results.rows.item(i).id+"'>"+results.rows.item(i).nombre+"</option>").appendTo("#constructor");
    } 

}
function CargarTramos(tx, results) {
    var len = results.rows.length;													//alert(len);
    $("<option value='0'> </option>").appendTo("#tramo");
    for (var i=0; i<len; i++){
    	$("<option value='"+results.rows.item(i).gid+"'>"+results.rows.item(i).nombre_ruta+"</option>").appendTo("#tramo");
    }
    
	$.mobile.hidePageLoadingMsg();
}
Cargar_lista();

$(document).ready(function(){
	$("#btn_ingresar").click(function () {			//alert("li Click");
		var id_constructor = $("#constructor").val();	//alert("COns: "+id_constructor);
		if (id_constructor == 0){
			alert("Seleccione el constructor por favor!");
			$("#constructor").focus();
			return;
		}
		var id_tramo = $("#tramo").val();
		if (id_tramo == 0){
			alert("Seleccione el Tramo por favor!");
			$("#tramo").focus();
			return;
		}		
		var nom_constructor = $("#constructor option:selected").text();
		var nom_tramo = $("#tramo option:selected").text();
		//alert(id_constructor+" "+nom_constructor);
		//alert(id_tramo+" "+nom_tramo);
		sessionStorage.setItem("id_tramo", id_tramo);
		sessionStorage.setItem("nom_tramo", nom_tramo);
		sessionStorage.setItem("id_constructor", id_constructor);
		sessionStorage.setItem("nom_constructor", nom_constructor);
		window.location = "menu_principal.html";
		//alert(opcion_seleccionada);	//menu_principal.html
	
	})
})
