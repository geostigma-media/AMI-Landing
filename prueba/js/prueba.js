$(document).ready(function () {

  var isAvailable = getCookie("isAvailable");
  if (isAvailable === "true") {
    $(".alert-info").show();
  } else {
    $("#btn-comenzar").show();
  }

  let correo = getCookie('correo')
  let nombre = getCookie('nombre')
    if (correo) {
      document.getElementById("titulo").innerHTML = `Bienvenid@, ${nombre} está es tu prueba de lectura`;
    }else {
      $("#alertaSinCookis").show();
    }

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

  $("#test").submit(function (e) {
    $('form[id="test"]').validate({
      rules: {
        pregunta1: "required",
        pregunta2: "required",
        pregunta3: "required",
        pregunta4: "required",
        pregunta5: "required",
        segundos: "required",
      },
      messages: {
        pregunta1: "This field is required",
        pregunta2: "This field is required",
        pregunta3: "This field is required",
        pregunta4: "This field is required",
        pregunta5: "This field is required",
        segundos: "This field is required",
      },
      submitHandler: function (form) {
        form.submit();
      },
    });
  });

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

  $(document).on("submit", "#form-questions", function (e) {
    e.preventDefault();
    setCookie("isAvailable", "true");
    $(this)[0].submit();
  });
});
