package io.github.selinerdominik.shipmanager.controller;

import io.github.selinerdominik.shipmanager.dto.ship.ShipInput;
import io.github.selinerdominik.shipmanager.dto.ship.ShipListOutput;
import io.github.selinerdominik.shipmanager.dto.ship.ShipOutput;
import io.github.selinerdominik.shipmanager.model.Ship;
import io.github.selinerdominik.shipmanager.service.ShipService;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/ships")
public class ShipController {
    private final ShipService shipService;

    public ShipController(ShipService shipService) {
        this.shipService = shipService;
    }

    @SecurityRequirement(name = "basicAuth")
    @GetMapping
    public ShipListOutput getAll(
            @RequestParam int page,
            @Parameter(description = "Number of items per page", schema = @Schema(minimum = "1"))
            @RequestParam int size) {
        if (size < 1) {
            throw new IllegalArgumentException("Page size must be greater than 0");
        }
        ShipOutput[] ships = shipService.getAllShips(page, size).stream().map(
                ship -> {
                    return new ShipOutput(
                            ship.getId(),
                            ship.getName(),
                            ship.getDescription(),
                            ship.getCreatedAt().toString());
                }
        ).toArray(ShipOutput[]::new);
        int shipCount = (int) shipService.getShipCount();
        int pageCount = ((shipCount - 1) / size) + 1;
        return new ShipListOutput(ships, pageCount);
    }

    @SecurityRequirement(name = "basicAuth")
    @GetMapping("/{id}")
    public ShipOutput getById(@PathVariable Long id) {
        Ship ship = shipService.getShipById(id);
        return new ShipOutput(
                ship.getId(),
                ship.getName(),
                ship.getDescription(),
                ship.getCreatedAt().toString()
        );
    }

    @SecurityRequirement(name = "basicAuth")
    @PostMapping
    public ShipOutput createShip(@RequestBody ShipInput shipInput) {
        Ship newShip = shipService.saveShip(new Ship(shipInput.getName(), shipInput.getDescription()));
        return new ShipOutput(
                newShip.getId(),
                newShip.getName(),
                newShip.getDescription(),
                newShip.getCreatedAt().toString()
        );
    }

    @SecurityRequirement(name = "basicAuth")
    @PutMapping("/{id}")
    public ShipOutput updateShip(@PathVariable Long id, @RequestBody ShipInput shipInput) {
        Ship updatedShip = shipService.updateShip(id, new Ship(shipInput.getName(), shipInput.getDescription()));
        return new ShipOutput(
                updatedShip.getId(),
                updatedShip.getName(),
                updatedShip.getDescription(),
                updatedShip.getCreatedAt().toString()
        );
    }
}
