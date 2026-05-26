package com.tiendapy.backend.controller;

import com.tiendapy.backend.model.Usuario;
import com.tiendapy.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario loginData) {
        Optional<Usuario> usuario = usuarioRepository.findByEmail(loginData.getEmail());

        if (usuario.isPresent() && usuario.get().getPassword().equals(loginData.getPassword())) {
            return ResponseEntity.ok(usuario.get());
        }

        return ResponseEntity.status(401).body("Credenciales incorrectas");
    }

    @PostMapping("/registro")
    public ResponseEntity<Usuario> registro(@RequestBody Usuario usuario) {
        Usuario guardado = usuarioRepository.save(usuario);
        return ResponseEntity.ok(guardado);
    }
}