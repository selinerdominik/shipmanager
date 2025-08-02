package io.github.selinerdominik.shipmanager;


import io.github.selinerdominik.shipmanager.model.Ship;
import io.github.selinerdominik.shipmanager.repository.ShipRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInitializer implements CommandLineRunner {
    private final ShipRepository shipRepository;

    public DatabaseInitializer(ShipRepository shipRepository) {
        this.shipRepository = shipRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (shipRepository.count() > 0) {
            return;
        }
        shipRepository.save(new Ship("Test Ship 1", "Test Ship Description 1"));
        shipRepository.save(new Ship("Test Ship 2", "Test Ship Description 2"));
        shipRepository.save(new Ship("Test Ship 3", "Test Ship Description 3"));
    }
}
