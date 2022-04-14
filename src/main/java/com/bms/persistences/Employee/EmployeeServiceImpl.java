package com.bms.persistences.Employee;

import com.bms.models.Employee;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    EmployeeRepository repository;

    public EmployeeServiceImpl(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Employee> findByNameContaining(String cusName) {
        return repository.findByNameContaining(cusName);
    }

    @Override
    public List<Employee> findByPhoneContaining(String cusPhone) {
        return repository.findByPhoneContaining(cusPhone);
    }

    @Override
    public List<Employee> findByEmailContaining(String cusEmail) {
        return repository.findByEmailContaining(cusEmail);
    }

    @Override
    public List<Employee> findAll() {
        return repository.findAll();
    }

    public Employee save(Employee employee){
        return repository.save(employee);
    }

    @Override
    public Employee getById(Integer id){return repository.getById(id);}

    @Override
    public void deleteByID(Integer cusId) {
        repository.deleteById(cusId);
    }
}