package com.bms.persistences.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bms.models.Services;
import org.springframework.transaction.annotation.Transactional;

public interface ServicesService {
    List<Services> findByName(String serName);

    List<Services> findByPrice(Double serPrice);

    List<Services> findByProvider(String serProvider);

    List<Services> findAll();

    Services save(Services services);

    void deleteById(Integer serId);

    Services getById(Integer id);
}
