package com.bms.persistences;

import com.bms.models.Gross;
import org.springframework.stereotype.Service;

import java.util.List;

public interface GrossService {

    Iterable<Gross> findAll();

    Gross save(Gross gross);

    void deleteByGroID(Integer groId);


}
