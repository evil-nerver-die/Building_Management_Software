package com.bms.persistences.Services;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.bms.models.Services;

public interface ServicesRepository extends CrudRepository<Services, Long> {
    List<Services> findByServiceName(String serName);

    List<Services> findByServicePrice(String serPrice);

    List<Services> findByServiceProvider(String serProvider);

    Services save(Services services);

    void deleteBySerId(Integer serId);
}
