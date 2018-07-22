
var datos = [];

$(document).ready(function () {


    $('.form_cont').hide();
    $('#agregar').click(function () {
        if ($('.form_cont').is(":visible")) {
            $('.form_cont').hide();
        } else {
            $('.form_cont').show();
        }
    });

     $('#boton-guardar').click(function () {

        // Get form data 
        var nom = document.getElementById("nombretxt").value;
        var apel = document.getElementById("apellidotxt").value;
        var email = document.getElementById("correotxt").value;
        var unom = document.getElementById("usertxt").value;

        // Save 
        var json = {
            nombre: nom,
            apellido: apel,
            correo: email,
            nombreu: unom
        }
        datos.push(json);
        console.log(datos);

        // Clean form 
        document.getElementById("nombretxt").value = "";
        document.getElementById("apellidotxt").value = "";
        document.getElementById("correotxt").value = "";
        document.getElementById("usertxt").value = "";
        

        // Index + name
        var uinfo = $('<div id="elemento' + datos.length + '"><div class="indice" id="indice">' + datos.length + '</div>' +
            '<div class="user_list" id="user_list' + datos.length + '" title="More info">' + nom + ' ' + apel + '</div>');

        // Edit button
        var editb = $('<button class="button user_button" title="Edit user">' +
            '<img src="iconos/editar.svg" height="40px">' +
            '</button>');

        // Delete button
        var deleteb = $('<button class="button user_button" title="Remove user" id="borrar' + datos.length + '">' +
            '<img src="iconos/eliminar.svg" height="40px">' +
            '</button>');

        // Content box
        var ucont = $('<div class="contenedor" id="contenedor' + datos.length + '">' +
            '<div class="informacion"><br><table id="table1">' +
            '<tr>' +
            '<td>Name:' +
            '<td>Lastname:</td>' +
            '</tr>' +
            '<tr>' +
            '<tr>' +
            '<td><input class="inputedit" type="text" placeholder="' + nom + '" id="nametxt" readonly></td>' +
            '<td><input class="inputedit" type="text" placeholder="' + apel + '" id="lastntxt" readonly></td>' +
            '</tr>' +
            '<tr>' +
            '<td>Mail:</td>' +
            '<td>Username:</td>' +
            '</tr>' +
            '<tr>' +
            '<td><input class="inputedit" type="text" placeholder="' + email + '" id="emailtxt" readonly></td>' +
            '<td><input class="inputedit" type="text" placeholder="' + unom + '" id="usernametxt" readonly></td>' +
            '</tr>' +
            '<tr>' +
            '<td>User role:' +
            '<td>User active:</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<input type="checkbox" name="admini" value="1">Administrator' +
            '<br>' +
            '<input type="checkbox" name="membe" value="2" checked>Member' +
            '<br>' +
            '<input type="checkbox" name="contrib" value="3">Contributor' +
            '</td>' +
            '<td>' +
            '<input type="radio" name="actyes" value="1">Yes' +
            '<br>' +
            '<input type="radio" name="actno" value="2" checked>No' +
            '</td>' +
            '</tr>' +
            '</table><br>' +
            '<br></div></div>');

        // Save button
        var saveb = $('<button class="button user_button" title="Save" id="guardar' + datos.length + '" style="margin-left:53.5%;">' +
            '<img src="iconos/guardar.svg" height="40px">' +
            '</button>');

        // Delete function
        deleteb.on("click", function () {
            $(ucont).remove();
            $(editb).remove();
            $(uinfo).remove();
            $(deleteb).remove();
            $(saveb).remove();
        });

        $(ucont).hide();
        $(saveb).hide();
        
        // Show info
        uinfo.on("click", function () {
            if ($(ucont).is(":visible")) {
                $(ucont).hide();
            } else {
                $(ucont).show();
            }

        });

        $('.inputedit').attr('readonly', true);

        // Allow edit
        editb.on("click", function () {
            $('.inputedit').removeAttr('readonly');
            if ($(saveb).is(":visible")) {
                $(saveb).hide();
            } else {
                $(saveb).show();
            }
        });

        // Save new info
        saveb.on("click", function () {
            var newnom = document.getElementById("nametxt").value;
            var newapel = document.getElementById("lastntxt").value;
            var newtel = document.getElementById("emailtxt").value;
            var newmail = document.getElementById("usernametxt").value;
            var index = datos.findIndex(item => item.nombre === nom);
            console.log(index);
            datos[index].nombre = newnom;
            datos[index].apellido = newapel;
            datos[index].telefono = newtel;
            datos[index].correo = newmail;
            console.log(datos[index]);
            var divid = "#user_list" + index;
            //Check if new info is saved
            console.log(divid);
        });

        // Show info
        $("body").append(uinfo, editb, deleteb, ucont, saveb);

    });
    

});