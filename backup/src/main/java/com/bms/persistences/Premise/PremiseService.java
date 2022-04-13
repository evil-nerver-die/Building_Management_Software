package com.bms.persistences.Premise;

import com.bms.models.Premises;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

public interface PremiseService {
    List<Premises> findByName(String premiseName);

    List<Premises> findByFloor(Integer floor);

    List<Premises> findAll();

    Premises getById(Integer id);

    Premises save(Premises premises);

    void deleteByID(Integer id);

}
