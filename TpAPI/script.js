function mostrarAlumno(){
    $("#mostrar-datos").css("display", "block");
    $("#ingrsar-datos").css("display", "none");
    $.ajax ({
        url: "http://localhost:8080/api/datos/alumnos",
        type: "GET"
    })
    .done(function(data){
        let info = new Map;
        info = JSON.stringify(data);
        document.getElementById("mostrar-datos").innerHTML = info;
        console.log(info)
        
    })
    .fail(function(jqXHR,textStatus, errorTrhow){
        console.log("error, no se encontraron datos")
        console.log(jqXHR)
        console.log(textStatus)
        console.log(errorTrhow)
    })
    

    

}



function obtenerAlumno(){
    let id = $("#input-id-select").val()
    $.ajax ({
        url: "http://localhost:8080/api/datos/alumnos/" + id,
        type: "GET"
    })
    .done(function(data){
        let info = new Map;
        info = JSON.stringify(data);
        document.getElementById("datos-alumno-seleccionado").innerHTML = info;
        console.log(info)
        
    })
    .fail(function(jqXHR,textStatus, errorTrhow){
        console.log("error, no se encontraron datos")
        console.log(jqXHR)
        console.log(textStatus)
        console.log(errorTrhow)
    })
}




function agregarAlumno(){
    let nombre = $("#input-nombre").val();
    let edad = parseInt($("#input-edad").val());
    let objetoConInformacion = { Nombre : nombre , Edad : edad };
    let idAlumno = $("#input-id").val();
    $("#mostrar-datos").css("display", "none");
$.ajax({
        url: "http://localhost:8080/api/datos/alumnos/" + idAlumno,
        type: 'POST',
        contentType: "application/json",
        data: JSON.stringify(objetoConInformacion)
})
.fail(function (jqXHR, textStatus, errorThrown) {
    console.log("error, no se pudo ingresar los nuevos datos");
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrown);
});
    

    

}
function borrarAlumno(){
    $("#ingrsar-datos").css("display", "none");
    $("#mostrar-datos").css("display", "none");

    let idAlumno = parseInt($("#input-id-eliminar").val());

    $.ajax( {
        url : "http://localhost:8080/api/datos/alumnos/" + idAlumno,
        type : 'DELETE'
    })
        
        
        .fail(function(jqXHR,textStatus, errorTrhow){
            console.log("error, no se encontraron datos")
            console.log(jqXHR)
            console.log(textStatus)
            console.log(errorTrhow)
        })
}

function cambiar(opcion){
    

    let IDalumno = $("#input-id-mod").val();
    let dato;
    
    if(opcion == 2){
        dato  = parseInt($("#input-dato-mod").val());
    }
    else{
         dato  = $("#input-dato-mod").val();
    }

    $.ajax( {
        url : 'http://localhost:8080/api/datos/alumnos/' + IDalumno,
        type : 'PATCH',
        contentType: "application/json",
        data: JSON.stringify(dato)
    })
        .done(function ( data ) {
                
        })  
        
        .fail(function(jqXHR,textStatus, errorTrhow){
            console.log("error, no se encontraron datos")
            console.log(jqXHR)
            console.log(textStatus)
            console.log(errorTrhow)
        })
}

function mostrarInputsActualizar(){
    $("#eliminar-datos").css("display", "none");
    $("#mostrar-datos").css("display", "none");
    $("#ingresar-datos").css("display", "none");
    $("#inputs-actualizar").css("display", "block")
    $("#alumnoID").css("display", "none");
}


function mostrarInputs(){
    $("#ingresar-datos").css("display", "block");
    $("#mostrar-datos").css("display", "none");
    $("#eliminar-datos").css("display", "none");
    $("#inputs-actualizar").css("display", "none")
    $("#alumnoID").css("display", "none");
}

function mostrarInputsEliminar(){
    $("#eliminar-datos").css("display", "block");
    $("#mostrar-datos").css("display", "none");
    $("#ingresar-datos").css("display", "none");
    $("#inputs-actualizar").css("display", "none")
    $("#alumnoID").css("display", "none");
}

function mostrarObtenerAlumno(){
    $("#alumnoID").css("display", "block");
    $("#eliminar-datos").css("display", "none");
    $("#mostrar-datos").css("display", "none");
    $("#ingresar-datos").css("display", "none");
    $("#inputs-actualizar").css("display", "none")
}