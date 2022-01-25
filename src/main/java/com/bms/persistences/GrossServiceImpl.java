package com.bms.persistences;

import com.bms.models.Gross;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GrossServiceImpl implements GrossService{

    GrossRepository repository;

    public GrossServiceImpl(GrossRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Gross> getByGroNameContaining(String gro_name) {
        return repository.getByGroNameContaining(gro_name);
    }

    @Override
    public Iterable<Gross> findAll() {
        return repository.findAll();
    }

    public Gross save(Gross gross){
        return repository.save(gross);
    }

    @Override
    public void deleteByID(Integer gos_id) {
        repository.deleteById(gos_id);
    }
}