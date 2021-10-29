function mostrarAlumno(){
    $.ajax ({
        url: "http://localhost:8080/api/datos/alumnos",
        type: "GET",
    })
    .done(function(data){
        let saludo = data.mensaje;
        var datos= JSON.stringify(data);
        document.getElementById("mostrarAlumnos").innerHTML= datos;
    })
    .fail(function(jqXHR,textStatus, errorTrhow){
        console.log("error, no se encontraron datos")
        console.log(jqXHR)
        console.log(textStatus)
        console.log(errorTrhow)
    })
    

    

}function agregarAlumno(){
    let objetoConInformacion = { Nombre : "Nadia" , Edad : 78 };
    let idAlumno = 2;
$.ajax({
        url: "http://localhost:8080/api/datos/alumnos/10",
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

    let idAlumno = 2;

    $.ajax( {
        url : 'http://localhost:8080/api/datos/alumnos/' + idAlumno,
        type : 'DELETE'
    })
        
        
        .fail(function(jqXHR,textStatus, errorTrhow){
            console.log("error, no se encontraron datos")
            console.log(jqXHR)
            console.log(textStatus)
            console.log(errorTrhow)
        })
}

function actualizarAlumno(){

    let IDalumno = 10;

    $.ajax( {
        url : 'http://localhost:8080/api/datos/alumnos/' + IDalumno,
        type : 'PATCH',
        contentType: "application/json",
        data: JSON.stringify("Matias")
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
