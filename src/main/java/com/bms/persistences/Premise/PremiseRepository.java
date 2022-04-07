package com.bms.persistences.Premise;

import com.bms.models.Premises;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PremiseRepository extends JpaRepository<Premises, Integer> {
    List<Premises> findByNameContaining(String premiseName);

    List<Premises> findByFloorContaining(Integer floor);

    Premises save(Premises premises);

    Premises getById(Integer id);

    void deleteById(Integer id);
}
