package com.bms.persistences.Services;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.bms.models.Services;


public interface ServicesRepository extends JpaRepository<Services, Long> {
    List<Services> findByName(String serName);

    List<Services> findByPrice(String serPrice);

    List<Services> findByProvider(String serProvider);

    List<Services> getByNameContaining(String serName);

    Services save(Services services);

    void deleteById(Integer Id);
}
