package io.github.selinerdominik.shipmanager.controller;

import io.github.selinerdominik.shipmanager.dto.auth.LoginRequest;
import io.github.selinerdominik.shipmanager.dto.auth.LoginResponse;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Value("${spring.security.user.name}")
    private String configUsername;

    @Value("${spring.security.user.password}")
    private String configPassword;

    @PostMapping
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        if (loginRequest.getUsername().equals(configUsername) && loginRequest.getPassword().equals(configPassword)) {
            return new LoginResponse("ok");
        }
        return new LoginResponse("failed");
    }
}
