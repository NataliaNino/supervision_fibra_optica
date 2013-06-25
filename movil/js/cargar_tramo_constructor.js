/**
 * @author juan.garzon 2013-JUN-20
 */


function Cargar_lista(){	//alert("cargar lista");	//$("<option value='0'>juancho</option>").appendTo("#constructor");	//adicionar_cons();
	db.transaction(ObtenerItems, errorCB);
}
function ObtenerItems(tx) {
    tx.executeSql('SELECT * FROM constructores', [], MuestraItems, errorCB);
}
function MuestraItems(tx, results) {
	//adicionar_cons();
	//opcion0=new Option("Enero","Enero","defauldSelected");
	//document.tuformulario.constructor.options[0]=opcion0;	
//	$("<option value='1'>juancho</option>").appendTo("#constructor");
    //$("<option value='"+results.rows.item(0).id+"'>"+results.rows.item(0).nombre+"</option>").appendTo("#constructor");
    var len = results.rows.length;													//alert(len);
    for (var i=0; i<len; i++){
    	//alert(results.rows.item(i).id);
    	//arrItems[i][0] = results.rows.item(i).id;
    	//arrItems[i][1] = results.rows.item(i).nombre;
    	//alert(arrItems[i][0]);
    	//alert(arrItems[i][1]);
    	
    	//alert(i);	var arr_ListaTabla = new Array();
    	//$("<option value='1'>juancho</option>").appendTo("#constructor");
    	//$("<option value='1'>juancho</option>").appendTo("#constructor");				//alert(len);
    	//alert("<option value='"+results.rows.item(i).id+"'>"+results.rows.item(i).nombre+"</option>");
    	//$("<option value='1'>juancho</option>").appendTo("#constructor");
    	$("<option value='"+results.rows.item(i).id+"'>"+results.rows.item(i).nombre+"</option>").appendTo("#constructor");
    } 
    //Imprimir_Items()
}

Cargar_lista();

/* function adicionar_cons(){
	//alert("hi");
	//$("<option value='1'>juancho</option>").appendTo("#constructor");
	opcion0=new Option("Enero","Enero","defauldSelected");
	document.tuformulario.constructor.options[0]=opcion0;
} */
/*function Imprimir_Items(){	
	var len = arrItems.length;
	//alert("Imp lista: "+len);
	for (var n=0; n<len; n++){
		//alert(arrItems[n]);
	}
	$("<option value='1'>juancho</option>").appendTo("#constructor");
} */

//$("").append("#miselect");
//Cargar_lista();
//jQuery("#miselect").append("<option value='5'>POR FIN!!!</option>");
//$("<option value='5'>Scientific Linux</option>").appendTo("#miselect");
//alert('Natu');
//$("<option value='5'>Scientific Linux</option>").appendTo("#constructor");
//alert($("#constructor").val())			//<option value="3">Red Hat</option>
//$("#miselect option[value='3']").remove();
//$("<option value='1'>juancho</option>").appendTo("#constructor");
//alert('Natu');
//Cargar_lista();