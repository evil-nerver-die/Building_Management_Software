package com.bms.persistences.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bms.models.Services;

public interface ServicesService {
    List<Services> findByName(String serName);

    List<Services> findByPrice(String serPrice);

    List<Services> findByProvider(String serProvider);

    List<Services> findAll();

    Services save(Services services);

    void deleteById(Integer serId);

    Services getById(Integer id);
}
