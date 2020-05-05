//function Login(e) {
if ($("#login").length) {
  $("#login").validate({
    onkeyup: false,
    errorClass: "error",
    validClass: "valid",
    rules: {
      usuario: {
        required: true,
      },
      password: {
        required: true,
      },
    },
    submitHandler: function (form) {
      var usuario = document.login.usuario.value;
      var password = document.login.password.value;
      if (usuario == "asesor" && password == "asesor") {
        document.cookie = "rol = asesor";
        window.location = "./index.php";
      } else if (usuario == "lectorami" && password == "lectorami") {
        document.cookie = "rol = lectorami";
        window.location = "./index.php";
      } else {
        alert("datos incorrectos");
      }
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
