package com.bms.persistences;

import com.bms.models.Gross;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

interface GrossRepository extends CrudRepository<Gross, Integer> {


    Gross save(Gross gross);

    void deleteById(Integer gro_id);

}