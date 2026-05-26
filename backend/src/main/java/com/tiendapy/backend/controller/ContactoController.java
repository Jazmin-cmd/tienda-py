package com.tiendapy.backend.controller;

import com.tiendapy.backend.model.Contacto;
import com.tiendapy.backend.repository.ContactoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contactos")
@CrossOrigin(origins = "*")
public class ContactoController {

    @Autowired
    private ContactoRepository contactoRepository;

    @PostMapping
    public ResponseEntity<Contacto> guardar(@RequestBody Contacto contacto) {
        Contacto guardado = contactoRepository.save(contacto);
        return ResponseEntity.ok(guardado);
    }

    @GetMapping
    public List<Contacto> listar() {
        return contactoRepository.findAll();
    }
}