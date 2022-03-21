package com.bms.persistences;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bms.models.Services;

@Service
public class ServicesImplement implements ServicesService {
    ServicesRepository repo;

    public ServicesImplement(ServicesRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<Services> getServiceName(String ser_name) {
        return repo.getServiceName(ser_name);
    }

    @Override
    public Iterable<Services> findAll() {
        return repo.findAll();
    }

    @Override
    public Services save(Services services) {
        return repo.save(services);
    }

    @Override
    public void deleteById(Integer ser_id) {
        repo.deleteById(ser_id);
    }
}
