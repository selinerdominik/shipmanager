package io.github.selinerdominik.shipmanager.controller;

import io.github.selinerdominik.shipmanager.dto.ship.ShipInput;
import io.github.selinerdominik.shipmanager.dto.ship.ShipOutput;
import io.github.selinerdominik.shipmanager.model.Ship;
import io.github.selinerdominik.shipmanager.service.ShipService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Stream;

@RestController
@RequestMapping("api/ships")
public class ShipController {
    private final ShipService shipService;

    public ShipController(ShipService shipService) {
        this.shipService = shipService;
    }

    @SecurityRequirement(name = "basicAuth")
    @GetMapping
    public Stream<ShipOutput> getAll() {
        return shipService.getAllShips().stream().map(
                ship -> {
                    return new ShipOutput(
                            ship.getId(),
                            ship.getName(),
                            ship.getDescription(),
                            ship.getCreatedAt().toString());
                }
        );
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
