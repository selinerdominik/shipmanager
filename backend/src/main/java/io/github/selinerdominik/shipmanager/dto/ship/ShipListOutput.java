package io.github.selinerdominik.shipmanager.dto.ship;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ShipListOutput {
    private ShipOutput[] ships;
    private int totalPages;
}
