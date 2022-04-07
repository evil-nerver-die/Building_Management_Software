package com.bms.persistences.Contract;

import com.bms.models.Contract;

import java.util.List;

public interface ContractService {
    List<Contract> findByNameContaining(String Name);

    List<Contract> findByCodeContaining(String Code);

    List<Contract> findByDateCreatedContaining(String Created);

    List<Contract> findAll();

    Contract save(Contract contract);

    void deleteByID(Integer conId);

    Contract getById(Integer id);


}
