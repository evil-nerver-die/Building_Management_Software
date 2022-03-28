package com.bms.persistences.Premise;

import com.bms.models.Premises;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PremiseRepository extends JpaRepository<Premises, Integer> {
    List<Premises> findByPremiseNameContaining(String premiseName);

    List<Premises> findByPremiseFloorContaining(Integer floor);

    Premises save(Premises premises);

    void deleteById(Integer id);
}
