package com.bms.persistences.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bms.models.Services;

public interface ServicesService {
    List<Services> findBySerName(String serName);

    List<Services> findBySerPrice(String serPrice);

    List<Services> findBySerProvider(String serProvider);

    Iterable<Services> findAll();

    Services save(Services services);

    void deleteBySerId(Integer serId);
}
