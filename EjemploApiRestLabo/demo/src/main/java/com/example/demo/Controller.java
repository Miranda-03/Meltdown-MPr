package com.example.demo;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
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
        this.accesoABaseDeDatos.conectar("alumno", "alumnoipm");
        HashMap<String, Object> datos  = accesoABaseDeDatos.obtenerDatos();
        return new ResponseEntity<>(datos, HttpStatus.OK);
    }

    @RequestMapping(value = "/datos/alumnos/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> obtenerAlumno(@PathVariable int id) throws SQLException {
        this.accesoABaseDeDatos.conectar("alumno", "alumnoipm");
        HashMap<String, Object> datos = new HashMap<>();
        ResultSet resultado = this.accesoABaseDeDatos.obtenerResultado("select * from alumnos where id = " + id);
        if (resultado.next()){
            int idAlumno = resultado.getInt("id");
            String nombre = resultado.getString("Nombre");
            Integer edad = resultado.getInt("Edad");
            Alumno nAlumno = new Alumno(idAlumno, nombre, edad);
            datos.put("Alumno: ", nAlumno);
        }
        return new ResponseEntity<>(datos, HttpStatus.OK);
    }

    @RequestMapping(value = "/datos/alumnos/{id}", method = RequestMethod.POST)
    public ResponseEntity<Object> agregarPagina(@RequestBody HashMap alumno, @PathVariable int id){
        this.accesoABaseDeDatos.conectar("alumno", "alumnoipm");
        String nombre = (String) alumno.get("Nombre");
        int edad = (Integer)  alumno.get("Edad");
        Alumno nuevoAlumno = new Alumno(id, nombre, edad);
        accesoABaseDeDatos.agregarAlumno(nuevoAlumno);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/datos/alumnos/{id}", method = RequestMethod.PATCH)
    public ResponseEntity<Object> modificarAlumno(@RequestBody Object dato, @PathVariable int id){
        this.accesoABaseDeDatos.conectar("alumno", "alumnoipm");
        if(dato.getClass().getName().equals("java.lang.Integer")){
            accesoABaseDeDatos.modificarTabla("update alumnos set edad = " + dato + " where id = " + id);
        }
        else {
            accesoABaseDeDatos.modificarTabla("update alumnos set Nombre = " + '"' + dato + '"' +" where id = " + id);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/datos/alumnos/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> liquidarAlumno(@PathVariable int id){
        this.accesoABaseDeDatos.conectar("alumno", "alumnoipm");
        accesoABaseDeDatos.modificarTabla("delete from alumnos where id = " + id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

