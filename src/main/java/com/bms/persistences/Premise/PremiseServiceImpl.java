package com.bms.persistences.Premise;

import com.bms.models.Premises;
import com.bms.persistences.Premise.PremiseService;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class PremiseServiceImpl implements PremiseService {

    PremiseRepository repository;

    public PremiseServiceImpl(PremiseRepository repository){
        this.repository = repository;
    }

    @Override
    public List<Premises> findByName(String premiseName) {
        return repository.findByNameContaining(premiseName);
    }

    @Override
    public List<Premises> findByFloor(String floor) {
        return repository.findByFloorContaining(floor);
    }

    @Override
    public List<Premises> findAll() {
        return repository.findAll();
    }

    @Override
    public Premises save(Premises premises) {
        return repository.save(premises);
    }

    @Override
    public Premises getById(Integer id) {return repository.getById(id);}

    @Override
    public void deleteByID(Integer id) {
        repository.deleteById(id);

    }
}
