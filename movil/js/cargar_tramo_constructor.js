/**
 * @author juan.garzon 2013-JUN-20
 */
function Cargar_lista(){	//alert("cargar lista");		//$("<option value='0'>juancho</option>").appendTo("#constructor");	//adicionar_cons();
	var num_cons = $('#constructor option').length;
	if (num_cons == 0)
	{
		db.transaction(ObtenerItems, errorCB);
	}
	
}
function ObtenerItems(tx) {
    tx.executeSql('SELECT * FROM constructores', [], MuestraItems, errorCB);
	tx.executeSql('SELECT * FROM tramos', [], CargarTramos, errorCB);
}
function MuestraItems(tx, results) {
    var len = results.rows.length;													//alert(len);
    for (var i=0; i<len; i++){
    	$("<option value='"+results.rows.item(i).id+"'>"+results.rows.item(i).nombre+"</option>").appendTo("#constructor");
    } 

}
function CargarTramos(tx, results) {
    var len = results.rows.length;													//alert(len);
    for (var i=0; i<len; i++){
    	$("<option value='"+results.rows.item(i).gid+"'>"+results.rows.item(i).nombre_ruta+"</option>").appendTo("#tramo");
    } 
}
Cargar_lista();
