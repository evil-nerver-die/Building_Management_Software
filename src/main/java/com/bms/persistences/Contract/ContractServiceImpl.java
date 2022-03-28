package com.bms.persistences.Contract;

import com.bms.models.Contract;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractServiceImpl implements ContractService {

    ContractRepository repository;

    public ContractServiceImpl(ContractRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Contract> findByConNameContaining(String conName) {
        return repository.findByConNameContaining(conName);
    }

    @Override
    public List<Contract> findByConCodeContaining(String conCode) {
        return repository.findByConCodeContaining(conCode);
    }

    @Override
    public List<Contract> findByConCreatedContaining(String conCreated) {
        return repository.findByConCreatedContaining(conCreated);
    }

    @Override
    public List<Contract> findAll() {
        return repository.findAll();
    }

    public Contract save(Contract Contract){
        return repository.save(Contract);
    }

    @Override

    public void deleteByID(Integer conId) {
        repository.deleteById(conId);
    }
}