var db = window.openDatabase("bdmovil", "1.0", "Proyecto Supervisión Azteca", 200000);
var Vtablag="";
var Vcolumnas="";
var Vcol_valores="";

function errorCB(err) {
	// Esto se puede ir a un Log de Error dir�a el purista de la oficina, pero como este es un ejemplo pongo el MessageBox.Show :P
    alert("Error processing SQL: Codigo: " + err.code + " Mensaje: "+err.message);
}

function successCB() {
    alert("TRANSACION Ok!");
}

function TablaEliminar(Vtab){
	Vtablag = Vtab;
	db.transaction(TablaEliminarExe, errorCB);
}
function TablaEliminarExe(tx){
	//alert('DROP TABLE IF EXISTS "'+Vtablag+'"');
	tx.executeSql('DROP TABLE IF EXISTS "'+Vtablag+'"');
}

function TablaCrear(Vtab,Vcol){
	Vtablag = Vtab;
	Vcolumnas=Vcol;
	db.transaction(TablaCrearExe);
}
function TablaCrearExe(tx){
	//alert('CREATE TABLE IF NOT EXISTS '+Vtablag+' ('+Vcolumnas+')');
	tx.executeSql('CREATE TABLE IF NOT EXISTS '+Vtablag+' ('+Vcolumnas+')');
}

function TablaGuardar(Vtab,Vcol,Vval){
	Vtablag = Vtab;
	Vcolumnas=Vcol;
	Vcol_valores=Vval;
	db.transaction(TablaGuardarExe);
}
function TablaGuardarExe(tx){
	//alert('INSERT INTO '+Vtablag+' ('+Vcolumnas+') values ('+Vcol_valores+')');
	tx.executeSql('INSERT INTO '+Vtablag+' ('+Vcolumnas+') values ('+Vcol_valores+')');
}