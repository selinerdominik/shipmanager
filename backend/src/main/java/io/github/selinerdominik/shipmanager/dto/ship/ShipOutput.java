package io.github.selinerdominik.shipmanager.dto.ship;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ShipOutput {
    private Long id;
    private String name;
    private String description;
    private String createdAt;
}
