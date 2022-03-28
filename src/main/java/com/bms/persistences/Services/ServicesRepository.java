package com.bms.persistences.Services;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.bms.models.Services;


public interface ServicesRepository extends JpaRepository<Services, Long> {
    List<Services> findBySerName(String serName);

    List<Services> findBySerPrice(String serPrice);

    List<Services> findBySerProvider(String serProvider);

    List<Services> getBySerNameContaining(String serName);

    Services save(Services services);

    void deleteById(Integer Id);
}
