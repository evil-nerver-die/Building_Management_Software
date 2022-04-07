package com.bms.persistences.Customer;

import com.bms.models.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{

    CustomerRepository repository;

    public CustomerServiceImpl(CustomerRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Customer> findByNameContaining(String cusName) {
        return repository.findByNameContaining(cusName);
    }

    @Override
    public List<Customer> findByPhoneContaining(String cusPhone) {
        return repository.findByPhoneContaining(cusPhone);
    }

    @Override
    public List<Customer> findByEmailContaining(String cusEmail) {
        return repository.findByEmailContaining(cusEmail);
    }

    @Override
    public List<Customer> findAll() {
        return repository.findAll();
    }

    public Customer save(Customer customer){
        return repository.save(customer);
    }

    @Override
    public Customer getById(Integer id){return repository.getById(id);}

    @Override
    public void deleteByID(Integer cusId) {
        repository.deleteById(cusId);
    }
}