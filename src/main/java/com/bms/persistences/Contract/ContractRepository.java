package com.bms.persistences.Contract;

import com.bms.models.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

interface ContractRepository extends JpaRepository<Contract, Integer> {

    List<Contract> findByConNameContaining(String conName);

    List<Contract> findByConCodeContaining(String conCode);

    List<Contract> findByConCreatedContaining(String conCreated);

    Contract save(Contract customer);

    //void deleteByConId(Integer cusId);

}