package com.bms.persistences.Services;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.bms.models.Services;
import org.springframework.transaction.annotation.Transactional;

public interface ServicesRepository extends JpaRepository<Services, Integer> {
    List<Services> findByName(String serName);

    List<Services> findByPrice(Double serPrice);

    List<Services> findByProvider(String serProvider);

    List<Services> getByNameContaining(String serName);

    Services save(Services services);

    void deleteById(Integer Id);

    Services getById(Integer id);
}
