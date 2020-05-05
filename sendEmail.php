<?php
header( 'Access-Control-Allow-Origin: *' );
require_once( 'PHPMailer/PHPMailerAutoload.php' );
if ( $_POST ) {
  $nombre = $_REQUEST[ 'nombre' ];
  $correo = $_REQUEST[ 'correo' ];
  $telefo = $_REQUEST[ 'celular' ];
  $ciudad = $_REQUEST[ 'ciudad' ];
  $miedad = $_REQUEST[ 'miedad' ];
  $edadhijo = $_REQUEST[ 'edadhijo' ];
  $datos = $_REQUEST[ 'datos' ];
  $mensaje = "<h2 style='color:#cd0816'>Hay un nuevo cliente interesado</h2>";
  $mensaje .= "<div style='margin: 20px 30px; font-size: 15px; color:#333;'>";

  foreach ( $_POST as $clave => $valor ) {
    if ( $valor != '' ) {
      if ( $clave == 'miedad' ) {
        $mensaje .= "<span style='color:#0F417A;font-weight: bold'> Para mi </span>:  " . $valor . "<br>";
      } elseif ( $clave == 'edadhijo' ) {
        $mensaje .= "<span style='color:#0F417A;font-weight: bold'> Para mi hijo </span>:  " . $valor . "<br>";
      } else {
        $clave = mb_convert_case( $clave, MB_CASE_TITLE, "UTF-8" );
        $mensaje .= "<span style='color:#0F417A;font-weight: bold'>" . $clave . "</span>:  " . $valor . "<br>";
      }
    }
  }
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
  $subject = 'Lector AMI - nuevo registro: ' . $correo;
  $message = $clave;
  $mail->From = $correo;
  $mail->FromName = $nombre;
  $mail->addAddress( $to, "AmiVirtual" );
  $mail->Subject = $subject;
  $mail->MsgHTML( $mensaje );
  $mail->send();


  $fechaS = date( 'Y-m-d H:m:s' );
  $para = $_REQUEST[ 'correo' ];
  $asunto = '[AMI] - ' . $_SERVER[ 'HTTP_HOST' ];
  $mensaje = "
  <html>
<head>
<meta charset='utf-8'>
<title>Lector AMI Virtual</title>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<style type='text/css'>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap');
body {
    margin-left: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    background-color: #f2f2f2;
    font-family: 'Roboto', sans-serif;
}
img {
    display: block;
    width: 100%;
}
</style>
</head>

<body>
<div style='margin-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; background-color: #f2f2f2; width: 100%; height: 100%'>
<div class='contenedor' style='width: 650px; background: #fff; margin: auto;'> 
	<img style='display: block; width: 100%;' src='https://marketing.lectorami.co/img/mail-01.png' >
  <h2 style='color: #1961a7; text-align: center; font-weight: 900;'>Hola  <b>" . $_REQUEST[ 'nombre' ] . "</b></h2>
  <div class='head'> <img style='display: block; width: 100%; padding-bottom: 40px;' src='https://marketing.lectorami.co/img/mail-02.png'> </div>
	<img style='display: block; width: 100%;' src='https://marketing.lectorami.co/img/mail-03.png' >
	<img style='display: block; width: 100%;' src='https://marketing.lectorami.co/img/mail-04.png' >
	<img style='display: block; width: 100%;' src='https://marketing.lectorami.co/img/mail-05.png' >
	<footer style='background: #1961a7; color: #fff; padding: 20px; text-align: center;'><a style='color: #fff' href='https://www.lectorami.com' target='_blank'>www.lectorami.com</a></footer>
	<p style='padding: 20px; text-align: center;'>NOTA:</b> Por favor, no responder a este correo automatico.<p>
</div>
</div>
</body>
</html>
";
  $mail = new PHPMailer( true );
  $mail->CharSet = "UTF-8";
  $mail->IsSMTP();
  $mail->Host = "smtp.gmail.com";
  $mail->SMTPAuth = true;
  $mail->Username = "noreply@geostigmamedia.com";
  $mail->Password = "3n14c1976*";
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;
  $from = "gerencia@lectorami.com";
  $fromName = "Lector AMI";
  $subject = "Diagnostico Lectura - AMI";
  $message = $mensaje;
  $mail->From = $from;
  $mail->FromName = $fromName;
  $mail->addAddress( $para, $nombre );
  $mail->Subject = $subject;
  $mail->MsgHTML( $mensaje );
  $mail->send();

}