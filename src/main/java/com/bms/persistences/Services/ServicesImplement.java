package com.bms.persistences.Services;

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
    public List<Services> findBySerName(String serName) {
        return repo.findBySerName(serName);
    }

    @Override
    public List<Services> findBySerPrice(String serPrice) {
        return repo.findBySerPrice(serPrice);
    }

    @Override
    public List<Services> findBySerProvider(String serProvider) {
        return repo.findBySerProvider(serProvider);
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
    public void deleteBySerId(Integer serId) {
        repo.deleteBySerId(serId);
    }
}
