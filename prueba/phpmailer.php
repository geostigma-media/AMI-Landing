<?php 
require_once( 'PHPMailer/PHPMailerAutoload.php' );
if ( isset( $_REQUEST[ 'btnEnviar' ] ) ) {


  $aux1 = $_REQUEST[ 'cantidad' ] * 60;
  $min = $_REQUEST[ 'minutos' ] * 60;
  $total = $_REQUEST[ 'segundos' ] + $min;

  $palabras = round( $aux1 / $total );


  $aciertos = ( $_REQUEST[ 'pregunta1' ] + $_REQUEST[ 'pregunta2' ] + $_REQUEST[ 'pregunta3' ] + $_REQUEST[ 'pregunta4' ] + $_REQUEST[ 'pregunta5' ]) * 25;

  $nombre = $_REQUEST[ 'txtNombre' ];
  $telefo = $_REQUEST[ 'txtTelefono' ];
  $ciudad = $_REQUEST[ 'txtCiudad' ];
  $correo = $_REQUEST[ 'txtCorreo' ];
  $comentario = $_REQUEST[ 'txtComentario' ];
  $fechaS = date( 'Y-m-d H:m:s' );

  $asunto = '[AMI] - ' . $_SERVER[ 'HTTP_HOST' ];
  $mensaje = "<html>
	<head>
	<title>:.. AMI ..:</title>
	<style>
	.linkpag{
		text-decoration:none;
		color:#39F;
	}
	</style>
	</head>
	Un estudiante ha presentado el test:<br><br>
	<body>    

	Fecha Envio: " . $fechaS . "<br><br>

	<b>DATOS PERSONALES:</b><br><br>
	
	<b>NOMBRE:</b> " . $_REQUEST[ 'nombre' ] . "<br>
	<b>TELEFONO:</b> " . $_REQUEST[ 'telefono' ] . "<br>
	<b>CIUDAD / MUNICIPIO:</b> " . $_REQUEST[ 'ciudad' ] . "<br>
	<b>CORREO ELECTRONICO:</b> " . $_REQUEST[ 'correo' ] . "<br>                                            

	<br>    
	<br>

	<b>" . $_REQUEST[ 'nombre' ] . "</b>,<br>

	<h3>Tu velocidad fue de " . $palabras . " palabras por minuto, con una comprensión del " . $aciertos . "%.</h3>

	<br>
	Enviado desde, Pagina Web
	<br />
	<b>AMI</b>
	<br />
	<a href='https://" . $_SERVER[ 'HTTP_HOST' ] . "' target='_blank' class='linkpag'>" . $_SERVER[ 'HTTP_HOST' ] . "</a>
	<br />      
	<br />
	<br />  
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


  $from = $correo;
  $fromName = $nombre;
  $to = 'alex.geostigma@gmail.com';
  $subject = "Diagnostico Lectura - AMI";
  $message = $mensaje;

  $mail->From = $from;
  $mail->FromName = $fromName;

  $mail->addAddress( $to, "AmiVirtual" );
  $mail->Subject = $subject;

  $mail->MsgHTML( $mensaje );


  $mail->send();


  $nombre = $_REQUEST[ 'txtNombre' ];
  $telefo = $_REQUEST[ 'txtTelefono' ];
  $ciudad = $_REQUEST[ 'txtCiudad' ];
  $correo = $_REQUEST[ 'txtCorreo' ];
  $comentario = $_REQUEST[ 'txtComentario' ];
  $fechaS = date( 'Y-m-d H:m:s' );
  //$para         = $elCorreo;
  $para = $_REQUEST[ 'correo' ];
  //$para         = 'alex.geostigma@gmail.com';        
  $asunto = '[AMI] - ' . $_SERVER[ 'HTTP_HOST' ];
  $mensaje = "<html>
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
	

	<h3>Tu velocidad fue de " . $palabras . " palabras por minuto, con una comprensión del " . $aciertos . "% .</h3>



	<br>
	Enviado desde, Pagina Web
	<br />
	<b>AMI</b>
	<br />
	<a href='https://" . $_SERVER[ 'HTTP_HOST' ] . "' target='_blank' class='linkpag'>" . $_SERVER[ 'HTTP_HOST' ] . "</a>
	<br />      
	<br />
	<br />  
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
  $from = "alex.geostigma@gmail.com";
  $fromName = "AMI";
  $to = $para;
  $subject = "Diagnostico Lectura - AMI";
  $message = $mensaje;


  $mail->From = $from;
  $mail->FromName = $fromName;

  $mail->addAddress( $to, $nombre );
  $mail->Subject = $subject;

  $mail->MsgHTML( $mensaje );


  $mail->send();

  $mail->MsgHTML( $mensaje );

  if ( $mail->send() ) {
    echo '<script> 
      alert("Su evaluación ha sido enviada correctamente."); 
      location.href = "https://campus.lectorami.com/login/logout";
      </script>';

  } else {
    echo '<script> 
      alert("Ocurrio un error al enviar tu evaluación."); 
      location.href = "https://campus.lectorami.com/login/logout";
      </script>';
  }
}


?>
<!DOCTYPE html>
<html lang="es-ES">
<head id="Head">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>PRUEBA DE LECTURA - AMI </title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
<meta name="viewport" content="initial-scale=1.0,width=device-width" />
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
</head>
<body id="Body">
<div class="container-fluid">
	<div class="col-md-6 mx-auto">
  <form class="envio" method="post" action="phpmailer.php"  id="Form" >
    <div class="form-group">
      <label> Ciudad* </label>
      <input class="form-control" name="ciudad" type="text" value="" id="dnn_ctr537_View_tbciudad" required>
    </div>
    <div class="form-group">
      <label> Nombres y Apellidos*</label>
      <input class="form-control" name="nombre" type="text" value="" id="dnn_ctr537_View_tbnombre" required>
    </div>
    <div class="form-group">
      <label> Correo Electronico* </label>
      <input class="form-control" name="correo" type="text" value="" id="dnn_ctr537_View_tbcorreo" required>
    </div>
    <div class="form-group">
      <label> Teléfono* </label>
      <input class="form-control" name="telefono" type="text" value="" maxlength="10" id="dnn_ctr537_View_tbtelefono" required>
    </div>
    <input type="hidden" name="cantidad" value="<?php echo $_REQUEST['cantidad'] ?>">
    <input type="hidden" name="minutos" id="minutos"  value="<?php echo $_REQUEST['minutos'] ?>">
    <input type="hidden" name="segundos"  id="segundos" value="<?php echo $_REQUEST['segundos'] ?>">
    <input type="hidden" name="pregunta1"  id="pregunta1" value="<?php echo $_REQUEST['pregunta1'] ?>">
    <input type="hidden" name="pregunta2"  id="pregunta2" value="<?php echo $_REQUEST['pregunta2'] ?>">
    <input type="hidden" name="pregunta3"  id="pregunta3" value="<?php echo $_REQUEST['pregunta3'] ?>">
    <input type="hidden" name="pregunta4"  id="pregunta4" value="<?php echo $_REQUEST['pregunta4'] ?>">
    <input type="hidden" name="pregunta5"  id="pregunta5" value="<?php echo $_REQUEST['pregunta5'] ?>">
    <center>
      <input class="btn btn-secondary btn-lg" type="submit" name="btnEnviar" value="Enviar resultados" id="btnEnviar">
    </center>
  </form>
		</div>
</div>
<?php /*?><script type="text/javascript">
document.oncontextmenu = function(){return false;}
</script><?php */?>
</body>
</html>