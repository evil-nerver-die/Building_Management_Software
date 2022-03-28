package com.bms.persistences.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bms.models.Services;

public interface ServicesService {
    List<Services> findByServiceName(String serName);

    List<Services> findByServicePrice(String serPrice);

    List<Services> findByServiceProvider(String serProvider);

    Iterable<Services> findAll();

    Services save(Services services);

    void deleteBySerId(Integer serId);
}
