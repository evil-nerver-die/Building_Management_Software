package com.bms.persistences.Gross;

import com.bms.models.Gross;
import org.springframework.stereotype.Service;

@Service
public class GrossServiceImpl implements GrossService{

    GrossRepository repository;

    public GrossServiceImpl(GrossRepository repository) {
        this.repository = repository;
    }


    @Override
    public Iterable<Gross> findAll() {
        return repository.findAll();
    }

    public Gross save(Gross gross){
        return repository.save(gross);
    }

    @Override
    public void deleteByGroID(Integer gosId) {
        repository.deleteByGroId(gosId);
    }
}