$(function () {
  let rol = document.cookie;
  if (!rol) {
    $("#headami").hide();
    $("#tabs").hide();
    $("#appinterno").hide();
    $("#sinLogin").html(
      `<h1 class="text-center">Zona Restringida</h1> <a  class="text-center btn btn-danger" href="./index.html">Iniciar Sesión</a>`
    );
  }
  if (rol == "rol=lectorami") {
    $("#tabs").html(
      `
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item active"> <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Formulario</a> </li>
        <li class="nav-item"> <a class="nav-link " data-toggle="tab" href="#tabs-1" role="tab">Lista de Clientes</a> </li>
      </ul>
      `
    );
  } else {
    $("#tabs").html(
      `
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item active"> <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Formulario</a> </li>
      </ul>
      `
    );
  }
});
$("#salir").click(function () {
  document.cookie = "rol =; expires= Thu, 01 Jan 1970 00:00:00 UTC;";
  window.location.replace("https://marketing.lectorami.co/contratoami/asesor/");
});
function contrato() {
  let nombre = $("#nombre").val();
  let date = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let hora = date.getHours();
  let minuto = date.getMinutes();
  console.log(date.toLocaleDateString("es-MX", options));

  $("#contratocontenedor").html(
    `<div id='contrato'> 
      <div id='contenido'>
        <h4>TÉRMINOS Y CONDICIONES DE COMPRA: CONTRATO CELEBRADO EL ${date.toLocaleDateString(
          "es-MX",
          options
        )} ENTRE ${nombre} y LECTOR AMI .</h4>
        <p>Por favor, lea los siguientes términos y condiciones de compra con detenimiento 
        (colectivamente, las "Condiciones de Compra"). Estas Condiciones de Compra constituyen
        un acuerdo legal y vinculante entre usted y Lector AMI (la "Compañía") en relación con la
        compra de 1 curso(s) lectura Inteligente (12) mes(es) de duración (el "Curso") ofrecido por
        la Compañía de acuerdo con el interés demostrado por Ud. en su visita a la página web.
        www.lectorami.com. Esta adquisición, está sujeta a los Términos de Servicio
        que se encuentran publicados en la página web de la Compañía, los cuales se consideran parte 
        integrante del presente documento.</p>
        PAGO
        <p>Yo, ${nombre} (el "Cliente"), me comprometo hacer un (1) pago por el monto de COP 2.100.000 por 1 Curso
        (s) de lectura (el "Precio de Compra"). Entiendo que el pago debe hacerse a través de los sistemas
        autorizados de la Compañía y los centros de recogida autorizados.
        Entiendo que tengo derecho para rescindir el Curso lector ami y recibir un reembolso del monto pagado, siempre
        y cuando comunique mi solicitud de cancelación dentro de los primeros siete (7) días contados a partir de la 
        fecha de mi compra aquí registrada, y así recibir un reembolso total del monto pagado. A estos fines, entiendo
        que esta solicitud de cancelación deberá ser canalizada a través de un asesor de la Compañía por medio de
        llamada telefónica al número 3213202115. Después de transcurridos los siete (7) días antes indicados, los
        montos que han sido pagados no son rembolsables. Por favor tenga en cuenta que los reembolsos solo se
        realizarán a través del instrumento de pago que Ud. ha proporcionado a la Compañía.
        Por favor tenga en cuenta que sus pagos corresponden a una transacción nacional. Por lo tanto la Compañía le 
        facturará el Precio de Compra anteriormente definido en base a estos términos y condiciones, en cuyo caso la
        Compañía no es ni será responsable por cualquier tasa, comisión o costo aplicable que pudiese aplicar su
        banco; tampoco por cualquier ganancia o pérdida que pudiere resultar de esta operación en la fecha en
        que se procese el pago.
        </p>
        RENOVACIÓN AUTOMÁTICA
        <p>Después de completar el curso en el mes número 12 (el "período inicial"), Ud. seguirá disfrutando del
        servicio sobre una base mensual de renovaciones automáticas, pagando la fracción mensual equivalente
        a COP 356.862,75 (el "Precio de Renovación") por cada mes. A tal efecto, Ud. acepta que la Compañía 
        puede renovar automáticamente su servicio y cargar su instrumento de pago mencionado anteriormente
        con el precio de renovación en el aniversario mensual de su servicio, es decir a los 30 días 
        siguientes de la fecha de la última renovación (la "Fecha de Renovación"). El pago de la renovación 
        se hará exigible a la fecha de renovación. En caso de que Ud. decida dar por terminado el servicio
        después del período inicial, puede hacerlo enviando una solicitud a un asesor de la Compañía a través
        de llamada telefónica al número antes mencionado. Una vez que la Compañía reciba su solicitud de 
        terminación del Servicio, la Compañía cancelará su Contrato de Compra asociado a su cuenta lector
        AMI. La Compañía se reserva el derecho de ajustar el Precio de Renovación en su única y absoluta
        discreción (siempre según lo permitido por la ley).
        Estas Condiciones de Compra se interpretarán de acuerdo con las leyes de colombianas, sin tener en cuenta
        conflictos de principios legales. En caso de que las partes no puedan resolver amistosamente de buena fe
        una disputa en relación con estos Términos de Compra en el transcurso de 15 días, cualquiera de las partes
        podrá someter dicha controversia a un arbitraje vinculante en el centro de conciliación y arbitraje de la
        cámara de comercio, ante un árbitro. El arbitraje se realizará de conformidad con las Normas y 
        Procedimientos. El laudo arbitral podrá ser registrado en cualquier tribunal que tenga jurisdicción.
        Esta cláusula no impedirá que las partes busquen un desagravio por mandato judicial en un tribunal 
        de jurisdicción apropiada. En la medida en que se permita cualquier litigio conforme a estos Términos
        de Compra. PREGUNTAS
        </p>
        <p>Si usted tiene alguna pregunta o comentario sobre estas condiciones de Compra, por favor, no dude en contactar a un asesor de la Compañía a través de llamada telefónica al número 3213202115 o a través de los medios de contacto publicados en la página web <a href="https://www.lectorami.com" target="_blank">www.lectorami.com</a>.</p>
        <p>NOTIFICACIONES A LECTOR AMI ACADEMIA</p>
        <p>Att: Asuntos Legales y Comerciales</p>
        <p>CARRERA 11 # 22N-10 POPAYAN</p>
        <p>Colombia</p>
        <p><em>Luis Duran</em> * El Suscriptor</p>
        <p><em>LECTOR AMI</em> La Compañía</p>
        
        <p>*Por firma electrónica a las ${hora}:${minuto} horas del ${date.toLocaleDateString(
      "es-MX",
      options
    )}</p>
        </div>
      </div>`
  );
  $("#contratoInput").html(
    `<textarea style="display: none;" name="contrato">TÉRMINOS Y CONDICIONES DE COMPRA: CONTRATO CELEBRADO EL ${date.toLocaleDateString(
      "es-MX",
      options
    )} ENTRE ${nombre} y LECTOR AMI .
    Por favor, lea los siguientes términos y condiciones de compra con detenimiento 
    (colectivamente, las "Condiciones de Compra"). Estas Condiciones de Compra constituyen
    un acuerdo legal y vinculante entre usted y Lector AMI (la "Compañía") en relación con la
    compra de 1 curso(s) lectura Inteligente (12) mes(es) de duración (el "Curso") ofrecido por
    la Compañía de acuerdo con el interés demostrado por Ud. en su visita a la página web.
    www.lectorami.com. Esta adquisición, está sujeta a los Términos de Servicio 
    que se encuentran publicados en la página web de la Compañía, los cuales se consideran parte 
    integrante del presente documento.
    PAGO
    Yo, ${nombre} (el "Cliente"), me comprometo hacer un (1) pago por el monto de COP 2.100.000 por 1 Curso
    (s) de lectura (el "Precio de Compra"). Entiendo que el pago debe hacerse a través de los sistemas
    autorizados de la Compañía y los centros de recogida autorizados.
    Entiendo que tengo derecho para rescindir el Curso lector ami y recibir un reembolso del monto pagado, siempre
    y cuando comunique mi solicitud de cancelación dentro de los primeros siete (7) días contados a partir de la 
    fecha de mi compra aquí registrada, y así recibir un reembolso total del monto pagado. A estos fines, entiendo
    que esta solicitud de cancelación deberá ser canalizada a través de un asesor de la Compañía por medio de
    llamada telefónica al número 3213202115. Después de transcurridos los siete (7) días antes indicados, los
    montos que han sido pagados no son rembolsables. Por favor tenga en cuenta que los reembolsos solo se
    realizarán a través del instrumento de pago que Ud. ha proporcionado a la Compañía.
    Por favor tenga en cuenta que sus pagos corresponden a una transacción nacional. Por lo tanto la Compañía le 
    facturará el Precio de Compra anteriormente definido en base a estos términos y condiciones, en cuyo caso la
    Compañía no es ni será responsable por cualquier tasa, comisión o costo aplicable que pudiese aplicar su
    banco; tampoco por cualquier ganancia o pérdida que pudiere resultar de esta operación en la fecha en
    que se procese el pago.
    RENOVACIÓN AUTOMÁTICA
    Después de completar el curso en el mes número 12 (el "período inicial"), Ud. seguirá disfrutando del
    servicio sobre una base mensual de renovaciones automáticas, pagando la fracción mensual equivalente
    a COP 356.862,75 (el "Precio de Renovación") por cada mes. A tal efecto, Ud. acepta que la Compañía 
    puede renovar automáticamente su servicio y cargar su instrumento de pago mencionado anteriormente
    con el precio de renovación en el aniversario mensual de su servicio, es decir a los 30 días 
    siguientes de la fecha de la última renovación (la "Fecha de Renovación"). El pago de la renovación 
    se hará exigible a la fecha de renovación. En caso de que Ud. decida dar por terminado el servicio
    después del período inicial, puede hacerlo enviando una solicitud a un asesor de la Compañía a través
    de llamada telefónica al número antes mencionado. Una vez que la Compañía reciba su solicitud de 
    terminación del Servicio, la Compañía cancelará su Contrato de Compra asociado a su cuenta lector
    AMI. La Compañía se reserva el derecho de ajustar el Precio de Renovación en su única y absoluta
    discreción (siempre según lo permitido por la ley).
    Estas Condiciones de Compra se interpretarán de acuerdo con las leyes de colombianas, sin tener en cuenta
    conflictos de principios legales. En caso de que las partes no puedan resolver amistosamente de buena fe
    una disputa en relación con estos Términos de Compra en el transcurso de 15 días, cualquiera de las partes
    podrá someter dicha controversia a un arbitraje vinculante en el centro de conciliación y arbitraje de la
    cámara de comercio, ante un árbitro. El arbitraje se realizará de conformidad con las Normas y 
    Procedimientos. El laudo arbitral podrá ser registrado en cualquier tribunal que tenga jurisdicción.
    Esta cláusula no impedirá que las partes busquen un desagravio por mandato judicial en un tribunal 
    de jurisdicción apropiada. En la medida en que se permita cualquier litigio conforme a estos Términos
    de Compra. PREGUNTAS
    Si usted tiene alguna pregunta o comentario sobre estas condiciones de Compra, por favor, no dude en 
    contactar a un asesor de la Compañía a través de llamada telefónica al número 3213202115 o a través de 
    los medios de contacto publicados en la página web www.lectorami.com.
    NOTIFICACIONES A LECTOR AMI ACADEMIA
    Att: Asuntos Legales y Comerciales
    CARRERA 11 # 22N-10 POPAYAN
    Colombia
    Luis Duran * El Suscriptor
    LECTOR AMI La Compañía
    
    *Por firma electrónica a las ${hora}:${minuto} horas del ${date.toLocaleDateString(
      "es-MX",
      options
    )}</textarea>`
  );
}

function contratoCutoas() {
  let nombre = $("#nombre").val();
  let date = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let hora = date.getHours();
  let minuto = date.getMinutes();
  console.log(date.toLocaleDateString("es-MX", options));

  $("#contratocontenedor").html(
    `<div id='contrato'> 
      <div id='contenido'>
        <h4>TÉRMINOS Y CONDICIONES DE COMPRA: CONTRATO CELEBRADO EL ${date.toLocaleDateString(
          "es-MX",
          options
        )} ENTRE ${nombre} y LECTOR AMI .</h4>
        <p>Por favor, lea los siguientes términos y condiciones de compra con detenimiento (colectivamente, las 
          "Condiciones de Compra"). Estas Condiciones de Compra constituyen un acuerdo legal y vinculante entre usted
          y Lector AMI (la "Compañía") en relación con la compra de 1 curso(s) lectura Inteligente (12) mes(es) de 
          duración (el "Curso") ofrecido por la Compañía de acuerdo con el interés demostrado por Ud. en su visita a 
          la página web www.lectorami.com. Esta adquisición, está sujeta a los Términos de Servicio que se encuentran
          publicados en la página web de la Compañía, los cuales se consideran parte integrante del presente documento.</p>
          <h5>PAGO</h5>
          <p>Yo, ${nombre} (el "Cliente"), me comprometo hacer un (1) pago por el monto de COP $340.000 por 1 programa de lectura (el "Precio de Compra"). Entiendo que el pago debe hacerse a través de los sistemas autorizados de la Compañía y los centros de recogida autorizados Y Siete (7) Mensualidades de $322.900 consecutivas (30) treinta días después del primer pago.
          Entiendo que tengo derecho para rescindir el Curso lector ami y recibir un reembolso del monto pagado,
          siempre y cuando comunique mi solicitud de cancelación dentro de los primeros siete (7) días contados a partir
          de la fecha de mi compra aquí registrada, y así recibir un reembolso total del monto pagado. A estos fines, 
          entiendo que esta solicitud de cancelación deberá ser canalizada a través de un asesor de la Compañía por medio 
          de llamada telefónica al número 3213202115. Después de transcurridos los siete (7) días antes indicados, los montos
          que han sido pagados no son rembolsables. Por favor tenga en cuenta que los reembolsos solo se realizarán a 
          través del instrumento de pago que Ud. ha proporcionado a la Compañía.</p>
          
          <p>Por favor tenga en cuenta que sus pagos corresponden a una transacción nacional. Por lo tanto la Compañía le 
          facturará el Precio de Compra anteriormente definido en base a estos términos y condiciones, en cuyo caso la 
          Compañía no es ni será responsable por cualquier tasa, comisión o costo aplicable que pudiese aplicar su banco; 
          tampoco por cualquier ganancia o pérdida que pudiere resultar de esta operación en la fecha en que se procese el
          pago.</p>
          
          <h5>RENOVACIÓN AUTOMÁTICA</h5>
          
          <p>Después de completar el curso en el mes número 12 (el "período inicial"), Ud. seguirá disfrutando del servicio 
          sobre una base mensual de renovaciones automáticas, pagando la fracción mensual equivalente a COP 356.862,75
          (el "Precio de Renovación") por cada mes. A tal efecto, Ud. acepta que la Compañía puede renovar automáticamente
          su servicio y cargar su instrumento de pago mencionado anteriormente con el precio de renovación en el aniversario 
          mensual de su servicio, es decir a los 30 días siguientes de la fecha de la última renovación 
          (la "Fecha de Renovación"). El pago de la renovación se hará exigible a la fecha de renovación. En caso de que Ud. 
          decida dar por terminado el servicio después del período inicial, puede hacerlo enviando una solicitud a un asesor 
          de la Compañía a través de llamada telefónica al número antes mencionado. Una vez que la Compañía reciba su 
          solicitud de terminación del Servicio, la Compañía cancelará su Contrato de Compra asociado a su cuenta lector AMI.
          La Compañía se reserva el derecho de ajustar el Precio de Renovación en su única y absoluta discreción 
          (siempre según lo permitido por la ley).</p>
          
          <p>Estas Condiciones de Compra se interpretarán de acuerdo con las leyes de colombianas, sin tener en cuenta
          conflictos de principios legales. En caso de que las partes no puedan resolver amistosamente de buena fe una
          disputa en relación con estos Términos de Compra en el transcurso de 15 días, cualquiera de las partes podrá 
          someter dicha controversia a un arbitraje vinculante en el centro de conciliación y arbitraje de la cámara de
          comercio, ante un árbitro. El arbitraje se realizará de conformidad con las Normas y Procedimientos. El laudo
          arbitral podrá ser registrado en cualquier tribunal que tenga jurisdicción. Esta cláusula no impedirá que 
          las partes busquen un desagravio por mandato judicial en un tribunal de jurisdicción apropiada. En la medida 
          en que se permita cualquier litigio conforme a estos Términos de Compra. PREGUNTAS</p>
          
          <p>Si usted tiene alguna pregunta o comentario sobre estas condiciones de Compra, por favor, no dude en contactar a un asesor de la Compañía a través de llamada telefónica al número 3213202115 o a través de los medios de contacto publicados en la página web www.lectorami.com.</p>
          <p>NOTIFICACIONES A LECTOR AMI ACADEMIA</p>
          <p>Att: Asuntos Legales y Comerciales</p>
          <p>CARRERA 11 # 22N-10 POPAYAN</p>
          <p>Colombia</p>
          <p><em>Luis Duran</em> * El Suscriptor</p>
          <p><em>LECTOR AMI</em> La Compañía</p>
          <p>*Por firma electrónica a las ${hora}:${minuto} horas del ${date.toLocaleDateString(
      "es-MX",
      options
    )}</p>
        </div>
      </div>`
  );
  $("#contratoInput").html(
    `<textarea style="display: none;" name="contrato"><h4>TÉRMINOS Y CONDICIONES DE COMPRA: CONTRATO CELEBRADO EL 11 DE ABRIL DE 2020 ENTRE ${nombre} y LECTOR AMI .</h4>
    <p></p>Por favor, lea los siguientes términos y condiciones de compra con detenimiento (colectivamente, las 
    "Condiciones de Compra"). Estas Condiciones de Compra constituyen un acuerdo legal y vinculante entre usted
    y Lector AMI (la "Compañía") en relación con la compra de 1 curso(s) lectura Inteligente (12) mes(es) de 
    duración (el "Curso") ofrecido por la Compañía de acuerdo con el interés demostrado por Ud. en su visita a 
    la página web www.lectorami.com. Esta adquisición, está sujeta a los Términos de Servicio que se encuentran
    publicados en la página web de la Compañía, los cuales se consideran parte integrante del presente documento.
    PAGO
    Yo, ${nombre} (el "Cliente"), me comprometo hacer un (1) pago por el monto de COP $340.000 por 1 programa de lectura (el "Precio de Compra"). Entiendo que el pago debe hacerse a través de los sistemas autorizados de la Compañía y los centros de recogida autorizados Y Siete (7) Mensualidades de $322.900 consecutivas (30) treinta días después del primer pago.

    Entiendo que tengo derecho para rescindir el Curso lector ami y recibir un reembolso del monto pagado,
    siempre y cuando comunique mi solicitud de cancelación dentro de los primeros siete (7) días contados a partir
    de la fecha de mi compra aquí registrada, y así recibir un reembolso total del monto pagado. A estos fines, 
    entiendo que esta solicitud de cancelación deberá ser canalizada a través de un asesor de la Compañía por medio 
    de llamada telefónica al número 3213202115. Después de transcurridos los siete (7) días antes indicados, los montos
    que han sido pagados no son rembolsables. Por favor tenga en cuenta que los reembolsos solo se realizarán a 
    través del instrumento de pago que Ud. ha proporcionado a la Compañía.
    
    Por favor tenga en cuenta que sus pagos corresponden a una transacción nacional. Por lo tanto la Compañía le 
    facturará el Precio de Compra anteriormente definido en base a estos términos y condiciones, en cuyo caso la 
    Compañía no es ni será responsable por cualquier tasa, comisión o costo aplicable que pudiese aplicar su banco; 
    tampoco por cualquier ganancia o pérdida que pudiere resultar de esta operación en la fecha en que se procese el
    pago.
    RENOVACIÓN AUTOMÁTICA
    Después de completar el curso en el mes número 12 (el "período inicial"), Ud. seguirá disfrutando del servicio 
    sobre una base mensual de renovaciones automáticas, pagando la fracción mensual equivalente a COP 356.862,75
    (el "Precio de Renovación") por cada mes. A tal efecto, Ud. acepta que la Compañía puede renovar automáticamente
    su servicio y cargar su instrumento de pago mencionado anteriormente con el precio de renovación en el aniversario 
    mensual de su servicio, es decir a los 30 días siguientes de la fecha de la última renovación 
    (la "Fecha de Renovación"). El pago de la renovación se hará exigible a la fecha de renovación. En caso de que Ud. 
    decida dar por terminado el servicio después del período inicial, puede hacerlo enviando una solicitud a un asesor 
    de la Compañía a través de llamada telefónica al número antes mencionado. Una vez que la Compañía reciba su 
    solicitud de terminación del Servicio, la Compañía cancelará su Contrato de Compra asociado a su cuenta lector AMI.
    La Compañía se reserva el derecho de ajustar el Precio de Renovación en su única y absoluta discreción 
    (siempre según lo permitido por la ley).
    
    Estas Condiciones de Compra se interpretarán de acuerdo con las leyes de colombianas, sin tener en cuenta
    conflictos de principios legales. En caso de que las partes no puedan resolver amistosamente de buena fe una
    disputa en relación con estos Términos de Compra en el transcurso de 15 días, cualquiera de las partes podrá 
    someter dicha controversia a un arbitraje vinculante en el centro de conciliación y arbitraje de la cámara de
    comercio, ante un árbitro. El arbitraje se realizará de conformidad con las Normas y Procedimientos. El laudo
    arbitral podrá ser registrado en cualquier tribunal que tenga jurisdicción. Esta cláusula no impedirá que 
    las partes busquen un desagravio por mandato judicial en un tribunal de jurisdicción apropiada. En la medida 
    en que se permita cualquier litigio conforme a estos Términos de Compra. PREGUNTAS
    Si usted tiene alguna pregunta o comentario sobre estas condiciones de Compra, por favor, no dude en contactar
    a un asesor de la Compañía a través de llamada telefónica al número 3213202115 o a través de los medios de 
    contacto publicados en la página web www.lectorami.com.
    NOTIFICACIONES A LECTOR AMI ACADEMIA
    Att: Asuntos Legales y Comerciales
    CARRERA 11 # 22N-10 POPAYAN
    Colombia
    Luis Duran * El Suscriptor
    LECTOR AMI La Compañía
    *Por firma electrónica a las ${hora}:${minuto} horas del ${date.toLocaleDateString(
      "es-MX",
      options
    )}
    </textarea>`
  );
}

if ($("#formularioPago").length) {
  $("#formularioPago").validate({
    onkeyup: false,
    errorClass: "error",
    validClass: "valid",
    highlight: function (element) {
      $(element).closest("div").addClass("f_error");
    },
    unhighlight: function (element) {
      $(element).closest("div").removeClass("f_error");
    },
    rules: {
      nombre: {
        required: true,
      },
      direccion: {
        required: true,
      },
      ciudad: {
        required: true,
        minlength: 3,
      },
      noIdentificacion: {
        required: true,
        minlength: 5,
      },
      telefono: {
        required: true,
        minlength: 5,
        digits: true,
      },
      email: {
        required: true,
        email: true,
        minlength: 3,
      },
      terminos: {
        required: true,
      },
      terminosCompra: {
        required: true,
      },
      terminosCusro: {
        required: true,
      },
    },
    submitHandler: function (form) {
      $("#pago").prop("disabled", true);
      $.ajax({
        type: "POST",
        url: "savedata.php",
        data: $("#formularioPago").serialize(),
      }).done(function (data) {
        window.location.replace("https://marketing.lectorami.co");
      });
    },
  });
}

if ($("#formularioInfoPago").length) {
  $("#formularioInfoPago").validate({
    rules: {
      nombreEstudiante: {
        required: true,
      },
      emailEstudiante: {
        required: true,
        email: true,
        minlength: 3,
      },
    },
    submitHandler: function (form) {
      $("#infopago").prop("disabled", true);

      $.ajax({
        type: "POST",
        url: "sendinfopay.php",
        data: $("#formularioInfoPago").serialize(),
      }).done(function (data) {
        alert("El correo se envio con exito");
        form.reset();
		   $("#infopago").prop("disabled", false);
      });
    },
  });
}

jQuery.extend(jQuery.validator.messages, {
  required: "Este campo es obligatorio.",
  remote: "Por favor, rellena este campo.",
  email: "Por favor, escribe una dirección de correo válida",
  url: "Por favor, escribe una URL válida.",
  date: "Por favor, escribe una fecha válida.",
  dateISO: "Por favor, escribe una fecha (ISO) válida.",
  number: "Por favor, escribe un número entero válido.",
  digits: "Por favor, escribe sólo dígitos.",
  creditcard: "Por favor, escribe un número de tarjeta válido.",
  equalTo: "Por favor, escribe el mismo valor de nuevo.",
  accept: "Por favor, escribe un valor con una extensión aceptada.",
  maxlength: jQuery.validator.format(
    "Por favor, no escribas más de {0} caracteres."
  ),
  minlength: jQuery.validator.format(
    "Por favor, no escribas menos de {0} caracteres."
  ),
  rangelength: jQuery.validator.format(
    "Por favor, escribe un valor entre {0} y {1} caracteres."
  ),
  range: jQuery.validator.format(
    "Por favor, escribe un valor entre {0} y {1}."
  ),
  max: jQuery.validator.format(
    "Por favor, escribe un valor menor o igual a {0}."
  ),
  min: jQuery.validator.format(
    "Por favor, escribe un valor mayor o igual a {0}."
  ),
});
