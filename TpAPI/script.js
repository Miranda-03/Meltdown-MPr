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
    $.ajax ({
        url: "http://localhost:8080/api/alumnos/",
        type: "POST",
        data : {id: 102, nombre: "Carlos", edad: 18}
    })
    .done(function(response){
        let saludo = response.mensaje;
        var datos= JSON.stringify(response);
        document.getElementById("agregarAlumno").innerHTML= datos;
    })
    .fail(function(jqXHR,textStatus, errorTrhow){
        console.log("error, no se encontraron datos")
        console.log(jqXHR)
        console.log(textStatus)
        console.log(errorTrhow)
    })
    

    

}
function borrarAlumno(){
    $.ajax( {
        url : 'http://localhost:8080/api/alumnos/',
        type : 'DELETE'
    })
        .done(function ( data ) {
                let saludo = data.mensaje;
                var datos= JSON.stringify(data);
                document.getElementById("borrarAlumno").innerHTML= datos;    
        })  
        
        .fail(function(jqXHR,textStatus, errorTrhow){
            console.log("error, no se encontraron datos")
            console.log(jqXHR)
            console.log(textStatus)
            console.log(errorTrhow)
        })
}
