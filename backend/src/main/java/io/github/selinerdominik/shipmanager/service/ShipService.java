package io.github.selinerdominik.shipmanager.service;

import io.github.selinerdominik.shipmanager.model.Ship;
import io.github.selinerdominik.shipmanager.repository.ShipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShipService {
    private final ShipRepository shipRepository;

    public ShipService(@Autowired ShipRepository shipRepository) {
        this.shipRepository = shipRepository;
    }

    public List<Ship> getAllShips() {
        return shipRepository.findAll();
    }

    public List<Ship> getAllShips(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return shipRepository.findAll(pageRequest).getContent();
    }

    public long getShipCount() {
        return shipRepository.count();
    }

    public Ship getShipById(Long id) {
        return shipRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Ship not found"));
    }

    public Ship saveShip(Ship ship) {
        return shipRepository.save(ship);
    }

    public Ship updateShip(Long id, Ship ship) {
        Ship existingShip = shipRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Ship not found"));
        existingShip.setName(ship.getName());
        existingShip.setDescription(ship.getDescription());
        return shipRepository.save(existingShip);
    }
}
