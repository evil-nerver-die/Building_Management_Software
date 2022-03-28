package com.bms.persistences.Contract;

import com.bms.models.Contract;

import java.util.List;

public interface ContractService {
    List<Contract> findByConNameContaining(String conName);

    List<Contract> findByConCodeContaining(String conCode);

    List<Contract> findByConCreatedContaining(String conCreated);

    Iterable<Contract> findAll();

    Contract save(Contract contract);

    void deleteByID(Integer conId);


}
