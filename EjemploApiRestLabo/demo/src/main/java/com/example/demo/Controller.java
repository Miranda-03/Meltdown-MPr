package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

/** url: http://localhost:8080/api/... **/

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Controller {

    @Autowired
    private AccesoBaseDeDatos accesoABaseDeDatos;

    public Controller() {
        this.accesoABaseDeDatos = new AccesoBaseDeDatos("personas","alumnos");

    }


    @RequestMapping(value = "/datos/alumnos", method = RequestMethod.GET)
    public ResponseEntity<Object> obtenerPaginas() throws SQLException {
        this.accesoABaseDeDatos.conectar("martin", "0103200403");
        HashMap<String, Integer> datos  = accesoABaseDeDatos.obtenerDatos();;
        System.out.println(datos.get("Martin"));
        datos.put("hola", 2);
        return new ResponseEntity<>(datos, HttpStatus.OK);
    }

    @RequestMapping(value = "/datos/alumnos", method = RequestMethod.POST)
    public ResponseEntity<Object> agregarPagina(@RequestBody HashMap alumno) {
        String nombre = (String) alumno.get("nombre");
        int edad = (int) alumno.get("edad");
        Alumno nuevoAlumno = new Alumno(nombre, edad);
        accesoABaseDeDatos.agregarAlumno(nuevoAlumno);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

