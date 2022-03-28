package com.bms.persistences.Premise;

import com.bms.models.Premises;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

public interface PremiseService {
    List<Premises> findByPremiseName(String premiseName);

    List<Premises> findByPremiseFloor(Integer floor);

    List<Premises> findAll();

    Premises save(Premises premises);

    void deleteByID(Integer id);

}
