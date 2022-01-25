package com.bms.persistences;

import com.bms.models.Gross;
import org.springframework.stereotype.Service;

import java.util.List;

public interface GrossService {
    List<Gross> getByGroNameContaining(String name);

    Iterable<Gross> findAll();

    Gross save(Gross gross);

    void deleteByID(Integer cus_id);


}
