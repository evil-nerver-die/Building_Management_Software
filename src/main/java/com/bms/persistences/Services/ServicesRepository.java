package com.bms.persistences.Services;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.bms.models.Services;

public interface ServicesRepository extends CrudRepository<Services, Long> {
    List<Services> getBySerNameContaining(String serName);

    Services save(Services services);

    void deleteBySerId(Integer serId);
}
