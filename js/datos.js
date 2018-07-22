/* Función para almacenar datos */

var datos = [];

$(document).ready(function(){    

    $('#boton-guardar').click(function(){        
        
        /* Capturar datos del formulario */        
        var nom = document.getElementById("nombretxt").value;
        var apel = document.getElementById("apellidotxt").value;
        var tel = document.getElementById("telefonotxt").value;
        var mail = document.getElementById("correotxt").value;
        
        
        /* Guardando los datos */
        var json = {
            nombre: nom,
            apellido: apel,
            telefono: tel,
            correo: mail
        }
        datos.push(json);
        console.log(datos);        
       
        /* Limpiar formulario */
        document.getElementById("nombretxt").value = "";
        document.getElementById("apellidotxt").value = "";
        document.getElementById("telefonotxt").value = "";
        document.getElementById("correotxt").value = "";

        var el = $('<div id="elemento'+datos.length+'"><div class="indice" id="indice">'+datos.length+'</div>'+
        '<div class="user_list" id="user_list'+datos.length+'" title="Haga click para ampliar">'+nom+' '+apel+'</div>');
        var el1 = $('<button class="button user_button" title="Editar usuario">'+
            '<img src="iconos/editar.svg" height="40px">'+
        '</button>');
        var el3 = $('<button class="button user_button" title="Eliminar usuario" id="borrar'+datos.length+'">'+
           '<img src="iconos/eliminar.svg" height="40px">'+
        '</button>');
        var el4 = $('<div class="contenedor" id="contenedor'+datos.length+'">'+"Nombre: "+nom+" Apellido: "+apel+"<br>Teléfono: "+tel+" Correo: "+mail+
        '</div></div>'+
        '<br><br>');

       /* $("body").append('<div id="elemento'+datos.length+'"><div class="indice" id="indice">'+datos.length+'</div>'+
        '<div class="user_list" id="user_list'+datos.length+'">'+nom+' '+apel+'</div>'+
        '<button class="button user_button" title="Editar usuario">'+
            '<img src="iconos/editar.svg" height="40px">'+
        '</button>'+
        '<button class="button user_button" title="Eliminar usuario" id="borrar'+datos.length+'">'+
           '<img src="iconos/eliminar.svg" height="40px">'+
        '</button>'+'<div class="contenedor" id="contenedor'+datos.length+'">'+nom+apel+tel+'</div></div>'+
        '<br><br>');*/

        el3.on("click", function(){
            $(el4).remove();
            $(el1).remove();
            $(el).remove();
            $(el3).remove();
        });

        $(el4).hide();
        el.on("click", function(){
            console.log('holis');
            if ($(el4).is(":visible")) {
                $(el4).hide();
            } else {
                $(el4).show();
            }

        });


        $("body").append(el, el1, el3, el4);
     
    });   

});

/*$(document).ready(function(){  
    $("#borrar1").click(function(){
        $( "#elemento1" ).remove();
    });
});*/

/* Función para mostrar datos */

$(document).ready(function(){    
    $('#boton-cargar').click(function(){        
        var foo = [];    
        
        /* Obtener los datos */
        for (let i = 0; i < datos.length; i++) {
            var usuario = datos[i];
            document.getElementById("nombre").innerHTML = usuario.nombre;     
            document.getElementById("apellido").innerHTML = usuario.apellido;
            document.getElementById("telefono").innerHTML = usuario.telefono;
            document.getElementById("correo").innerHTML = usuario.correo;
        }    
        
      /*  var foo = datos.map(function(usuario){
            return '<li>'+usuario.nombre+' '+usuario.apellido+'</li>'
          })
          document.getElementById("foo").innerHTML = foo;
          console.log(foo);*/
        
    });   
});

/* Función para eliminar datos */

$(document).ready(function(){    
    $('#boton-eliminar').click(function(){                
                                                   
        /* Eliminar los datos */
        localStorage.removeItem("Nombre");
        localStorage.removeItem("Apellido");
        localStorage.removeItem("Telefono");
        localStorage.removeItem("Correo"); 
        
        
        /* Limpiar los datos */       
        document.getElementById('nombre').innerHTML = "";
        document.getElementById('apellido').innerHTML = "";
        document.getElementById('telefono').innerHTML = "";
        document.getElementById('correo').innerHTML = "";
        
    });   
});


/*$(document).ready(function(){
        console.log('holis');
       $(".contenedor").hide();

    $('.user_list'+datos.length).click(function(){

        if ($(".contenedor").is(":visible")) {
            $(".contenedor").hide();
        } else {
            $(".contenedor").show();
        }
    });

});*/
