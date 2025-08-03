package io.github.selinerdominik.shipmanager.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginRequest {
    private String username;
    private String password;
}
