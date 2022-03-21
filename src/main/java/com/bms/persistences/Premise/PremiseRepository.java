package com.bms.persistences.Premise;

import com.bms.models.Premises;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;

public interface PremiseRepository extends CrudRepository<Premises, Integer> {
    LinkedList<Premises> getByPremiseName(String premiseName);

    Premises save(Premises premises);

    void deleteById(Integer id);
}
