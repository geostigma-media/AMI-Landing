$(document).ready(function () {

  let timesseg = 300 * 1000;
  let n = 1;
  let time_end = n;

  $("#btn-comenzar").click(function () {
    $("#test").show();
    $("#btn-comenzar").css("display", "none");
    var l = document.getElementById("tiempo");
    window.setInterval(function () {
      l.innerHTML = n;
      n++;
    }, 1000);
    time_end = $("#number").val();
    var time_end = document.getElementById("tiempo");
    let tiem = time_end.innerText;
    $("#segundos").val(tiem);
    setTimeout(timeLimit, timesseg);
  });

  $("#btn-finalizar").click(function () {
    var time_end = document.getElementById("tiempo");
    let tiem = time_end.innerText;
    $("#segundos").val(tiem);
    $("#test").css("display", "none");
    $("#segundos").val();
    $("#questions").show();
  });

  $("#segundos").click(function () {
    let s = $("#segundos").val();
    alert(s);
  });

  
  if($('#form-questions').length ){  
    $('#form-questions').validate({
        onkeyup: false,
        errorClass: 'error',
        validClass: 'valid',
        highlight: function(element) {
            $(element).closest('div').addClass("f_error");
        },
        unhighlight: function(element) {
            $(element).closest('div').removeClass("f_error");
        },
        rules: {
        pregunta1: "required",
          pregunta2: "required",
          pregunta3: "required",
          pregunta4: "required",
          pregunta5: "required",
          segundos: "required",
        },
        submitHandler: function (form) {
          $('#send-results').prop('disabled', true);
          $.ajax({
              type: "POST",
              url: "sendTest.php",
              data: $('#form-questions').serialize(),
          }).done(function (data) {
            setCookie("isAvailable", "true")
            $('#exampleModal').modal('hide')
            alert('La prueba se realizó con éxito, hemos enviado a tu correo los resultados.');
            $('#alerta').fadeToggle("slow")
          })
        },
    });
  };

  function timeLimit() {
    $("#test").css("display", "none");
    var time_end = document.getElementById("tiempo");
    let tiem = time_end.innerText;
    $("#segundos").val(tiem);
    $("#questions").show();
  }

  // Cookies
  var setCookie = function (name, value) {
    let today = new Date();
    let expires = "expires=";
    // add one day to current date
    today.setDate(today.getDate() + 1);
    expires += today.toUTCString();
    let cookie = `${name}=${value};${expires}; path=/`;
    document.cookie = cookie;
  };

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  // $(document).on("submit", "#form-questions", function (e) {
  //   e.preventDefault();
  //   setCookie("isAvailable", "true");
  //   $(this)[0].submit();
  // });

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
    maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
    range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
    max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
    min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
  });
});