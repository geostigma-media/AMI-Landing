<?php
header('Access-Control-Allow-Origin: *');
require_once('PHPMailer/PHPMailerAutoload.php');
if ($_POST ) {
  $total = $_REQUEST[ 'segundos' ];
  $correo = $_REQUEST[ 'email' ];
  $nombre = $_REQUEST[ 'nombre' ];
  $aux1 = $_REQUEST[ 'cantidad' ] / $total;
  $palabras = round( $aux1  * 60 );
  $aciertos = ( $_REQUEST[ 'pregunta1' ] + $_REQUEST[ 'pregunta2' ] + $_REQUEST[ 'pregunta3' ] + $_REQUEST[ 'pregunta4' ] + $_REQUEST[ 'pregunta5' ]) * 25;
  $fechaS = date( 'Y-m-d H:m:s' );
  $asunto = '[AMI] - ' . $_SERVER[ 'HTTP_HOST' ];
  $mensaje = "
<html>
<head>
<title>:.. AMI ..:</title>
</head>
<body>
<div style='margin-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; background-color: #f2f2f2; width: 100%; height: 100%'>
  <div class='contenedor' style='text-align: center; width: 650px; background: #fff; margin: auto; padding: 20px;'> <img src='https://marketing.lectorami.co/img/header-mail.png'>
    <h2 style='color: #1961a7; text-align: center; font-weight: 900;'><b>" . $_REQUEST[ 'nombre' ] . "</b></h2>
    <br />
    <h3>Tu velocidad fue de " . $palabras . " palabras por minuto, con una comprensión del " . $aciertos . "% .</h3>
    <p style=' text-align: center;'></p>
    Fecha Envio: " . $fechaS . "<br>
    <br>
    <footer style='background: #1961a7; color: #fff; padding: 20px; text-align: center;'><a style='color: #fff' href='https://www.lectorami.com' target='_blank'>www.lectorami.com</a></footer>
    <p style='padding: 10px; text-align: center;'>NOTA:</b> Por favor, no responder a este correo automatico.
    <p> 
  </div>
</div>
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

  $to = "gerencia@lectorami.com";
  //$to = 'dyegovallejob@gmail.com';
  $subject = "Diagnostico Lectura - AMI: ". $correo;
  $message = $mensaje;
  $mail->From = $correo;
  $mail->FromName = $nombre;
  $mail->addAddress( $to, "AmiVirtual" );
  $mail->Subject = $subject;
  $mail->MsgHTML( $mensaje );
  $mail->send();

  $mensaje = "
 <html>
<head>
<title>:.. AMI ..:</title>
</head>
<body>
<div style='margin-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; background-color: #f2f2f2; width: 100%; height: 100%'>
  <div class='contenedor' style='text-align: center; width: 650px; background: #fff; margin: auto; padding: 20px;'> <img src='https://marketing.lectorami.co/img/header-mail.png'>
    <h2 style='color: #1961a7; text-align: center; font-weight: 900;'><b>" . $_REQUEST[ 'nombre' ] . "</b></h2>
    <br />
    <h3>Tu velocidad fue de " . $palabras . " palabras por minuto, con una comprensión del " . $aciertos . "% .</h3>
    <p style=' text-align: center;'></p>
    Fecha Envio: " . $fechaS . "<br>
    <br>
    <footer style='background: #1961a7; color: #fff; padding: 20px; text-align: center;'><a style='color: #fff' href='https://www.lectorami.com' target='_blank'>www.lectorami.com</a></footer>
    <p style='padding: 10px; text-align: center;'>NOTA:</b> Por favor, no responder a este correo automatico.
    <p> 
  </div>
</div>
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

  $from = "gerencia@lectorami.com";
  $fromName = "Lector AMI";
  $to = $correo;
  $subject = "Diagnostico Lectura - AMI";
  $message = $mensaje;
  $mail->From = $from;
  $mail->FromName = $fromName;
  $mail->addAddress( $to, $nombre );
  $mail->Subject = $subject;
  $mail->MsgHTML( $mensaje );
  $mail->send();
}


