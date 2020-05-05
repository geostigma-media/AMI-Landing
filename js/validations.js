$(function(){
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
      
    if($('#form-contacto').length ){  
        $('#form-contacto').validate({
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
                'nombre': { required: true },
                'correo': { required: true,  email:true, minlength: 3 },
                'telefono': { required: true,  minlength: 3 },
                'celular': { required: true,  minlength: 5, digits:true },
                'ciudad': { required: true,  minlength: 3 },
                'datos': { required: true }
            },
            submitHandler: function(form){
                $('#btnEnviar').prop('disabled', true);
                let email = getCookie('correo')
                let correo = $('#correo').val();
                if (email == correo) {
                    $(".alert-info").show().find('strong').html('Tú ya estás registrado');
                }else{
                    $.ajax({
                        type: "POST",
                        url: "sendEmail.php",
                        data: $('#form-contacto').serialize(),
                    }).done(function(data){
                        let emailformulario = $('#correo').val();
                        let nombreformulario = $('#nombre').val();
                        $('#correoRegistro').val(emailformulario);
                        $('#nombreRegistro').val(nombreformulario);
                        let nombre = $('#nombre').val();
                        document.getElementById("titulo").innerHTML = `Bienvenid@, ${nombre} ahora miremos que tan rápido lees y cuál es tu nivel de compresión.`;
                        $('#alerta').fadeToggle("slow")
                        document.cookie = `correo=${correo}`;
                        document.cookie = `nombre=${nombre}`;
                        $('#exampleModal').modal('show')
                        $('#form-contacto').trigger("reset");
                    })
                }
               
            }
        });
    } 
    
    $('#paraMi').click(function(){
        $('#selectparaMi').show()
        $('#selectparaMiHijo').hide()
    })
    $('#paraMiHijo').click(function(){
        $('#selectparaMi').hide()
        $('#selectparaMiHijo').show()
    })

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