package com.bms.persistences.premise;

import com.bms.models.Premises;
import org.springframework.stereotype.Service;

import java.util.LinkedList;

public interface PremiseService {
    LinkedList<Premises> getByPremiseName(String premiseName);

    Iterable<Premises> findAll();

    Premises save(Premises premises);

    void deleteById(Integer id);
}
