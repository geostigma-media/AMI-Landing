<?php
include_once "../conexion.php";
$sentencia = $base_de_datos->query( "SELECT * FROM datos;" );
$users = $sentencia->fetchAll( PDO::FETCH_OBJ );
?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Zona de Asesores - AMI Virtual</title>
<!-- Chrome, Firefox OS, Opera and Vivaldi -->
<meta name="theme-color" content="#205ea3" />
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="#205ea3" />
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="#205ea3" />
<!-- Favicons -->
<link href="../favicon.png" rel="icon" />
<link href="../apple-touch-icon-precomposed.png" rel="apple-touch-icon" />
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
<link rel="stylesheet" href="../style.css" />
</head>

<body>
<div id="sinLogin"></div>
<header class="sticky-top" id="headami">
  <div class="navbar navbar-dark bg-dark">
    <div class="container d-flex justify-content-between">
      <div class="col-md-6"> <img src="../assets/img/logo.png" alt="logo lector ami virtual" /> </div>
      <div class="col-md-6 text-right">
        <h2>Zona de Asesores</h2>
        <button class="btn btn-danger btn-sm" id="salir">Cerrar Sesion</button>
      </div>
    </div>
  </div>
</header>
<div id="tabs"></div>
<!-- Tab panes -->
<div id="appinterno" class="tab-content">
  <div class="tab-pane active" id="tabs-2" role="tabpanel">
    <div class="container">
      <div class="row">
        <div class="col-12 formcontent">
          <h1>Confirmación de Inscripción</h1>
          <form class="ui form" id="formularioInfoPago" action="sendinfopay.php" method="POST">
            <div class="alert alert-info" role="alert">
              <label>Información del Titular del Contrato</label>
              <div class="form-group">
                <input type="text" class="form-control" name="nombreEstudiante" id="nombreEstudiante" placeholder="Nombre completo titular del contrato" />
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="emailEstudiante" id="emailEstudiante" placeholder="Correo electrónico titular del contrato" />
              </div>
            </div>
            <div class="form-group">
              <label>Tipo de Contrato</label>
              <select class="form-control" name="tipoContrato" id="tipoContrato">
                <option value="">Debes seleccionar una opción</option>
                <option value="6">Cuotas</option>
                <option value="12">Contado</option>
              </select>
            </div>
            <div class="form-group">
              <label>Link de pago</label>
              <input type="text" class="form-control" name="linkPago" id="linkPago" placeholder="Ingresa el link de pago" />
            </div>
            <div class="form-group">
              <label>Correo asesor comercial</label>
              <input type="email" class="form-control" name="emailAsesor" id="emailAsesor" placeholder="Ingresa tu email" />
            </div>
            <button type="submit" id="infopago" class="btn btn-success"> Enviar email </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="tabs-1" role="tabpanel">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-10 offset-md-2 formcontent">
          <h1>Contratos Registrados</h1>
          <div class="table-responsive">
            <table class="table table-hover " id="tabla">
              <thead>
                <tr>
                  <th>Nombre completo</th>
                  <th>Numero de ID</th>
                  <th>Dirección</th>
                  <th>Telefono</th>
                  <th>Ciudad</th>
                  <th>email</th>
                  <th>asesor</th>
                  <th>fecha de contrato</th>
                </tr>
              </thead>
              <tbody>
                <?php foreach ($users as $user) { ?>
                <tr>
                  <td><?php echo $user->nombre; ?></td>
                  <td><?php echo $user->noIdentificacion; ?></td>
                  <td><?php echo $user->direccion; ?></td>
                  <td><?php echo $user->telefono; ?></td>
                  <td><?php echo $user->ciudad; ?></td>
                  <td><?php echo $user->email; ?></td>
                  <td><?php echo $user->asesor; ?></td>
                  <td><?php echo $user->create_at; ?></td>
                </tr>
                <?php } ?>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<footer class="fixed-bottom">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p class="text-center"> Copyright © 2020 Lector AMI. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> 
<script src="../assets/js/functions.js"></script> 
<script type="text/javascript" src="//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script> 
<script src="https://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"></script> 
<script type="text/javascript">
    $(document).ready(function() {
      $('#tabla').DataTable({
        language: {
          "sProcessing": "Procesando...",
          "sLengthMenu": "Mostrar _MENU_ registros",
          "sZeroRecords": "No se encontraron resultados",
          "sEmptyTable": "Ningún dato disponible en esta tabla",
          "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
          "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
          "sInfoPostFix": "",
          "sSearch": "Buscar:",
          "sUrl": "",
          "sInfoThousands": ",",
          "sLoadingRecords": "Cargando...",
          "oPaginate": {
            "sFirst": "Primero",
            "sLast": "Último",
            "sNext": "Siguiente",
            "sPrevious": "Anterior"
          },
          "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
        }
      });
    });
  </script>
</body>
</html>