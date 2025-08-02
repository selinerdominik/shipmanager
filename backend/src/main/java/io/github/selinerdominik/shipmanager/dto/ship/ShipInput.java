package io.github.selinerdominik.shipmanager.dto.ship;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ShipInput {
    private String name;
    private String description;
}
