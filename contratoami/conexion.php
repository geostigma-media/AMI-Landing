<?php
 $usuario = "desarrollo_amivirtual";
 $nombre_base_de_datos = "desarrollo_contratoami";
 $contrasena = "63Zsel7^";
// $usuario = "root";
// $nombre_base_de_datos = "amipago";
// $contrasena = "root";
try{
	$base_de_datos = new PDO('mysql:host=localhost;dbname=' . $nombre_base_de_datos, $usuario, $contrasena);
}catch(Exception $e){
	echo "Ocurrió algo con la base de datos: " . $e->getMessage();
}
?>