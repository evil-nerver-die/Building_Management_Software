package com.bms.persistences.Premise;

import com.bms.models.Premises;
import com.bms.persistences.PremiseService;
import org.springframework.stereotype.Service;

import java.util.LinkedList;

@Service
public class PremiseServiceImpl implements PremiseService {

    PremiseRepository repository;

    public PremiseServiceImpl(PremiseRepository repository){
        this.repository = repository;
    }

    @Override
    public LinkedList<Premises> getByPremiseName(String premiseName) {
        return repository.getByPremiseName(premiseName);
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
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
