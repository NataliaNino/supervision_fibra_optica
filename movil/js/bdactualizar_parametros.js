var db = window.openDatabase("bdmovil", "1.0", "Proyecto Supervisión Azteca", 200000);
var Vtablag="";
var Vcolumnas="";
var arr_tabla = new Array();
var arr_filas=0;

function errorCB(err) {
	// Esto se puede ir a un Log de Error dir�a el purista de la oficina, pero como este es un ejemplo pongo el MessageBox.Show :P
    alert("Error processing SQL: Codigo: " + err.code + " Mensaje: "+err.message);
}

function successCB() {
    alert("TRANSACION Ok!");
}

function TablaEliminarExe(tx){
	alert('DROP TABLE IF EXISTS "'+Vtablag+'"');
	tx.executeSql('DROP TABLE IF EXISTS "'+Vtablag+'"');
}

function TablaCrearExe(tx){
	alert('CREATE TABLE IF NOT EXISTS '+Vtablag+' ('+Vcolumnas+')');
	tx.executeSql('CREATE TABLE IF NOT EXISTS '+Vtablag+' ('+Vcolumnas+')');
}
function TablaGuardar(){
		db.transaction(function(tx) {
			arr_filas++;
			for(var fil = 0; fil < arr_filas; fil++) {
				tx.executeSql('INSERT INTO '+Vtablag+' ('+Vcolumnas+') values ('+arr_tabla[fil]+')');
			}
		});
}