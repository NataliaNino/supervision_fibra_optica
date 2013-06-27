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
