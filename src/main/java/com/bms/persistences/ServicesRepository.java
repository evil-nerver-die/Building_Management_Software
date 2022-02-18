package com.bms.persistences;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.bms.models.Services;

public interface ServicesRepository extends CrudRepository<Services, Long> {
    List<Services> getServiceName(String ser_name);

    Services save(Services services);

    void deleteById(Integer ser_id);
}
