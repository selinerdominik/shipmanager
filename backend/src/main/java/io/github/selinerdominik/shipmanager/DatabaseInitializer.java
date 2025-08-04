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
        for (int i = 0; i < 101; i++) {
            shipRepository.save(new Ship("Test Ship " + i, "Test Ship Description " + i));
        }
    }
}
