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
    public List<Services> findByServiceName(String serName) {
        return repo.findByServiceName(serName);
    }

    @Override
    public List<Services> findByServicePrice(String serPrice) {
        return repo.findByServicePrice(serPrice);
    }

    @Override
    public List<Services> findByServiceProvider(String serProvider) {
        return repo.findByServiceProvider(serProvider);
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
