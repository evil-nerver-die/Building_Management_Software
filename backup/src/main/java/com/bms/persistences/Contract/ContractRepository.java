package com.bms.persistences.Contract;

import com.bms.models.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

interface ContractRepository extends JpaRepository<Contract, Integer> {

    List<Contract> findByNameContaining(String Name);

    List<Contract> findByCodeContaining(String Code);

    List<Contract> findByDateCreatedContaining(String Created);

    Contract save(Contract contract);

    void deleteById(Integer conId);

    Contract getById(Integer id);

}