<?php require_once("conexion.php"); ?>
<?php
$serial = 0;
$serial2 = 0;
$query_sql = "select id from info_sistema where estado_sincronizar = 'SI'"; //echo "$query_sql<br>";
$resultado = pg_query($cx,$query_sql) or die('No pudo conectarse ');
$total_filas = pg_num_rows($resultado);		//echo "Filas: $total_filas<br>";

$geters = array();			//INICIALIZAMOS LA MATRIZ DE RESPUESTA
$arr_fila = array();			//INICIALIZAMOS LA MATRIZ DE RESPUESTA
//DEVUELVE la entrada
$object = new stdClass(); 					//(1)
if ($total_filas == 0){
	$object->encontrado = "false";			//(2)
}else{
	$object->encontrado = "true";			//(2)	
}
$geters[$serial] = $object; 				//(3)
$serial ++;

//DEFINICION DE TABLA//////////////////
$tabla = "eventos_chequeo";
$query_sql = "SELECT  *  FROM ".$tabla; 						//echo "$query_sql<br>";
$resultado = pg_query($cx,$query_sql) or die('No pudo conectarse ');
$total_filas = pg_num_rows($resultado);									//echo "Filas: $total_filas<br>";
///////////////////////////////////////
while ($fila = pg_fetch_assoc($resultado)) {
	$object2 = (object)$fila;
	$arr_fila[$serial2] = $object2;
	$serial2++;
}  

$object = new stdClass();
$object->$tabla = $arr_fila;
$geters[$serial] = $object;


echo json_encode($geters);

pg_close($cx);
?>
<?
function test() {
  return;
}
?>