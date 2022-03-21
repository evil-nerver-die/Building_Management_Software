package com.bms.persistences;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bms.models.Services;

public interface ServicesService {
    List<Services> getServiceName(String ser_name);

    Iterable<Services> findAll();

    Services save(Services services);

    void deleteById(Integer ser_id);
}
