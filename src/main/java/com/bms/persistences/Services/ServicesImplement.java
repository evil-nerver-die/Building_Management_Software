package com.bms.persistences.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bms.models.Services;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ServicesImplement implements ServicesService {
    ServicesRepository repo;

    public ServicesImplement(ServicesRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<Services> findByName(String serName) {
        return repo.findByName(serName);
    }

    @Override
    public List<Services> findByPrice(Double serPrice) {
        return repo.findByPrice(serPrice);
    }

    @Override
    public List<Services> findByProvider(String serProvider) {
        return repo.findByProvider(serProvider);
    }

    @Override
    public List<Services> findAll() {
        return repo.findAll();
    }

    @Override
    public Services getById(Integer id){return repo.getById(id);}

    @Override
    public Services save(Services services) {
        return repo.save(services);
    }

    @Override
    public void deleteById(Integer serId) {
        repo.deleteById(serId);
    }
}
