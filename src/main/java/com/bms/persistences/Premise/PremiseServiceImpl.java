package com.bms.persistences.Premise;

import com.bms.models.Premises;
import com.bms.persistences.Premise.PremiseService;
import org.springframework.stereotype.Service;

import java.util.LinkedList;

@Service
public class PremiseServiceImpl implements PremiseService {

    PremiseRepository repository;

    public PremiseServiceImpl(PremiseRepository repository){
        this.repository = repository;
    }

    @Override
    public LinkedList<Premises> findByPremiseName(String premiseName) {
        return repository.findByPremiseNameContaining(premiseName);
    }

    @Override
    public LinkedList<Premises> findByPremiseFloor(Integer floor) {
        return repository.findByPremiseFloorContaining(floor);
    }

    @Override
    public Iterable<Premises> findAll() {
        return repository.findAll();
    }

    @Override
    public Premises save(Premises premises) {
        return repository.save(premises);
    }

    @Override
    public void deleteByPremiseId(Integer id) {
        repository.deleteByPremiseId(id);
    }
}
