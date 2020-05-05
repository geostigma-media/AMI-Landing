<?php
header( 'Access-Control-Allow-Origin: *' );
require_once( '../PHPMailer/PHPMailerAutoload.php' );
if ( $_POST ) {
  $nombre = $_POST[ 'nombreEstudiante' ];
  $emailEstudiante = $_POST[ 'emailEstudiante' ];
  $tipoContrato = $_POST[ 'tipoContrato' ];
  $linkPago = $_POST[ 'linkPago' ];
  $emailAsesor = $_POST[ 'emailAsesor' ];
  $fechaS = date( 'Y-m-d H:m:s' );
  $para = $_REQUEST[ 'emailEstudiante' ];
  $asunto = '[AMI] - ' . $_SERVER[ 'HTTP_HOST' ];
  $mensaje = "
  <html>
        <head>
        <title>:.. AMI ..:</title>
        <style>
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
        .linkpag{
            text-decoration:none;
            color:#39F;
        }
        </style>
        </head>
        <body>    
       
       
       
        <div style='margin-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; background-color: #f2f2f2; width: 100%; height: 100%'>
<div class='contenedor' style='width: 650px; background: #fff; margin: auto;'> 
 <h3 style='text-align: center;'>" . $_REQUEST[ 'nombreEstudiante' ] . " ,Gracias por elegirnos.</h3>
       
	<img style='display: block; width: 100%;' src='https://marketing.lectorami.co/contratoami/asesor/img/01.png' >
 
   <img style='display: block; width: 100%; padding-bottom: 40px;' src='https://marketing.lectorami.co/contratoami/asesor/img/02.png'> 
	
	";

  if ( $tipoContrato == 6 ) {
    $mensaje .= '
      <h3 style=" text-align: center;">Proceso de Matrícula</h3>
      <a style="background: #ec1a24; color: #fff; display: block; padding: 5px 25px; text-align: center; border-radius: 25px; font-size: 24px; text-decoration: none; width: 70%; margin: auto;" href="https://marketing.lectorami.co/contratoami/contratoCutoas.html?asesor=' . $emailAsesor . '">Diligenciar contrato</a>
      
    ';
  } elseif ( $tipoContrato == 12 ) {
    $mensaje .= '
      
	  <img style="display: block; width: 100%;" src="https://marketing.lectorami.co/contratoami/asesor/img/03.png" >
	<img style="display: block; width: 100%;" src="https://marketing.lectorami.co/contratoami/asesor/img/004.png" >
	<h3 style=" text-align: center; padding-bottom: 30px;">Proceso de Matrícula</h3>
      <a style="background: #ec1a24; color: #fff; display: block; padding: 5px 25px; text-align: center; border-radius: 25px; font-size: 24px; text-decoration: none; width: 70%; margin: auto;" href="https://marketing.lectorami.co/contratoami/index.html?asesor=' . $emailAsesor . '">Diligenciar contrato</a>
    ';
  }

  $mensaje .= '
    <h3 style=" text-align: center;">Desde el siguiente link puedes hacer tu pago</h3>
    <a style="background: #ec1a24; color: #fff; display: block; padding: 5px 25px; text-align: center; border-radius: 25px; font-size: 24px; text-decoration: none; width: 70%; margin: auto;" href="' . $linkPago . '" target="_blank">Paga ahora</a>

  ';

  $mensaje .= "
        <h6 style=' text-align:center;'><b>NOTA:</b>Por favor, no responder a este correo automático.</h6>
		</div>
		</div>
        </body> 
  </html>";

  echo $mensaje;
  $mail = new PHPMailer( true );
  $mail->CharSet = "UTF-8";
  $mail->IsSMTP();
  $mail->Host = "smtp.gmail.com";
  $mail->SMTPAuth = true;
  $mail->Username = "noreply@geostigmamedia.com";
  $mail->Password = "3n14c1976*";
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;
  $from = "info@lectorami.com";
  $from = "gerencia@lectorami.com";
  $fromName = "Lector AMI";
  $subject = "Datos de Matricula Lector AMI Virtual";
  $message = $mensaje;
  $mail->From = $from;
  $mail->FromName = $fromName;
  $mail->addAddress( $para, $nombre );
  $mail->Subject = $subject;
  $mail->MsgHTML( $mensaje );
  $mail->send();
}