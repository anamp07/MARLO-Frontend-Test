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

        var uinfo = $('<div id="elemento'+datos.length+'"><div class="indice" id="indice">'+datos.length+'</div>'+
        '<div class="user_list" id="user_list'+datos.length+'" title="Haga click para ampliar">'+nom+' '+apel+'</div>');
        
        var editb = $('<button class="button user_button" title="Editar usuario">'+
            '<img src="iconos/editar.svg" height="40px">'+
        '</button>');
        
        var deleteb = $('<button class="button user_button" title="Eliminar usuario" id="borrar'+datos.length+'">'+
           '<img src="iconos/eliminar.svg" height="40px">'+
        '</button>');

        var ucont = $('<div class="contenedor" id="contenedor'+datos.length+'">'+
        '<div class="informacion"><br><table id="table1">'+
        '<tr>'+
          '<td>Nombre:'+
          '<td>Apellido:</td>'+
        '</tr>'+
        '<tr>'+
        '<tr>'+
          '<td><input class="inputedit" type="text" placeholder="'+ nom+'" id="nametxt" readonly></td>'+
          '<td><input class="inputedit" type="text" placeholder="'+ apel+'" id="lastntxt" readonly></td>'+
        '</tr>'+
        '<tr>'+
          '<td>Teléfono:'+
          '<td>Correo:</td>'+
        '</tr>'+
        '<tr>'+
          '<td><input class="inputedit" type="text" placeholder="'+ tel+'" id="phonetxt" readonly></td></td>'+
          '<td><input class="inputedit" type="text" placeholder="'+ mail+'" id="emailtxt" readonly></td></td>'+
        '</tr>'+
        '</table><br>'+
        '<br></div></div>');

        var saveb = $('<button class="button user_button" title="Guardar Cambios" id="guardar'+datos.length+'" style="margin-left:53.5%;">'+
        '<img src="iconos/guardar.svg" height="40px">'+
        '</button>');

        deleteb.on("click", function(){
            $(ucont).remove();
            $(editb).remove();
            $(uinfo).remove();
            $(deleteb).remove();
            $(saveb).remove();
        });

        $(ucont).hide();
        $(saveb).hide();
        uinfo.on("click", function(){
            console.log('holis');
            if ($(ucont).is(":visible")) {
                $(ucont).hide();
            } else {
                $(ucont).show();
            }

        });

        $('.inputedit').attr('readonly', true);

        editb.on("click", function(){
            console.log('jejejeje');
            $('.inputedit').removeAttr('readonly');
            if ($(saveb).is(":visible")) {
                $(saveb).hide();
            } else {
                $(saveb).show();
            }
        });

        saveb.on("click", function(){
            console.log("estoy guardando");
            var newnom = document.getElementById("nametxt").value;
            var newapel = document.getElementById("lastntxt").value;
            var newtel = document.getElementById("phonetxt").value;
            var newmail = document.getElementById("emailtxt").value;
            var index = datos.findIndex(item => item.nombre === nom);
            console.log(index);
            datos[index].nombre = newnom;
            datos[index].apellido = newapel;
            datos[index].telefono = newtel;
            datos[index].correo = newmail;
            console.log(datos[index]);
            var divid = "#user_list"+index;
            console.log(divid);      
        });

        $("body").append(uinfo, editb, deleteb, ucont, saveb, '<br><br>');
     
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
