<?php
include 'conexion.php';
header('Access-Control-Allow-Origin: *');
require_once('PHPMailer/PHPMailerAutoload.php');

$nombre = $_POST['nombre'];
$noIdentificacion = $_POST['noIdentificacion'];
$direccion = $_POST['direccion'];
$telefono = $_POST['telefono'];
$ciudad = $_POST['ciudad'];
$correo = $_POST['email'];
$terminos = $_POST['terminos'];
$terminosCompra = $_POST['terminosCompra'];
$terminosCusro = $_POST['terminosCusro'];
$asesor = $_POST['asesor'];
$contrato = $_POST['contrato'];
$sqlvalidar='SELECT * FROM  datos where email=?';
$sentencia=$base_de_datos->prepare($sqlvalidar);
$sentencia->execute(array($correo));
$resultado=$sentencia->fetch();

if($resultado){
  echo "<script>
  alert('Error el correo ya fue registrada');
  window.location= './index.html'
  </script>";
  die();
}
if(!$resultado){
  $query="INSERT INTO datos (nombre,noIdentificacion,direccion,telefono,ciudad,email,terminos,terminosCompra,terminosCusro,asesor)  VALUES ('$nombre','$noIdentificacion','$direccion','$telefono','$ciudad','$correo','$terminos','$terminosCompra','$terminosCusro','$asesor')";
  $result = $base_de_datos->query($query);
  if($result) {
    if ($_POST) {
      $nombre = $_POST['nombre'];
      $noIdentificacion = $_POST['noIdentificacion'];
      $direccion = $_POST['direccion'];
      $telefono = $_POST['telefono'];
      $ciudad = $_POST['ciudad'];
      $correo = $_POST['email'];
      $terminos = $_POST['terminos'];
      $terminosCompra = $_POST['terminosCompra'];
      $terminosCusro = $_POST['terminosCusro'];
      $mensaje = "<h2 style='color:#cd0816'>Se registró un nuevo contrato en la base de datos</h2>
      <b>" . $_REQUEST[ 'nombre' ] . "</b>,<br>
                <h3>¡El registro de su contrato se realizó con exitoso!</h3>
                <br>
                <br>  
                <p>". $_REQUEST[ 'contrato' ]. "</p>
                <b>NOTA:</b> Por favor, no responder a este correo automatico.";
      $mensaje .= "<div style='margin: 20px 30px; font-size: 15px; color:#333;'>";
//    
      $mensaje .= "</div>";
      $mensaje .= "<hr><br>";
      $mail = new PHPMailer( true );
      $mail->CharSet = "UTF-8";
    
      $mail->IsSMTP();
      $mail->Host = "smtp.gmail.com";
      $mail->SMTPAuth = true;
      $mail->Username = "noreply@geostigmamedia.com";
      $mail->Password = "3n14c1976*";
      $mail->SMTPSecure = 'tls';
      $mail->Port = 587;
    
      $fromName = $clave;
      //$to = 'dyegovallejob@gmail.com';
      $to = 'gerencia@lectorami.com';
      $subject = 'Lector AMI - nuevo registro: '. $correo;
      $message = $clave;
      $mail->From = $correo;
      $mail->FromName = $nombre;
      $mail->addAddress($to, "AmiVirtual");
      $mail->Subject = $subject;
      $mail->MsgHTML( $mensaje );
      $mail->send();
      $fechaS = date( 'Y-m-d H:m:s' );
      $para = $_REQUEST[ 'email' ];           
      $asunto = '[AMI] - ' . $_SERVER[ 'HTTP_HOST' ];
      $mensaje = "
      <html>
            <head>
            <title>:.. AMI ..:</title>
            <style>
            .linkpag{
                text-decoration:none;
                color:#39F;
            }
            </style>
            </head>
            <body>    
            Fecha Envio: " . $fechaS . "<br><br>
            <br>
            <b>" . $_REQUEST[ 'nombre' ] . "</b>,<br>
            <h3>¡El registro de su contrato se realizó con exitoso!</h3>
            <br>
            <br>  
            <p>". $_REQUEST[ 'contrato' ]. "</p>
            <b>NOTA:</b> Por favor, no responder a este correo automatico.
            </body> 
      </html>";
      $mail = new PHPMailer( true );
      $mail->CharSet = "UTF-8";
      $mail->IsSMTP();
      $mail->Host = "smtp.gmail.com";
      $mail->SMTPAuth = true;
      $mail->Username = "noreply@geostigmamedia.com";
      $mail->Password = "3n14c1976*";
      $mail->SMTPSecure = 'tls';
      $mail->Port = 587;
      //$from = "dyegovallejob@gmail.com";
      $from = "gerencia@lectorami.com";
      $fromName = "Lector AMI";
      $subject = "Registro de contrato exitoso - Lector AMI Virtual";
      $message = $mensaje;
      $mail->From = $from;
      $mail->FromName = $fromName;
      $mail->addAddress( $para, $nombre );
      $mail->Subject = $subject;
      $mail->MsgHTML( $mensaje );
      $mail->send();
      header('Location: https://marketing.lectorami.co');
      exit;
    }
  }
}

