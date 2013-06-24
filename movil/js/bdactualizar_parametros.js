var db = window.openDatabase("bdmovil", "1.0", "Proyecto Supervisión Azteca", 200000);
var Vcolumnas="";
var arr_tabla = new Array();
var arr_ListaTabla = new Array();
var arr_tablas=0;

function errorCB(err) {
	// Esto se puede ir a un Log de Error dir�a el purista de la oficina, pero como este es un ejemplo pongo el MessageBox.Show :P
    alert("Error processing SQL: Codigo: " + err.code + " Mensaje: "+err.message);
}

function successCB() {
    alert("TRANSACION Ok!");
}

function TablaGuardar(){
	db.transaction(function(tx) {								//alert("Longitud: "+arr_ListaTabla.length);
		for(var fil = 0; fil < arr_ListaTabla.length; fil++) {	//alert('Registro: '+fil+': '+arr_ListaTabla[fil]);	//alert('DROP TABLE IF EXISTS '+arr_ListaTabla[fil][0]+';');	//alert('CREATE TABLE IF NOT EXISTS '+arr_ListaTabla[fil][0]+' ('+arr_ListaTabla[fil][1]+')');
			tx.executeSql('DROP TABLE IF EXISTS '+arr_ListaTabla[fil][0]+';');
			tx.executeSql('CREATE TABLE IF NOT EXISTS '+arr_ListaTabla[fil][0]+' ('+arr_ListaTabla[fil][1]+')');
		}	//alert("Longitud: "+arr_tabla.length);
		for(var fil = 0; fil < arr_tabla.length; fil++) {
			tx.executeSql('INSERT INTO '+arr_tabla[fil][0]+' ('+arr_tabla[fil][1]+') values ('+arr_tabla[fil][2]+')');
		} 
	});
}