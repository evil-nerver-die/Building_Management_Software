package com.bms.persistences.Premise;

import com.bms.models.Premises;
import org.springframework.stereotype.Service;

import java.util.LinkedList;

public interface PremiseService {
    LinkedList<Premises> findByPremiseName(String premiseName);

    LinkedList<Premises> findByPremiseFloor(Integer floor);

    Iterable<Premises> findAll();

    Premises save(Premises premises);

    void deleteByPremiseId(Integer id);
}
