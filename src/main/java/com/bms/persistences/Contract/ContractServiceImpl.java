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
    public List<Contract> findByNameContaining(String conName) {
        return repository.findByNameContaining(conName);
    }

    @Override
    public List<Contract> findByCodeContaining(String conCode) {
        return repository.findByCodeContaining(conCode);
    }

    @Override
    public List<Contract> findByDateCreatedContaining(String conCreated) {
        return repository.findByDateCreatedContaining(conCreated);
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