<?php 
	/* /header('Content-Type: text/javascript; charset=utf8');
	
    header('Access-Control-Allow-Origin: https://localhost:808');
	"Access-Control-Allow-Origin" : "*"
    header('Access-Control-Max-Age: 3628800');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); */
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
	
require_once("conexion.php"); ?>
<?php
$usuario = $_GET['usr'];
$clave = $_GET['pas'];

$query_sql = "SELECT  *  FROM  usuarios  WHERE upper(usuario) = '$usuario' and upper(contrasegna) = '$clave'"; //echo "$query_sql<br>";
$resultado = pg_query($cx,$query_sql) or die('No pudo conectarse ');
$total_filas = pg_num_rows($resultado);									//echo "Filas: $total_filas<br>";

$geters = array();														//INICIALIZAMOS LA MATRIZ DE RESPUESTA
//DEVUELVE la entrada
$object = new stdClass();
if ($total_filas == 0){
	$object->encontrado = "false";
}else{
	$object->encontrado = "true";
}
$geters[0] = $object;

while ($fila = pg_fetch_assoc($resultado)) {
	$object = new stdClass();
	$object = (object)$fila;
	$geters[] = $object;
}
//$geters = trim($geters);
echo json_encode($geters);		//echo print_r($geters);
?>